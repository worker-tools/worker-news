import { APost, AComment, Stories, StoriesParams, AUser, ThreadsData, StoriesData, Quality } from './interface.ts';
import { default as PQueue } from '@qwtel/p-queue-browser';
import { ResolvablePromise } from '@worker-tools/resolvable-promise';
import { blockquotify } from './rewrite-content.ts';
import * as domAPI from './dom-api.ts';
import { Awaitable } from "../vendor/common-types.ts";

type APIFn = <T>(path: string) => Promise<T>;

const CONCURRENCY = 32;

const PAGE = 30;

const storiesToPaths = {
  [Stories.TOP]: `/v0/topstories`,
  [Stories.NEW]: '/v0/newstories',
  [Stories.BEST]: '/v0/beststories',
  [Stories.SHOW]: '/v0/showstories',
  [Stories.SHOW_NEW]: '',
  [Stories.ASK]: '/v0/askstories',
  [Stories.JOB]: '/v0/jobstories',
  [Stories.USER]: '',
  [Stories.CLASSIC]: '',
  [Stories.FROM]: '',
  [Stories.OFFLINE]: '',
};

export function stories(api: APIFn, params: StoriesParams, type = Stories.TOP): Awaitable<StoriesData> {
  const { p } = params;
  const page = Math.max(1, p || 1);
  const href = storiesToPaths[type];
  if (href === '') return domAPI.stories(params, type)

  return {
    items: storiesGenerator(api, href, page),
    moreLink: `${type}?p=${page + 1}`
  }
}

export async function* storiesGenerator(api: APIFn, href: string, page: number) {
  const ps = (await api<number[]>(href))
    .slice(PAGE * (page - 1), PAGE * page)
    .map(id => api<RESTPost>(`/v0/item/${id}`));

  for await (const { kids, text, url, ...p } of ps) {
    yield {
      ...p,
      time: new Date(p.time * 1000),
      text: text != null ? await blockquotify(text) : null,
      url: text != null ? `item?id=${p.id}` : url,
    } as APost;
  }
}

type RESTPost = Omit<APost, 'kids'> & { kids?: number[], time: number }
type RESTComment = Omit<AComment, 'kids'> & { kids?: number[], time: number, priority: number }
type RESTUser = AUser;

async function commentTask(
  api: APIFn, 
  id: number,
  queue: PQueue, 
  results: Map<number, ResolvablePromise<RESTComment>>,
  topPriority: number, 
  topFraction = 1,
  level = 1,
) {
  const data = await api<RESTComment>(`/v0/item/${id}`);
  const kids = data.kids ?? [];
  const fraction = topFraction / kids.length;
  results.get(data.id)?.resolve({ ...data, priority: topPriority });
  for (const [i, kidId] of kids.entries()) {
    results.set(kidId, new ResolvablePromise());
    // HACK: Calculating a priority so that replies to top comments get moved to the front of the queue.
    //       Further, top relies to top relies get higher priority than then the second rely to the top reply, etc.
    //       If you're familiar with HN-style comment trees, this should make sense. Otherwise probably not.
    //       It works by partitioning the real number line and increasingly "zooming in".
    //       I have no proof that this does the correct thing (it probably doesn't), but it's close enough...
    //       Significantly speeds up loading time of "above fold" content.
    const subPriority = (kids.length - i - 1) * fraction;
    const priority = topPriority + subPriority;
    queue.add(() => commentTask(api, kidId, queue, results, priority, fraction, level + 1), { priority });
  }
}

async function* crawlCommentTree(kids: number[], dict: Map<number, ResolvablePromise<RESTComment>>, level = 0): AsyncGenerator<AComment> {
  for (const kid of kids) {
    const item = await dict.get(kid);
    if (item) {
      const { kids, text, priority, ...rest } = item;
      yield {
        ...rest,
        level,
        quality: item.deleted ? Quality.default: item.dead ? Quality.cdd : Quality.c00, // REST API doesn't support quality..
        text: text && await blockquotify('<p>' + text),
        time: new Date(item.time * 1000),
      }
      yield* crawlCommentTree(kids || [], dict, level + 1)
    }
  }
}

function unclosed<T>(iterable: AsyncIterable<T>): AsyncIterableIterator<T> {
  const iterator = iterable[Symbol.asyncIterator]();
  return { 
    next: iterator.next.bind(iterator),
    [Symbol.asyncIterator]() { return this }
  };
}

const C_PAGE = 250

class Paginator {
  #iterable;
  #total;
  #page;
  #more = new ResolvablePromise<IteratorResult<AComment>>();
  constructor(iterable: AsyncIterableIterator<AComment>, total: number, page = 1) {
    this.#iterable = iterable;
    this.#total = total;
    this.#page = page;
  }
  async *[Symbol.asyncIterator]() {
    const iterable = this.#iterable;
    const total = this.#total;
    const page = this.#page

    let n = 0;
    let comm;
    for (let p = 1; p < page; p++) {
      let i = 0;
      for await (comm of unclosed(iterable)) if (!comm.dead) {
        if (i >= C_PAGE && comm.level === 0) break;
        i++
      }
      n += i;
    }
    if (n > total) return;
    if (comm) yield comm;
    let i = 0;
    for await (const comm of unclosed(iterable)) if (!comm.dead) {
      if (i >= C_PAGE && comm.level === 0) break;
      yield comm;
      i++
    }

    for await (const comm of iterable) if (!comm.dead) {
      this.#more.resolve({ done: false, value: comm })
      break;
    }
    this.#more.resolve({ done: true, value: undefined })
  }
  get more() {
    return Promise.resolve(this.#more)
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

export async function comments(api: APIFn, id: number, p = 1): Promise<APost> {
  const post: RESTPost = await api(`/v0/item/${id}`);
  // console.log(post)

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
  const results = new Map(kids.map(id => [id, new ResolvablePromise<RESTComment>()]));
  for (const [i, kid] of kids.entries()) {
    const priority = kids.length - i;
    queue.add(() => commentTask(api, kid, queue, results, priority), { priority: kids.length - i });
  }

  const text = post.text != null ? await blockquotify('<p>' + post.text) : null;
  const commCrawler = new Paginator(crawlCommentTree(kids, results), post.descendants ?? Number.POSITIVE_INFINITY, p);

  const retPost = {
    type: post.type ?? '',
    title: post.title || truncateText(stripHTML(text)),
    parent: post.parent ?? NaN,
    story: post.story ?? NaN,
    storyTitle: post.storyTitle ?? '',
    score: post.score ?? NaN,
    by: post.by ?? '',
    descendants: post.descendants ?? NaN,
    text,
    quality: post.deleted ? Quality.default : post.dead ? Quality.cdd : Quality.c00,
    deleted: post.deleted ?? false,
    dead: post.dead ?? false,
    id: post.id ?? null,
    url: post.text != null ? `item?id=${post.id}` : post.url, // FIXME
    time: new Date(post.time * 1000) ?? null,
    parts: post.parts ?? [],
    kids: commCrawler,
    moreLink: commCrawler.more.then(({ done, value }) => done ? '' : `item?id=${post.id}&p=${p + 1}&next=${value.id}`),
  }
  return retPost
}

export async function user(api: APIFn, id: string): Promise<AUser> {
  const { about, ...user }: RESTUser = await api(`/v0/user/${id}`);
  // console.log(about, user)
  return {
    ...user,
    ...about ? { about: await blockquotify('<p>' + about) } : {},
  };
}

export function threads(api: APIFn, id: string, next?: number): Promise<ThreadsData> {
  return domAPI.threads(id, next);
}
