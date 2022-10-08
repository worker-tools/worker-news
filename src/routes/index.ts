import { basics, caching, combine, contentTypes } from "@worker-tools/middleware";
import { permanentRedirect, seeOther } from '@worker-tools/response-creators'
import { manifestHandler } from './manifest-handler.js';

import { router, mw } from "../router.ts";

import * as assets from './assets.ts';
import { news } from './news.ts';
import './item.ts';
import './user.ts';
import './threads.ts';
// import './login';

router.get('/', mw, (req, x) => news(x))

if (!SW) router.get('/app.webmanifest', manifestHandler)

router.get('/paste', mw, (req, x) => {
  const u = new URL(x.searchParams.get('q') || "", location.origin);
  return seeOther(u.pathname + u.search);
});

router.get('*', caching({ 
  public: true,
  maxAge: 60 * 60 * 24 * 30 * 12 
}), assets.handler)

export { router }