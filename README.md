# Worker News

A drop in replacement for Hacker News with support for dark mode, quotes in comments, user identicons and submission favicons. 

## What's cool about this?
- Developed against a generic Worker Runtime so that it can run on Cloudflare Workers, Deno Deploy and even the browser's Service Worker.
- Can be installed + offline support --- same code that runs on the edge powers the PWA.
  - _The PWA is optional_. This app is just HTML streamed from the edge. If the PWA is installed, it is JSON streamed from the edge + HTML streamed from the Service Worker.
  - PWA requires latest browsers. FF only works when `TransformStream`s are enabled in in about:config.
- Everything is stream/async generator-based: API calls, HTML scraping, HTML responses, even JSON stringification and parsing.
  - A side effect of this approach is very low TTFB. This version feels faster than HN itself, even when it might be slower.
- Supports 3 API backends: HTML scraping from news.ycombinator.com, HTTP requests to HN API and HN API via Firebase.
  - Not everything that HN supports is supported by the HN API. The HN API is missing many properties, such as # of descendants of a comment and comment quality (used to gray out downvoted comments). The HTML scraping API doesn't have this problem, but it quickly runs into a scrape shield, especially for infrequently requested sites. Works well when running on your own machine though (scrape shield seems to be more forgiving for new IPs).
- Built using my own quasi web framework, Worker Tools, which is specifically developed to run across CF Workers, Deno and Service Workers.

## Development
You can run the worker locally either via Wrangler, Node+Miniflare or Deno CLI. 
For Node/Wrangler it's best to install dependencies via `pnpm` (lockfile checked in), but npm or yarn is probably fine too. 

Then run `npm start` and open <http://localhost:8787>.
If you have Wrangler 2.0 is installed, run `wrangler dev --local` instead.

Deno users can simply run `deno task serve` and open <http://localhost:8000>. 

