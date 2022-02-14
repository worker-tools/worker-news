import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

import { Stories, StoriesParams } from './interface';
import * as mkAPI from './make-api';

const firebaseApp = initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com",
});
const db = getDatabase(firebaseApp)
const api = <T>(href: string) => new Promise<T>(res => onValue(ref(db, href), snap => res(snap.val())));

// FIXME: `next` pagination
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