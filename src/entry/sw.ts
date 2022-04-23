import 'urlpattern-polyfill'
import '@worker-tools/parsed-html-rewriter/polyfill';
import '../index';

self.addEventListener('install', () => {
  (<any>self).skipWaiting();
  console.log('skipWaiting');
});

self.addEventListener('activate', (event: any) => {
  event.waitUntil((<any>self).clients.claim());
  console.log('claim');
});