import { APost, AComment, Stories, StoriesParams, AUser } from './interface';
import { default as PQueue } from '@qwtel/p-queue-browser';
import { resolvablePromise, ResolvablePromise } from '@worker-tools/resolvable-promise';
import { blockquotify } from './util';

type APIFn = <T>(path: string) => Promise<T>;

const CONCURRENCY = 128;

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
};

export function stories(api: APIFn, { p }: StoriesParams, type = Stories.TOP) {
  const page = p || 1;
  const href = x[type];
  if (!href) throw Error('Unsupported by HN REST API')

  return {
    items: storiesGenerator(api, href, page),
    moreLink: page !== 1 ? `${type}?p=${page}` : type,
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
type RESTComment = Omit<AComment, 'kids'> & { kids: number[], time: number }
type RESTUser = AUser;

async function commentTask(api: APIFn, id: number, queue: PQueue, dict: Map<number, ResolvablePromise<RESTComment>>) {
  const x = await api<RESTComment>(`/v0/item/${id}`);
  dict.get(x.id)?.resolve(x);
  const kids = x.kids ?? [];
  for (const kid of kids) {
    dict.set(kid, resolvablePromise());
    queue.add(() => commentTask(api, kid, queue, dict));
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
  const dict = new Map(kids.map(id => [id, resolvablePromise<RESTComment>()]));
  for (const kid of kids) {
    queue.add(() => commentTask(api, kid, queue, dict));
  }
  // queue.addAll(kids.map(id => () => commentTask(id, queue, dict)));

  const text = post.text != null ? await blockquotify('<p>' + post.text) : null;
  return {
    ...post,
    time: new Date(post.time * 1000),
    title: post.title || truncateText(stripHTML(text)),
    text,
    quality: 'c00', // REST API doesn't support quality..
    url: post.text != null ? `item?id=${post.id}` : post.url,
    kids: crawlCommentTree(kids, dict),
  };
}

export async function user(api: APIFn, id: string): Promise<AUser> {
  const { about, ...user }: RESTUser = await api(`/v0/user/${id}`);
  return {
    ...user,
    ...about ? { about: await blockquotify('<p>' + about) } : {},
  };
}

export async function* threads(api: APIFn, id: string, next?: number): AsyncGenerator<AComment> {
  throw Error('Unsupported by HN REST API')
}
