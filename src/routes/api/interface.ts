export enum Stories {
  TOP = 'news',
  NEW = 'newest',
  BEST = 'best',
  ASK = 'ask',
  SHOW = 'show',
  JOB = 'jobs',
}

export type Quality = 'c00' | 'c5a' | 'c73' | 'c82' | 'c88' | 'c9c' | 'cae' | 'cbe' | 'cce' | 'cdd';

export interface AThing {
  type: Type,
  id: number,
  by: string,
  kids?: AsyncIterable<AComment>,
}

export interface AUser {
  about?: string,
  created: number,
  id: string,
  karma: number,
  submitted: number[],
}

export interface AComment extends AThing {
  type: 'comment',
  level: number,
  timeAgo: string,
  text: string,
  quality: Quality,
  parent: number,
  deleted?: boolean,
}

export interface Poll {
  item: string | undefined,
  points: number,
}

export type Type = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
export interface APost extends AThing {
  title: string,
  url: string
  score: number | null,
  timeAgo: string | null,
  descendants: number | null,
  text: string | null
  quality: Quality,
  poll?: Poll[] | null,
  parent?: number,
  story?: number,
  storyTitle?: string,
  /** @deprecated */ more_comments_id?: string | null;
}
