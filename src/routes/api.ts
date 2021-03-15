import { StorageArea } from '@worker-tools/kv-storage';
import { ok } from '@worker-tools/response-creators';
import { router } from "../router";

const storage = new StorageArea('hn-cache');

export const cache = new Map<string, any>();

router.get('/__mem', async () => {
  const ids = await api('/v0/topstories.json') as any[];
  for (const id of ids) {
    await memoryItem(id);
  }
  return ok('' + cache.size);
});

let i = 0;
async function memoryItem(id: number) {
  if (++i % 100 === 0) console.log(i, id);
  try {
    const item = await api(`/v0/item/${id}.json`)
    cache.set(`/v0/item/${id}.json`, item);
    // await Promise.all((item.kids ?? []).map(crawlItem))
    for (const kid of item?.kids ?? []) {
      await memoryItem(kid);
    }
  } catch (err) {
    console.log('try later ' + id + ' ' + err.message)
  }
}

export const API = 'https://hacker-news.firebaseio.com';
export const api = async (path: string): Promise<any> => {
  // return fetch(new URL(path, API).href).then(x => x.json());
  return cache.get(path) ?? (await storage.get(path)) ?? (async () => {
    const ret = await fetch(new URL(path, API).href).then(x => x.json());
    await storage.set(path, ret);
    return ret;
  })();
}