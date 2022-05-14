/**
 * An implementation of Hacker News API using the Firebase REST API.
 * 
 * The REST API has many drawbacks, the #1 of which is the amount of HTTP requests that are necessary to get
 * e.g. the comment tree.
 * 
 * Because of this, it is not suitable for Cloudflare Workers, which limits the # HTTP requests per invocation to ~50.
 * (Workers Unbound might change that, but as of this writing, it is not available to the public).
 * 
 * To make the best of this limitation, the functions below make use of Task Queues and Async Iterables to push
 * results to the client ASAP. While slower than all the alternatives, it's still cool to see in action 
 * (comments streaming in, etc...). 
 * 
 * It works best in Deno where there's no limit to the # of open HTTP connections. 
 * It also works in a Service Worker, but due to the limit of 4 (?) open connections per page, it's noticeably slower.
 */

import { Stories, StoriesParams } from './interface.ts';
import * as mkAPI from './make-api.ts';

export const API = 'https://hacker-news.firebaseio.com';

export const api = <T>(path: string): Promise<T> => {
  const url = new URL(path.endsWith('.json') ? path : `${path}.json`, API);
  return fetch(url.href).then(x => x.json());
}

export function stories(params: StoriesParams, type = Stories.TOP) {
  return mkAPI.stories(api, params, type);
}

export function comments(id: number, p?: number) {
  return mkAPI.comments(api, id, p);
}

export function user(id: string) {
  return mkAPI.user(api, id);
}

export function threads(id: string, next?: number) {
  return mkAPI.threads(api, id, next);
}