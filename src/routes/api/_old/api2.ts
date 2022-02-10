// import { StorageArea } from '@worker-tools/kv-storage';
// import { SetRequired } from 'type-fest';
// import { streamToAsyncIterable } from 'whatwg-stream-to-async-iter';

// const storage = new StorageArea('algolia-cache');

// export const API2 = 'http://hn.algolia.com';
// export const api2 = async (path: string, useCache = false): Promise<any> => {
//   // return fetch(new URL(path, API)href).then(x => x.json());
//   return (useCache && (await storage.get(path))) || (async () => {
//     const res = await fetch(new URL(path, API2).href);
//     const ret = await res.json();
//     storage.set(path, ret);
//     return ret;
//   })();
// }

// interface _Item {
//   id: number,
//   created_at: string
//   author: string,
//   title?: string,
//   url?: string | null,
//   text: string | null,
//   points: number | null,
//   parent_id: number | null,
//   children: Item[],
//   descendants?: number,
// }

// export type Item = SetRequired<_Item, 'descendants'>

// const countChildren = (i: _Item): Item => {
//   i.descendants = i.children.length + i.children.map(countChildren).reduce((a, x) => a + x.descendants, 0);
//   return i as Item;
// }

// const nInf = Number.NEGATIVE_INFINITY;
// const sortChildren = (i: _Item): _Item => {
//   i.children.reverse().forEach(sortChildren)
//   return i;
// }

// export const item = async (id: number): Promise<Item> => {
//   const it: _Item = await api2(`/api/v1/items/${id}`);
//   return countChildren(sortChildren(it));
// }