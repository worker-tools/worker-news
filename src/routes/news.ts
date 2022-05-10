import { html, HTMLContent, HTMLResponse, unsafeHTML } from "@worker-tools/html";
import { basics, combine, contentTypes } from "@worker-tools/middleware";
import { notFound, ok } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';
import { fromUrl, parseDomain } from 'parse-domain';
import { JSONStreamResponse, jsonStringifyGenerator } from '@worker-tools/json-stream'
import { JSONRequest } from "@worker-tools/json-fetch";
import { location } from '../location';

import { router, RouteArgs, mw } from "../router";
import { cachedWarning, del, favicon, identicon, pageLayout } from './components';

import { stories, APost, Stories, StoriesParams, StoriesData } from './api'
import { StreamResponse } from "@worker-tools/stream-response";

const SUB_SITES = ['medium.com', 'substack.com', 'mozilla.org', 'mit.edu', 'hardvard.edu', 'google.com', 'apple.com', 'notion.site', 'js.org']
const GIT_SITES = ['twitter.com', 'github.com', 'gitlab.com', 'vercel.app'];

// const at = <T>(xs: T[], i: number) => i >= 0 ? xs[i] : xs[xs.length + i]

export async function* fastTTFB(iter: AsyncIterable<string>) {
  yield ' '
  yield* iter;
}

const tryURL = (href: string): (URL & { sitebit?: string }) | null => {
  try { 
    const url = new URL(href, location.origin); 
    const res = parseDomain(url.hostname)!
    if (res.type === 'LISTED') {
      const { domain, topLevelDomains: tld, subDomains } = res;
      const allowedSubDomains = SUB_SITES.some(_ => url.hostname.endsWith(_)) && subDomains.length
        ? subDomains.slice(subDomains.length - 1).concat('').join('.')
        : ''

      const allowedPathname = GIT_SITES.includes(url.hostname)
        ? url.pathname.split(/\/+/).slice(0, 2).join('/').toLowerCase()
        : '';

      const sitebit = `${allowedSubDomains}${domain}.${tld.join('.')}${allowedPathname}`;
      return Object.assign(url, { sitebit });
    }
    return null
  } catch { return null }
}

const rankEl = (index?: number) => html`
  <span class="rank">${index != null && !Number.isNaN(index) ? `${index + 1}.` : ''}</span>`;

export const aThing = async ({ type, id, url: href, title, dead, deleted }: APost, index?: number, op?: Stories) => {
  try {
    const url = tryURL(href);
    const upVoted = false // session?.votes.has(id);
    return html`
      <tr class="athing" id="${id}">
        <td align="right" valign="top" class="title">${rankEl(index)}</td>
        <td valign="top" class="votelinks"><center>${type === 'job'
          ? html`<img src="s.gif" height="1" width="14">`
          : upVoted 
            ? '' 
            : html`<a id="up_${id}" onclick="popitup(this,event)" href="https://news.ycombinator.com/item?id=${id}#${id}"><div class="votearrow" title="upvote"></div></a>`
        }</center></td>
        <td class="title">${deleted 
          ? '[flagged]' 
          : html`<a href="${href}" class="titlelink">${favicon(url)} ${title}</a>${url?.host === location.host 
              ? '' 
              : url 
                ? html`<span class="sitebit comhead"> (<a href="from?site=${url.sitebit}"><span class="sitestr">${url.sitebit}</span></a>)</span>` 
                : ''}</td>`
        }</tr>`;
  } catch (err) {
    throw html`<tr><td>Something went wrong</td><td>${err instanceof Error ? err.message : err as string}</td></tr>`
  }
}

export const subtext = async (post: APost, index?: number, op?: Stories, { showPast = false }: { showPast?: boolean } = {}) => {
  const { type, id, title, time, score, by, descendants, dead } = post;
  const timeAgo = time && formatDistanceToNowStrict(new Date(time), { addSuffix: true })
  return html`
    <tr>
      <td colspan="2"></td>
      <td class="subtext">
        ${!dead && type !== 'job' 
          ? html`<span class="score" id="score_${id}">${score} points</span> by`
          : ''}
        ${type !== 'job'
          ? html`<a href="user?id=${by}" class="hnuser">${showPast ? identicon(by, 9): ''} ${by}</a>` 
          : ''}
        <span class="age" title="${time && new Date(time).toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
        <span id="unv_${id}"></span>
        ${showPast
          ? html`| <a href="https://hn.algolia.com/?query=${encodeURIComponent(title)}&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a>`
          : ''}
        <!-- | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D${id}">hide</a> -->
        <!-- | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=${op}" onclick="return hidestory(event, this, ${id})">hide</a>  -->
        ${!dead && type !== 'job' 
          ? html`| <a href="item?id=${id}">${descendants === 0 
            ? 'discuss' 
            : unsafeHTML(`${descendants}&nbsp;comments`)}</a>`
          : ''}
        ${SW && caches?.open('comments').then(cache => cache.match(new JSONRequest(`item?id=${id}`)))
          .then(x => x && html`| <a href="item?id=${id}&force=cache">Offline&nbsp;✓</a>`)}
      </td>
    </tr>
  `;
}

const rowEl = (post: APost, i: number, type: Stories) => {
  const index = [Stories.JOB, Stories.FROM].includes(type) ? NaN : i;
  return html`
    ${aThing(post, index, type)}
    ${subtext(post, index, type)}
    <tr class="spacer" style="height:5px"></tr>`;
}

const x = {
  [Stories.TOP]: '',
  [Stories.JOB]: 'jobs', // sic!
  [Stories.ASK]: 'Ask',
  [Stories.BEST]: 'Top Links',
  [Stories.NEW]: 'New Links',
  [Stories.SHOW]: 'Show',
  [Stories.SHOW_NEW]: 'New Show',
  [Stories.USER]: `$user's submissions`,
  [Stories.CLASSIC]: '',
  [Stories.FROM]: 'Submissions from $site',
  [Stories.OFFLINE]: ''
}

