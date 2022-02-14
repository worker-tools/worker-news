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
}

export type StoriesParams = { p?: number, n?: number, next?: number, id?: string, site?: string };

export type Quality = 'c00' | 'c5a' | 'c73' | 'c82' | 'c88' | 'c9c' | 'cae' | 'cbe' | 'cce' | 'cdd';

export interface AThing {
  type: Type,
  id: number,
  by: string,
  time?: Date,
  kids?: AsyncIterable<AComment>,
  parts?: AsyncIterable<APollOpt>,
}

export interface AUser {
  about?: string,
  created?: number,
  id: string,
  karma: number,
  submitted: number[],
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
  dead?: boolean,
  deleted?: boolean,
}

export interface APollOpt extends AThing {
  type: 'pollopt',
  poll: number,
  score: number | null,
  text: string,
}

// export interface Poll {
//   item: string | undefined,
//   points: number,
// }

export type Type = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
export interface APost extends AThing {
  title: string,
  dead: boolean
  url: string
  score: number | null,
  descendants: number | null,
  text: string | null
  quality: Quality,
  // poll?: Poll[] | null,
  parent?: number,
  story?: number,
  storyTitle?: string,
  moreLink?: Promise<string>,
  /** @deprecated */ more_comments_id?: string | null;
}
