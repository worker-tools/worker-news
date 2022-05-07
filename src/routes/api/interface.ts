import { Awaitable } from "@worker-tools/router";
import { ForOfAwaitable } from "whatwg-stream-to-async-iter";

export enum Stories {
  TOP = 'news',
  NEW = 'newest',
  BEST = 'best',
  ASK = 'ask',
  SHOW = 'show',
  SHOW_NEW = 'shownew',
  JOB = 'jobs',
  USER = 'submitted',
  CLASSIC = 'classic',
  FROM = 'from',
  OFFLINE = 'offline',
}

export type StoriesParams = { p?: number, n?: number, next?: number, id?: string, site?: string };
export type StoriesData = { 
  items: ForOfAwaitable<APost>, 
  moreLink: Awaitable<string> 
  fromCache?: boolean,
  fromCacheDate?: Date,
}
export type ThreadsData = { 
  items: ForOfAwaitable<AComment>, 
  moreLink: Awaitable<string> 
  fromCacheDate?: Date,
}

export type Quality = 'c00' | 'c5a' | 'c73' | 'c82' | 'c88' | 'c9c' | 'cae' | 'cbe' | 'cce' | 'cdd';

export interface AThing {
  type: Type,
  id: number,
  by: string,
  time?: number | string | Date,
  kids?: ForOfAwaitable<AComment>,
  parts?: ForOfAwaitable<APollOpt>,
  dead?: boolean,
  deleted?: boolean,
}

export interface AUser {
  about?: string,
  created?: number | string | Date,
  id: string,
  karma: number,
  submitted: number[],

  // FIXME: Don't include app-level data in schema..
  fromCacheDate?: Date,
}

export interface AComment extends AThing {
  type: 'comment',
  level?: number,
  descendants?: number | null,
  text: string,
  quality: Quality,
  parent: number,
  story?: number,
  storyTitle?: string,
}

export interface APollOpt extends AThing {
  type: 'pollopt',
  poll: number,
  score: number | null,
  text: string,
}

export type Type = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
export interface APost extends AThing {
  title: string,
  dead: boolean,
  url: string
  score: number | null,
  descendants: number | null,
  text: string | null
  quality: Quality,
  parent?: number,
  story?: number,
  storyTitle?: string,
  moreLink?: Awaitable<string>,

  // FIXME: Don't include app-level data in schema..
  fromCacheDate?: Date,
}