const messageEl = (message: HTMLContent, marginBottom = 12) => html`
  <tr style="height:6px"></tr>
  <tr><td colspan="2"></td><td>${message}</td></tr>
  <tr style="height:${marginBottom}px"></tr>`;

const toTime = (r: Response) => new Date(r.headers.get('date')!).getTime()

async function offlineStories({ p }: { p: number }): Promise<StoriesData> {
  const cache = await caches.open('comments')
  const keys = await cache.keys()
  // FIXME: should probably manage an index in indexeddb
  const responses = await Promise.all(keys.map(async key => (await cache.match(key))!))
  const items = await Promise.all(responses
    .sort((a, b) => toTime(b) - toTime(a))
    .slice(PAGE * (p - 1), PAGE * p)
    .map(res => res.json() as Promise<APost>)
  );
  const moreLink = PAGE * p < responses.length ? `offline?p=${p + 1}` : ''
  return { items, moreLink }
}

const PAGE = 30
const mkStories = (type: Stories) => async ({ request, searchParams, type: contentType, url, handled, waitUntil }: RouteArgs) => {
  const p = Math.max(1, Number(searchParams.get('p') || '1'));
  if (p > Math.ceil(500 / 30)) return notFound('Not supported by Worker News');
  const next = Number(searchParams.get('next'))
  const n = Number(searchParams.get('n'))
  const id = Stories.USER ? searchParams.get('id')! : '';
  const site = Stories.FROM ? searchParams.get('site')! : '';

  const title = x[type]
    .replace('$user', searchParams.get('id')!)
    .replace('$site', searchParams.get('site')!)

  const storiesPage = type === Stories.OFFLINE
    ? offlineStories({ p })
    : stories({ p, n, next, id, site }, type, { url, handled, waitUntil });

  if (contentType === 'application/json') {
    return new StreamResponse(fastTTFB(jsonStringifyGenerator(storiesPage)), { 
      headers: [['content-type', JSONStreamResponse.contentType]] 
    })
  }

  return new HTMLResponse(pageLayout({ op: type, title, id: searchParams.get('id')! })(html`
    <tr id="pagespace" title="${title}" style="height:10px"></tr>
    <tr>
      <td>
        <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
          <tbody>
            ${type === Stories.SHOW ? messageEl(html`
              Please read the <a href="showhn.html"><u>rules</u></a>. You can also
              browse the <a href="shownew"><u>newest</u></a> Show HNs.`) : ''}
            ${type === Stories.JOB ? messageEl(html`
              These are jobs at YC startups. See more at
              <a href="https://www.ycombinator.com/jobs"><u>ycombinator.com/jobs</u></a>.`, 14) : ''}
            ${type === Stories.OFFLINE ? messageEl(html`
              These are stories cached for offline reading.`) : ''}
            ${async function* () {
              try {
                let i = (next && n)
                  ? (n - 1) 
                  : (p - 1) * 30;
                const { items, moreLink } = await storiesPage;
                yield cachedWarning(await storiesPage, request)
                for await (const post of items) {
                  yield rowEl(post, i++, type);
                }
                if (await moreLink) {
                  yield html`<tr class="morespace" style="height:10px"></tr>
                    <tr>
                      <td colspan="2"></td>
                      <td class="title"><a href="${moreLink}" class="morelink" rel="next">More</a></td>
                    </tr>`;
                }
              } catch (err) {
                yield html`<tr><td colspan="2"></td><td>${err instanceof Error ? err.message : err as string}</td></tr>`;
              } finally {
              }
            }}
          </tbody>
        </table>
      </td>
    </tr>`));
};

router.get('/favicon/:hostname.ico', basics(), async (req, { params, waitUntil, handled }) => {
  const cache = await self.caches?.open('favicon')
  const res = await cache?.match(req)
  if (!res) {
    let res2 = await fetch(SW ? req.url : `https://icons.duckduckgo.com/ip3/${params.hostname}.ico`, req)
    if (res2.status === 404) {
      res2 = new Response(res2.body, { ...res2, status: 200 })
    }
    waitUntil((async () => {
      await handled;
      if (res2.ok) await cache?.put(req, res2)
    })());

    return res2.clone();
  }
  return res;
})

export const news = mkStories(Stories.TOP)
export const newest = mkStories(Stories.NEW)
export const best = mkStories(Stories.BEST)
export const show = mkStories(Stories.SHOW)
export const showNew = mkStories(Stories.SHOW_NEW)
export const ask = mkStories(Stories.ASK)
export const jobs = mkStories(Stories.JOB)
export const submitted = mkStories(Stories.USER)
export const classic = mkStories(Stories.CLASSIC)
export const from = mkStories(Stories.FROM)
export const offline = mkStories(Stories.OFFLINE)

router.get('/news', mw, (_req, ctx) => news(ctx))
router.get('/newest', mw, (_req, x) => newest(x));
router.get('/best', mw, (_req, x) => best(x));
router.get('/show', mw, (_req, x) => show(x))
router.get('/shownew', mw, (_req, x) => showNew(x))
router.get('/ask', mw, (_req, x) => ask(x))
router.get('/jobs', mw, (_req, x) => jobs(x))
router.get('/submitted', mw, (_req, x) => submitted(x))
router.get('/classic', mw, (_req, x) => classic(x))
router.get('/from', mw, (_req, x) => from(x))

if (SW) {
  router.get('/offline', mw, (_req, x) => offline(x))
}
