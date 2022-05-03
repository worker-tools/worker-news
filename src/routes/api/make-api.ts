import { APost, AComment, Stories, StoriesParams, AUser, ThreadsData, StoriesData } from './interface';
import { default as PQueue } from '@qwtel/p-queue-browser';
import { ResolvablePromise } from '@worker-tools/resolvable-promise';
import { blockquotify } from './util';

type APIFn = <T>(path: string) => Promise<T>;

const CONCURRENCY = 64;

const PAGE = 30;

const x = {
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

export function stories(api: APIFn, { p }: StoriesParams, type = Stories.TOP): StoriesData {
  const page = Math.max(1, p || 1);
  const href = x[type];
  if (!href) throw Error('Unsupported by HN REST API')

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
    yield <APost>{
      ...p,
      time: new Date(p.time * 1000),
      text: text != null ? await blockquotify(text) : null,
      url: text != null ? `item?id=${p.id}` : url,
    };
  }
}

type RESTPost = Omit<APost, 'kids'> & { kids: number[], time: number }
type RESTComment = Omit<AComment, 'kids'> & { kids: number[], time: number, priority: number }
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
      // console.log(' '.repeat(level), priority)
      yield {
        ...rest,
        level,
        quality: 'c00', // REST API doesn't support quality..
        text: text && await blockquotify('<p>' + text),
        time: new Date(item.time * 1000),
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

export async function comments(api: APIFn, id: number, p?: number): Promise<APost> {
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
  const results = new Map(kids.map(id => [id, new ResolvablePromise<RESTComment>()]));
  for (const [i, kid] of kids.entries()) {
    const priority = kids.length - i;
    queue.add(() => commentTask(api, kid, queue, results, priority), { priority: kids.length - i });
  }

  const text = post.text != null ? await blockquotify('<p>' + post.text) : null;
  return {
    ...post,
    time: new Date(post.time * 1000),
    title: post.title || truncateText(stripHTML(text)),
    text,
    quality: 'c00', // REST API doesn't support quality..
    url: post.text != null ? `item?id=${post.id}` : post.url, // FIXME
    kids: crawlCommentTree(kids, results),
  };
}

export async function user(api: APIFn, id: string): Promise<AUser> {
  const { about, ...user }: RESTUser = await api(`/v0/user/${id}`);
  return {
    ...user,
    ...about ? { about: await blockquotify('<p>' + about) } : {},
  };
}

export async function threads(api: APIFn, id: string, next?: number): Promise<ThreadsData> {
  throw Error('Unsupported by HN REST API')
}
