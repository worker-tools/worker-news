import 'urlpattern-polyfill'
// import './streams-polyfill'
// import './html-rewriter-polyfill'

import { router } from '../routes/index';
self.addEventListener('fetch', <any>router);

self.addEventListener('install', async () => {
  console.log('install')
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
    '/news.css?v=20',
    '/s.gif',
    '/y18.png',
    '/y18.gif',
  ])
  console.log('installed')
  // TODO: debug only?
  console.log('skipWaiting');
  (<any>self).skipWaiting();
});

self.addEventListener('activate', (event: any) => {
  console.log('activated')
  // TODO: debug only?
  event.waitUntil((<any>self).clients.claim());
  console.log('claim');
});