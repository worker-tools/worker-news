import 'urlpattern-polyfill'
import './html-rewriter-polyfill'

import { router } from '../routes/index';
self.addEventListener('fetch', <any>router);

self.addEventListener('install', () => {
  (<any>self).skipWaiting();
  console.log('skipWaiting');
});

self.addEventListener('activate', (event: any) => {
  event.waitUntil((<any>self).clients.claim());
  console.log('claim');
});