import './globals.ts'
import 'urlpattern-polyfill'

// import './streams-polyfill'
// import './html-rewriter-polyfill'

import './sw-def.ts'

import { router } from '../routes/index.ts';

self.addEventListener('fetch', router);

self.addEventListener('install', async (event: any) => {
  console.log('install')
  const cache = await (<any>self).caches.open('public')
  await cache.addAll([
    '/darkbluearrow.png',
    '/darkbluearrow2x.png',
    '/darky18.png',
    '/favicon.ico',
    '/grayarrow.gif',
    '/grayarrow2x.gif',
    '/hn.js',
    '/new.png',
    '/news.css?v=22',
    '/s.gif',
    '/y18.png',
    '/y18.gif',
    '/app.webmanifest',
    ...await fetch('/app.webmanifest').then(x => x.json()).then((m: any) => m.icons.map((i: any) => i.src))
  ])
  console.log('installed')
  // TODO: debug only?
  // console.log('skipWaiting');
  // (<any>self).skipWaiting();
});

self.addEventListener('activate', (event: any) => {
  console.log('activated')
  // TODO: debug only?
  // event.waitUntil((<any>self).clients.claim());
  // console.log('claim');
});