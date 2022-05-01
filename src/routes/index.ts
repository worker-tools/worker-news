// import { Temporal } from '@js-temporal/polyfill';
import { basics, caching, combine, contentTypes } from "@worker-tools/middleware";
import { ok } from "@worker-tools/response-creators";

import { router, mw } from "../router";

import * as assets from './assets';
import { news } from './news';
import './item';
import './user';
import './threads';
// import './login';

router.get('/yc500.gif', req => fetch('https://news.ycombinator.com/yc500.gif', req))
router.get('/newsfaq.html', req => fetch('https://news.ycombinator.com/newsfaq.html', req))
router.get('/newsguidelines.html', req => fetch('https://news.ycombinator.com/newsguidelines.html', req))
router.get('/showhn.html', req => fetch('https://news.ycombinator.com/showhn.html', req))
router.get('/security.html', req => fetch('https://news.ycombinator.com/security.html', req))
router.get('/yc.css', req => fetch('https://news.ycombinator.com/yc.css', req))

router.get('/', mw, (req, x) => news(x))

router.get('*', caching({ 
  cacheControl: 'public', 
  maxAge: 60 * 60 * 24 * 30 * 12 
}), assets.handler)

router.external('https://icons.duckduckgo.com/*', async (req, { waitUntil, handled }) => {
  const cache = await caches.open('favicon')
  const res = await caches.match(req)
  if (!res) {
    const res2 = await fetch(req)
    waitUntil(cache.put(req, res2.clone()))
    return res2;
  }
  return res;
})

export { router }