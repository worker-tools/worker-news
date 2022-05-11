import { JSONRequest, ParamsURL } from "@worker-tools/json-fetch";
import { ResolvablePromise } from "@worker-tools/resolvable-promise";
import { APost, AUser, Stories, StoriesData, StoriesParams, ThreadsData } from "./interface";
import { JSONParseNexus } from '@worker-tools/json-stream';
import { liftAsync, PromisedValuesEx } from "../../vendor/awaited-values";
import { notImplemented } from "@worker-tools/response-creators";

type MinArgs = { url: URL, handled: Promise<void>, waitUntil: (f?: any) => void };

const MIN_WAIT = 350;
const NEVER = new Promise<never>(() => {});
const timeout = (n?: number) => new Promise(r => setTimeout(r, n))

const networkFirst = (cacheKey: string) => async ({ url, handled, waitUntil }: MinArgs): Promise<Response> => {
  const forceFetch = url.searchParams.get('force') === 'fetch'
  const forceCache = url.searchParams.get('force') === 'cache'
  url.searchParams.delete('force')

  // FIXME: What a mess. But need to call waitUntil immediately, otherwise event gets garbage collected...
  const done = new ResolvablePromise<void>()
  waitUntil(done)

  try {
    const req = new JSONRequest(url);
    const race = { over: false, rejected: false }
    const useFetch = forceFetch || (navigator.onLine && !forceCache)
    const res = await Promise.race([
      useFetch 
        ? fetch(req).catch(err => (race.rejected = true, forceFetch ? Promise.reject(err) : NEVER))
        : NEVER,
      forceFetch 
        ? NEVER 
        : timeout(useFetch ? MIN_WAIT : 0)
          .then(() => !race.over ? caches.match(req) : undefined)
          // .then(res => !res && !race.over && !race.rejected && !forceCache ? NEVER : res)
    ])
    race.over = true;
    if (!res) throw Error('You are offline');

    // const data = await res.clone().json() as any;
    // res.clone().body!.pipeThrough(new JSONParseStream)

    const fromCache = res.headers.has('x-from-sw-cache');
    if (fromCache) {
      done.resolve()
    } else {
      (async () => {
        await handled
        const res_ = new Response(res.body, res);
        res_.headers.set('x-from-sw-cache', 'true')
        const cache = await caches.open(cacheKey)
        await cache.put(req, res_)
      })().finally(() => done.resolve())
    }

    // return data as T;
    return res.clone()
  } catch (err) { 
    done.resolve();
    throw err
  }
}

export async function stories(params: StoriesParams, type = Stories.TOP, args: MinArgs): Promise<StoriesData> {
  const res = await networkFirst('stories')(args);
  const jsonStream = new JSONParseNexus()
  const ret = {
    items: jsonStream.iterable('$.items.*'),
    moreLink: jsonStream.promise('$.moreLink'),
    fromCacheDate: res.headers.has('x-from-sw-cache') ? new Date(res.headers.get('date')!) : undefined
  }
  res.body!.pipeThrough(jsonStream)
  return ret;
}

async function* log(iter: any) {
  for await (const x of iter) {
    console.log(x)
    yield x;
  }
}

export async function comments(id: number, p: number | undefined, args: MinArgs): Promise<APost> {
  const res = await networkFirst('comments')(args);
  const nxs = new JSONParseNexus()
  const data: PromisedValuesEx<Partial<APost>, 'moreLink' | 'fromCacheDate' | 'kids' | 'parts'> = {
    type: nxs.promise('$.type'), // FIXME: ... deal with this madness
    title: nxs.promise('$.title'),
    score: nxs.promise('$.score'),
    by: nxs.promise('$.by'),
    descendants: nxs.promise('$.descendants'),
    storyTitle: nxs.promise('$.storyTitle'),
    text: nxs.promise('$.text'),
    quality: nxs.promise('$.quality'),
    dead: nxs.promise('$.dead'),
    id: nxs.promise('$.id'),
    url: nxs.promise('$.url'),
    time: nxs.promise('$.time'),
    parts: nxs.iterable('$.parts.*'),
    kids: nxs.iterable('$.kids.*'),
    moreLink: nxs.promise('$.moreLink').map(x => x!), // FIXME
    fromCacheDate: res.headers.has('x-from-sw-cache') ? new Date(res.headers.get('date')!) : undefined
  }
  res.body!.pipeThrough(nxs)
  const lifted = await liftAsync(data, { exclude: ['moreLink', 'fromCacheDate', 'kids', 'parts'] });
  return lifted as APost
}

export async function user(id: string, args: MinArgs): Promise<AUser> {
  return (await networkFirst('user')(args)).json();
}

export async function threads(id: string, next: number | undefined, args: MinArgs): Promise<ThreadsData> {
  return (await networkFirst('threads')(args)).json();
}
