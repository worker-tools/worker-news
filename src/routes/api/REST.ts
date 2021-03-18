/**
 * An implementation of Hacker News API using the Firebase REST API.
 * 
 * The REST API has many drawbacks, the #1 of which is the amount of HTTP requests that are necessary to get
 * e.g. the comment tree.
 * 
 * Because of this, it is not suitable for Cloudflare Workers, which limits the # HTTP requests per invocation to ~50.
 * (Workers Unbound might change that, but as of this writing, it is not available to the public).
 * 
 * To make the best of this limitation, the functions below make use of Task Queues and Async Iterables to push
 * results to the client ASAP. While slower than all the alternatives, it's still cool to see in action 
 * (comments streaming in, etc...). 
 * 
 * It works best in Deno where there's no limit to the # of open HTTP connections. 
 * It also works in a Service Worker, but due to the limit of 4 (?) open connections per page, it's noticeably slower.
 */

import { Post, AThing, Comment, Quality } from './interface';
import { default as PQueue } from 'p-queue-browser';
import { formatDistanceToNowStrict } from 'date-fns';

const CONCURRENCY = 128;

// TypeScript, ugh..
type Resolve<T> = (value: T | PromiseLike<T>) => void
type Reject = (reason?: any) => void
type ResolvablePromise<T> = Promise<T> & { resolve: Resolve<T>, reject: Reject };
function resolvablePromise<T>(): ResolvablePromise<T> {
  let resolve!: Resolve<T>;
  let reject!: Reject;
  const p: Partial<ResolvablePromise<T>> = new Promise((res, rej) => { resolve = res; reject = rej; })
  p.resolve = resolve;
  p.reject = reject;
  return p as ResolvablePromise<T>;
}

export const API = 'https://hacker-news.firebaseio.com';

export const api = async <T>(path: string, useCache = true): Promise<T> => {
  const href = new URL(path, API).href;
  return fetch(href).then(x => x.json());
}

const PAGE = 30;

export async function* stories(p = 1): AsyncIterableIterator<Post> {
  const ids: number[] = await api(`/v0/topstories.json`);
  const ps = ids
    .slice(PAGE * (p - 1), PAGE * p)
    .reverse()
    .map(id => api<Post>(`/v0/item/${id}.json`));
  for (const p of ps) yield p;
}

type RESTPost = Omit<Post, 'kids'> & { kids: number[], time: number }
type RESTComment = Omit<Comment, 'kids'> & { kids: number[], time: number }

async function commentTask(id: number, queue: PQueue, dict: Map<number, ResolvablePromise<RESTComment>>) {
  const x: RESTComment = await api(`/v0/item/${id}.json`);
  dict.get(x.id)?.resolve(x);
  const kids = x.kids ?? []
  for (const kid of kids) {
    dict.set(kid, resolvablePromise());
    queue.add(() => commentTask(kid, queue, dict));
  }
}

async function* crawlCommentTree(kids: number[], dict: Map<number, ResolvablePromise<RESTComment>>, level = 0): AsyncGenerator<Comment> {
  for (const kid of kids) {
    const item = await dict.get(kid);
    if (item) {
      const { kids, text, ...rest } = item;
      yield { 
        ...rest, 
        level, 
        quality: 'c00', // REST API doesn't support quality..
        text: '<p>' + text,
        timeAgo: formatDistanceToNowStrict(item.time * 1000, { addSuffix: true }),
        kids: crawlCommentTree(kids || [], dict, level + 1),
      };
    }
  }
}

export async function comments(id: number): Promise<Post> {
  const post: RESTPost = await api(`/v0/item/${id}.json`);
  const queue = new PQueue({ concurrency: CONCURRENCY });
  const kids = post.kids ?? [];
  const dict = new Map(kids.map(id => [id, resolvablePromise<RESTComment>()]));
  queue.addAll(kids.map(id => () => commentTask(id, queue, dict)));
  // queue.clear();
  return { 
    ...post, 
    timeAgo: formatDistanceToNowStrict(post.time * 1000, { addSuffix: true }),
    kids: crawlCommentTree(kids, dict) };
}

export async function* take<T>(n: number, xs: AsyncIterable<T>): AsyncIterableIterator<T> {
  let i = 0;
  for await (const x of xs) {
    if (++i > n) break;
    yield x;
  }
}

export async function slurp<T>(xs: AsyncIterable<T>): Promise<T[]> {
  let ret: T[] = [];
  for await (const x of xs) {
    // console.log(x);
    ret.push(x);
  }
  return ret;
}
