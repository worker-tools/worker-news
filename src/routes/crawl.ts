import { JSONResponse } from '@worker-tools/json-fetch';
import { StorageArea } from '@worker-tools/kv-storage';
import { ok } from '@worker-tools/response-creators';
import { default as PQueue } from 'p-queue-browser';

import { router } from "../router";
import { API, api } from './api';
import { comments, stories } from './apidom';

const storage = new StorageArea('hn-cache');

router.get('/__crawl-sliced', async ({ event }) => {
  const ids = await api('/v0/topstories.json') as any[];
  await storage.set('/v0/topstories.json', ids);
  await Promise.all((ids.slice(0, 100) ?? []).map(crawlItem))
  await Promise.all((ids.slice(100, 200) ?? []).map(crawlItem))
  await Promise.all((ids.slice(200, 300) ?? []).map(crawlItem))
  await Promise.all((ids.slice(300, 400) ?? []).map(crawlItem))
  await Promise.all((ids.slice(400, 500) ?? []).map(crawlItem))
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

// router.get('/__crawl3', async ({ event }) => {
//   const ids = await api('/v0/topstories.json') as number[];
//   await storage.set('/v0/topstories.json', ids);
//   await crawlItems3(ids.slice(0, 30))
//   return ok('ok');
// })

// async function crawlItems3(ids: number[]) {
//   const qg = queue(ids);
//   // const w1 = crawlItem3Generator(qg);
//   // const w2 = crawlItem3Generator(qg);
//   // await w1.next(queue.length > 0)
//   // await w2.next(queue.length > 0)
// }

// async function* queue(tasks: any[]): AsyncGenerator<number, void, number[]> {
//   const q = [...tasks];
//   while (q.length) {
//     const next = yield q.shift();
//     q.unshift(...next);
//   }
// }

// async function* crawlItem3Generator(queue: Generator<number, void, number[]>): AsyncGenerator<void, void, boolean> {
//   let id = queue.next([]);
//   do {
//     try {
//       const item = await fetch(new URL(`/v0/item/${id}.json`, API).href).then(x => x.json()) as { kids: number[] };
//       await storage.set(`/v0/item/${id}.json`, item);
//       id = queue.next(item?.kids.reverse() ?? []);
//     } catch (err) {
//       console.log('try later ' + id + ' ' + err.message)
//     }
//   } while (id != null)
// }

router.get('/__crawl-pqueue', async ({ event, searchParams }) => {
  try {
    if (DEBUG) i = 0;
    const concurrency = Number(searchParams.get('concurrency') || 100);
    console.log(concurrency);
    const queue = new PQueue({ concurrency });
    const ids = await api('/v0/topstories.json', false) as number[];
    await storage.set('/v0/topstories.json', ids);
    // ids.forEach(id => queue.add(() => crawlItem4(queue, id), { priority: 1 }))
    queue.addAll(ids.map(id => crawlItem4(queue, id)))
    await queue.onIdle();
    console.log('y done?')
    return ok('done');
  } catch (e) { console.error(e.message); throw e }
})

function crawlItem4(queue: PQueue, id: number) {
  return async () => {
    const key = `/v0/item/${id}.json`;
    const item = await api(key, false) as { kids?: number[] } | undefined;
    if (DEBUG && ++i % 9 === 0) console.log(i, key);
    // item?.kids?.forEach(id => queue.add(() => crawlItem4(queue, id), { priority: 1 }))
    queue.addAll(item?.kids?.map(id => crawlItem4(queue, id)) ?? [])
    await storage.set(key, item);
  };
}

router.get('/__foobar', async ({ event, searchParams }) => {
  try {
    return new JSONResponse(comments(await fetch('https://news.ycombinator.com/item?id=26474331').then(x => x.text())))
  } catch (err) {
    console.error(err);
    throw err;
  }
})
