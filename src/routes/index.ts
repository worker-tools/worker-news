// import { Temporal } from '@js-temporal/polyfill';
import { basics, caching } from "@worker-tools/middleware";

import { router } from "../router";

import * as assets from './assets';

import { news } from './news';
import './item';
import './user';
import './threads';
// import './login';

router.get('/yc500.gif', () => fetch('https://news.ycombinator.com/yc500.gif'))
router.get('/newsfaq.html', () => fetch('https://news.ycombinator.com/newsfaq.html'))
router.get('/newsguidelines.html', () => fetch('https://news.ycombinator.com/newsguidelines.html'))
router.get('/showhn.html', () => fetch('https://news.ycombinator.com/showhn.html'))
router.get('/security.html', () => fetch('https://news.ycombinator.com/security.html'))
router.get('/yc.css', () => fetch('https://news.ycombinator.com/yc.css'))

router.get('/', basics(), (req, x) => news(x))

router.get('*', caching({ 
  cacheControl: 'public', 
  maxAge: 60 * 60 * 24 * 30 * 12 
}), assets.handler)

router.external('https://icons.duckduckgo.com/*', req => fetch(req))

export { router }