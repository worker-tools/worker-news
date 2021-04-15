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

import { APost, AComment, Stories, AUser } from './interface';
import { default as PQueue } from 'p-queue-browser';
import { formatDistanceToNowStrict } from 'date-fns';
import { resolvablePromise, ResolvablePromise } from 'src/vendor/resolvable-promise';
import { blockquotify } from './util';

const CONCURRENCY = 128;

export const API = 'https://hacker-news.firebaseio.com';

export const api = async <T>(path: string): Promise<T> => {
  const url = new URL(path.endsWith('.json') ? path : `${path}.json`, API);
  return fetch(url.href).then(x => x.json());
}

const PAGE = 30;

const x = {
  [Stories.TOP]: `/v0/topstories.json`,
  [Stories.NEW]: '/v0/newstories.json',
  [Stories.BEST]: '/v0/beststories.json',
  [Stories.SHOW]: '/v0/showstories.json',
  [Stories.ASK]: '/v0/askstories.json',
  [Stories.JOB]: '/v0/jobstories.json',
};

export async function* stories(page = 1, type = Stories.TOP): AsyncIterableIterator<APost> {
  const href = x[type];
  const ps = (await api<number[]>(href))
    .slice(PAGE * (page - 1), PAGE * page)
    .map(id => api<RESTPost>(`/v0/item/${id}`));

  for await (const { kids, text, url, ...p } of ps) {
    yield {
      ...p,
      timeAgo: formatDistanceToNowStrict(p.time * 1000, { addSuffix: true }),
      text: text != null ? blockquotify(text) : null,
      url: text != null ? `item?id=${p.id}` : url, 
    };
  }
}

type RESTPost = Omit<APost, 'kids'> & { kids: number[], time: number }
type RESTComment = Omit<AComment, 'kids'> & { kids: number[], time: number }
type RESTUser = AUser;

async function commentTask(id: number, queue: PQueue, dict: Map<number, ResolvablePromise<RESTComment>>) {
  const x = await api<RESTComment>(`/v0/item/${id}`);
  dict.get(x.id)?.resolve(x);
  const kids = x.kids ?? [];
  for (const kid of kids) {
    dict.set(kid, resolvablePromise());
    queue.add(() => commentTask(kid, queue, dict));
  }
}

async function* crawlCommentTree(kids: number[], dict: Map<number, ResolvablePromise<RESTComment>>, level = 0): AsyncGenerator<AComment> {
  for (const kid of kids) {
    const item = await dict.get(kid);
    if (item) {
      const { kids, text, ...rest } = item;
      yield { 
        ...rest, 
        level, 
        quality: 'c00', // REST API doesn't support quality..
        text: text && blockquotify('<p>' + text),
        timeAgo: formatDistanceToNowStrict(item.time * 1000, { addSuffix: true }),
        kids: crawlCommentTree(kids || [], dict, level + 1),
      };
    }
  }
}

// FIXME: Match HN behavior more closely
const truncateText = (text?: string | null) => {
  if (text) {
    const words = text.split(' '); 
    const trunc = words.splice(0, 11).join(' ');
    return words.length > 11 ? trunc + ' ...' : trunc;
  }
  return '';
}

const stripHTML = (text?: string | null) => text ? text.replace(/(<([^>]+)>)/gi, "") : '';

export async function comments(id: number): Promise<APost> {
  const post: RESTPost = await api(`/v0/item/${id}`);

  if (post.type === 'comment') {
    let curr = post;
    while (curr.parent) {
      curr = await api(`/v0/item/${curr.parent}`);
    }
    post.story = curr.id
    post.storyTitle = truncateText(curr.title)
  }

  const queue = new PQueue({ concurrency: CONCURRENCY });
  const kids = post.kids ?? [];
  const dict = new Map(kids.map(id => [id, resolvablePromise<RESTComment>()]));
  for (const kid of kids) {
    queue.add(() => commentTask(kid, queue, dict));
  }
  // queue.addAll(kids.map(id => () => commentTask(id, queue, dict)));

  const text = post.text != null ? blockquotify('<p>' + post.text) : null;
  return { 
    ...post, 
    timeAgo: formatDistanceToNowStrict(post.time * 1000, { addSuffix: true }),
    title: post.title || truncateText(stripHTML(text)),
    text,
    quality: 'c00', // REST API doesn't support quality..
    url: post.text != null ? `item?id=${post.id}`: post.url,
    kids: crawlCommentTree(kids, dict),
  };
}

export async function user(id: string): Promise<AUser> {
  const { about, ...user }: RESTUser = await api(`/v0/user/${id}`);
  return {
    ...user,
    ...about ? { about: blockquotify('<p>' + about) } : {},
  };
}
