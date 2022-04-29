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

export async function stories(params: StoriesParams, type = Stories.TOP, args: { url: URL }): Promise<StoriesData> {
  const res = await fetch(new JSONRequest(args.url));
  const data = await res.json() as any;
  return data as StoriesData;
}

export async function comments(id: number, p: number | undefined, args: { url: URL }): Promise<APost> {
  const res = await fetch(new JSONRequest(args.url)) 
  const data = await res.json() as any
  return data as APost
}

export async function user(id: string, args: { url: URL }): Promise<AUser> {
  const res = await fetch(new JSONRequest(args.url)) 
  const data = await res.json() as any
  return data;
}

export async function threads(id: string, next: number | undefined, args: { url: URL }): Promise<ThreadsData> {
  const res = await fetch(new JSONRequest(args.url)) 
  const data = await res.json() as any
  return data;
}