
export const API = 'https://hacker-news.firebaseio.com';
export const api = (path: string) => fetch(new URL(path, API).href).then(x => x.json());