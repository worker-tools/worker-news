import { basics, caching, combine, contentTypes } from "@worker-tools/middleware";
import { manifestHandler } from './manifest-handler.js';

import { router, mw } from "../router.ts";

import * as assets from './assets.ts';
import { news } from './news.ts';
import './item.ts';
import './user.ts';
import './threads.ts';
// import './login';

router.get('/yc500.gif', req => fetch('https://news.ycombinator.com/yc500.gif', req))
router.get('/yc.css', req => fetch('https://news.ycombinator.com/yc.css', req))

if (!self.SW) {
  // TODO: redirect instead?
  router.get('/newsfaq.html', req => fetch('https://news.ycombinator.com/newsfaq.html', req))
  router.get('/newsguidelines.html', req => fetch('https://news.ycombinator.com/newsguidelines.html', req))
  router.get('/showhn.html', req => fetch('https://news.ycombinator.com/showhn.html', req))
  router.get('/security.html', req => fetch('https://news.ycombinator.com/security.html', req))

  router.get('/app.webmanifest', manifestHandler)
}

router.get('/', mw, (req, x) => news(x))

router.get('*', caching({ 
  cacheControl: 'public', 
  maxAge: 60 * 60 * 24 * 30 * 12 
}), assets.handler)

export { router }