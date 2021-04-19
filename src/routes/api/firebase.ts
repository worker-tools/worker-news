import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

import { Stories } from './interface';
import * as mkAPI from './make-api';

const firebaseApp = initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com",
});
const db = getDatabase(firebaseApp)
const api = <T>(href: string) => new Promise<T>(res => onValue(ref(db, href), snap => res(snap.val())));

// FIXME: `next` pagination
export function stories({ p, next, id }: { p?: number, next?: number, id?: string }, type = Stories.TOP) {
  return mkAPI.stories(api, p, type);
}

export function comments(id: number) {
  return mkAPI.comments(api, id);
}

export function user(id: string) {
  return mkAPI.user(api, id);
}
