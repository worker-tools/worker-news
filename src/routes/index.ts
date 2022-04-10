import { Temporal } from '@js-temporal/polyfill';
import { router } from "../router";

import * as assets from './assets';

import { news } from './news';
import './item';
import './user';
import './threads';
import { basics, caching } from "@worker-tools/middleware";
// import './login';

const staticCache = caching({ 
  cacheControl: 'public', 
  maxAge: Temporal.Duration.from({ years: 1 }) 
})

router.get('/yc.css', staticCache, () => fetch('https://news.ycombinator.com/yc.css'))
router.get('/yc500.gif', staticCache, () => fetch('https://news.ycombinator.com/yc500.gif'))
router.get('/newsfaq.html', staticCache, () => fetch('https://news.ycombinator.com/newsfaq.html'))
router.get('/newsguidelines.html', staticCache, () => fetch('https://news.ycombinator.com/newsguidelines.html'))
router.get('/showhn.html', staticCache, () => fetch('https://news.ycombinator.com/showhn.html'))
router.get('/security.html', staticCache, () => fetch('https://news.ycombinator.com/security.html'))

router.get('/', basics(), (_req, x) => news(x))

router.get('*', staticCache, assets.handler)

export { router }