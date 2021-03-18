export type Quality = 'c00' | 'c5a' | 'c73' | 'c82' | 'c88' | 'c9c' | 'cae' | 'cbe' | 'cce' | 'cdd';

export interface AThing {
  type: Type,
  id: number,
  by: string,
  kids: AsyncIterable<Comment>,
}

export interface Comment extends AThing {
  type: 'comment',
  level: number,
  timeAgo: string,
  text: string,
  quality: Quality,
  parent: number,
}

export interface Poll {
  item: string | undefined,
  points: number,
}

export type Type = "job" | "story" | "comment" | "poll" | "pollopt";
export interface Post extends AThing {
  title: string,
  url: string
  domain: string | null,
  score: number | null,
  timeAgo: string | null,
  descendants: number | null,
  text: string | null
  poll?: Poll[] | null,
  more_comments_id?: string | null;
}