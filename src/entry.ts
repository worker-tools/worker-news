import '@worker-tools/location-polyfill';

import * as re from '@worker-tools/response-creators';
import { Method } from 'tiny-request-router'

import { router } from './router';

import './routes/index';

async function handleRequest(event: FetchEvent) {
  const { request } = event;
  const { headers } = request;
  const method = <Method>request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;

  // Browser fix
  // TODO: Reliably remove form other non-browser builds
  if (typeof ServiceWorker !== 'undefined' && url.origin !== location.origin) return fetch(request);

  const match = router.match(method, pathname);
  if (match) {
    const args = {
      method, request, url, searchParams, event, pathname, headers, 
      params: match.params,
      matches: match.matches,
    };
    try {
      return match.handler(args);
    } catch (err) {
      return re.internalServerError(err.message);
    }
  }
  return re.notFound();
}

self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});
