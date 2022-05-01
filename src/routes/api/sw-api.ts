import { JSONRequest, ParamsURL } from "@worker-tools/json-fetch";
import { ResolvablePromise } from "@worker-tools/resolvable-promise";
import { APost, AUser, Stories, StoriesData, StoriesParams, ThreadsData } from "./interface";

// DRY:!!
const x = {
  [Stories.TOP]: '/news',
  [Stories.NEW]: '/newest',
  [Stories.BEST]: '/best',
  [Stories.SHOW]: '/show',
  [Stories.SHOW_NEW]: '/shownew',
  [Stories.ASK]: '/ask',
  [Stories.JOB]: '/jobs',
  [Stories.USER]: '/submitted',
  [Stories.CLASSIC]: '/classic',
  [Stories.FROM]: '/from'
};

type MinArgs = { url: URL, handled: Promise<void>, waitUntil: (f?: any) => void };

const MIN_WAIT = 250;
const NEVER = new Promise<never>(() => {});
const timeout = (n?: number) => new Promise(r => setTimeout(r, n))

const networkFirst = (cacheKey: string) => async <T>({ url, handled, waitUntil }: MinArgs): Promise<T> => {
  const forceFetch = url.searchParams.get('force') === 'fetch'
  const forceCache = url.searchParams.get('force') === 'cache'
  url.searchParams.delete('force')

  // FIXME: What a mess. But need to call waitUntil immediately, otherwise event gets garbage collected...
  const done = new ResolvablePromise<void>()
  waitUntil(done)

  try {
    const req = new JSONRequest(url);
    const race = { over: false }
    const useFetch = forceFetch || (navigator.onLine && !forceCache)
    const res = await Promise.race([
      useFetch 
        ? fetch(req).catch(err => { forceFetch ? Promise.reject(err) : NEVER })
        : NEVER,
      forceFetch 
        ? NEVER 
        : timeout(useFetch ? MIN_WAIT : 0).then(() => !race.over ? caches.match(req) : void 0)
    ])
    race.over = true;
    if (!res) throw Error('You are offline');
    const data = await res.clone().json() as any;

    const fromCache = res.headers.has('x-from-sw-cache');
    if (fromCache) {
      data.fromCache = true;
      data.fromCacheDate = new Date(res.headers.get('date')!)
      done.resolve()
    } else {
      (async () => {
        await handled
        const cache = await caches.open(cacheKey)
        const res_ = new Response(res.body, res);
        res_.headers.set('x-from-sw-cache', 'true')
        await cache.put(req, res_)
      })().finally(() => done.resolve())
    }

    return data as T;
  } catch (err) { 
    done.resolve();
    throw err
  }
}

export async function stories(params: StoriesParams, type = Stories.TOP, args: MinArgs): Promise<StoriesData> {
  return networkFirst('stories')(args);
}

export async function comments(id: number, p: number | undefined, args: MinArgs): Promise<APost> {
  return networkFirst('comments')(args);
}

export async function user(id: string, args: MinArgs): Promise<AUser> {
  return networkFirst('user')(args);
}

export async function threads(id: string, next: number | undefined, args: MinArgs): Promise<ThreadsData> {
  return networkFirst('threads')(args);
}