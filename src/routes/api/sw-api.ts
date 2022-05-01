import { JSONRequest, ParamsURL } from "@worker-tools/json-fetch";
import { RouteArgs } from "src/router";
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

export async function stories(params: StoriesParams, type = Stories.TOP, args: MinArgs): Promise<StoriesData> {
  const req = new JSONRequest(args.url);
  const res = await fetch(req);
  const data = await res.clone().json() as any;

  args.waitUntil((async () => {
    await args.handled
    const cache = await caches.open('stories')
    await cache.put(req, res)
  })())

  return data as StoriesData;
}

export async function comments(id: number, p: number | undefined, args: MinArgs): Promise<APost> {
  const req = new JSONRequest(args.url);
  const res = await fetch(req) 
  const data = await res.clone().json() as any

  args.waitUntil((async () => {
    await args.handled
    const cache = await caches.open('comments')
    await cache.put(req, res)
  })())

  return data as APost
}

export async function user(id: string, args: MinArgs): Promise<AUser> {
  const req = new JSONRequest(args.url);
  const res = await fetch(req) 
  const data = await res.clone().json() as any

  args.waitUntil((async () => {
    await args.handled
    const cache = await caches.open('user')
    await cache.put(req, res)
  })());

  return data;
}

export async function threads(id: string, next: number | undefined, args: MinArgs): Promise<ThreadsData> {
  const req = new JSONRequest(args.url);
  const res = await fetch(req) 
  const data = await res.clone().json() as any

  args.waitUntil((async () => {
    await args.handled;
    const cache = await caches.open('threads')
    await cache.put(req, res)
  })());

  return data;
}