import 'urlpattern-polyfill'
// import './html-rewriter-polyfill'

import { router } from '../routes/index';
self.addEventListener('fetch', <any>router);

self.addEventListener('install', async () => {
  (<any>self).skipWaiting();
  const cache = await caches.open('public')
  await cache.addAll([
    '/darkbluearrow.png',
    '/darkbluearrow2x.png',
    '/darky18.png',
    '/favicon.ico',
    '/grayarrow.gif',
    '/grayarrow2x.gif',
    '/hn.js',
    '/new.png',
    '/news.css?v=7',
    '/s.gif',
    '/y18.png',
    '/y18.gif',
  ])
  console.log('skipWaiting');
});

self.addEventListener('activate', (event: any) => {
  event.waitUntil((<any>self).clients.claim());
  console.log('claim');
});