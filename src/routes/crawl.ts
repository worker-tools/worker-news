import { StorageArea } from '@worker-tools/kv-storage';
import { ok } from '@worker-tools/response-creators';

import { router } from "../router";
import { API, api } from './api';

const storage = new StorageArea('hn-cache');

router.get('/__crawl', async ({ event }) => {
  const ids = await api('/v0/topstories.json') as any[];
  await storage.set('/v0/topstories.json', ids);
  await Promise.all((ids.slice(0, 100) ?? []).map(crawlItem))
  await Promise.all((ids.slice(100, 200) ?? []).map(crawlItem))
  await Promise.all((ids.slice(200, 300) ?? []).map(crawlItem))
  await Promise.all((ids.slice(300, 400) ?? []).map(crawlItem))
  await Promise.all((ids.slice(400, 500) ?? []).map(crawlItem))
  // await Promise.all((ids.slice(250) ?? []).map(crawlItem))
  return ok('ok');
})

let i = 0;
async function crawlItem(id: number) {
  if (++i % 100 === 0) console.log(i, id);
  try {
    const item = await fetch(new URL(`/v0/item/${id}.json`, API).href).then(x => x.json());
    await storage.set(`/v0/item/${id}.json`, item);
    // await Promise.all((item.kids ?? []).map(crawlItem))
    for (const kid of item?.kids ?? []) {
      await crawlItem(kid);
    }
  } catch (err) {
    console.log('try later ' + id + ' ' + err.message)
  }
}

// router.get('/__crawl2', async ({ event }) => {
//   const ids = await api('/v0/topstories.json') as any[];
//   await storage.set('/v0/topstories.json', ids);

//   const g = crawlItem2(ids);
//   const queue = Array.from({ length: 100 }, () => g.next())
//     .map((p, qi) => p.then(x => [qi, x] as [number, IteratorResult<number, number>]))

//   while (1) {
//     const [qi, { done, value }] = await Promise.race(queue);
//     // if (i++ % 100 === 0) console.log(i, value);
//     console.log(value);
//     if (done) return ok('ok');
//     queue[qi] = g.next().then(x => [qi, x]);
//   }

//   throw Error();
// })

// async function* crawlItem2(ids: number[]): AsyncGenerator<number> {
//   for (const id of ids ?? []) {
//     const item = await api(`/v0/item/${id}.json`);
//     await storage.set(`/v0/item/${id}.json`, item);
//     yield id;
//     yield* crawlItem2(item.kids ?? [])
//   }
// }

// router.get('/__crawl-item', async ({ event, searchParams }) => {
//   const id = Number(searchParams.get('id'));
//   await crawlItem(id);
//   return ok('ok');
// })