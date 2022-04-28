import { html, HTMLContent, HTMLResponse, unsafeHTML } from "@worker-tools/html";
import { basics } from "@worker-tools/middleware";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';
import { fromUrl, parseDomain } from 'parse-domain';

import { router, RouteArgs } from "../router";
import { pageLayout } from './components';

import { stories, APost, Stories } from './api'

const SUB_SITES = ['medium.com', 'substack.com', 'mozilla.org', 'mit.edu', 'hardvard.edu', 'google.com', 'apple.com', 'notion.site', 'js.org']
const GIT_SITES = ['twitter.com', 'github.com', 'gitlab.com', 'vercel.app'];

// const at = <T>(xs: T[], i: number) => i >= 0 ? xs[i] : xs[xs.length + i]

const tryURL = (href: string): (URL & { sitebit?: string }) | null => {
  try { 
    const url = new URL(href, self.location.origin); 
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

// const stripWWW = (url?: URL | null) => {
//   if (!url) return '';
//   if (url.hostname.substr(0, 4) === 'www.') {
//     url.hostname = url.hostname.substr(4);
//   }
//   if (['github.com', 'gitlab.com'].includes(url.hostname)) {
//     const p = url.pathname.substr(1).replace(/\/+/g, '/').split('/');
//     return url.hostname + '/' + p[0];
//   }
//   return url.hostname;
// }

const rankEl = (index?: number) => html`
  <span class="rank">${index != null && !Number.isNaN(index) ? `${index + 1}.` : ''}</span>`;

export const favicon = (url?: { hostname?: string } | null) => {
  const img = url?.hostname && url.hostname !== self.location.hostname ? `https://icons.duckduckgo.com/ip3/${url.hostname}.ico` : `darky18.png`
  return html`<img class="favicon" src="${img}" alt="${url?.hostname ?? 'favicon'}" width="11" height="11"/>`
}

export const aThing = async ({ type, id, url: href, title, dead }: APost, index?: number, op?: Stories) => {
  try {
    const url = tryURL(href);
    const upVoted = false // session?.votes.has(id);
    return html`
      <tr class="athing" id="${id}">
        <td align="right" valign="top" class="title">${rankEl(index)}</td>
        <td valign="top" class="votelinks"><center>${dead || type === 'job'
          ? html`<img src="s.gif" height="1" width="14">`
          : upVoted 
            ? '' 
            : html`<a id="up_${id}" onclick="popitup(this,event)" href="https://news.ycombinator.com/item?id=${id}#${id}"><div class="votearrow" title="upvote"></div></a>`
        }</center></td>
        <td class="title">${dead 
          ? '[flagged]' 
          : html`<a href="${href}"
            class="titlelink">${favicon(url)} ${title}</a>${url?.host === self.location.host ? '' : url ? html`<span
            class="sitebit comhead"> (<a href="from?site=${url.sitebit}"><span
                class="sitestr">${url.sitebit}</span></a>)</span>` : ''}</td>`
        }</tr>`;
  } catch (err) {
    throw html`<tr><td>Something went wrong</td><td>${err instanceof Error ? err.message : err as string}</td></tr>`
  }
}

export const subtext = (post: APost, index?: number, op?: Stories, { showPast = false }: { showPast?: boolean } = {}) => {
  const { type, id, title, time, score, by, descendants, dead } = post;
  const timeAgo = time && formatDistanceToNowStrict(time, { addSuffix: true })
  return html`
    <tr>
      <td colspan="2"></td>
      <td class="subtext">
        ${!dead && type !== 'job' 
          ? html`<span class="score" id="score_${id}">${score} points</span> by`
          : ''}
        ${type !== 'job' 
          ? html`<a href="user?id=${by}" class="hnuser">${by}</a>` 
          : ''}
        <span class="age" title="${time?.toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
        <span id="unv_${id}"></span>
        ${showPast
          ? html`| <a href="https://hn.algolia.com/?query=${encodeURIComponent(title)}&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a>`
          : ''}
        <!-- | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D${id}">hide</a> -->
        <!-- | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=${op}" onclick="return hidestory(event, this, ${id})">hide</a>  -->
        ${!dead && type !== 'job' 
          ? html`| <a href="item?id=${id}">${descendants === 0 
            ? 'discuss' 
            : unsafeHTML(`${descendants}&nbsp;comments`)}</a></td>`
          : ''}
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
  [Stories.FROM]: 'Submissions from $site'
}

const messageEl = (message: HTMLContent, marginBottom = 12) => html`
  <tr style="height:6px"></tr>
  <tr><td colspan="2"></td><td>${message}</td></tr>
  <tr style="height:${marginBottom}px"></tr>`;

const mkStories = (type: Stories) => ({ searchParams }: RouteArgs) => {
  const p = Number(searchParams.get('p') || '1');
  if (p > Math.ceil(500 / 30)) return notFound('Not supported by Worker News');
  const next = Number(searchParams.get('next'))
  const n = Number(searchParams.get('n'))
  const id = Stories.USER ? searchParams.get('id')! : '';
  const site = Stories.FROM ? searchParams.get('site')! : '';

  const title = x[type]
    .replace('$user', searchParams.get('id')!)
    .replace('$site', searchParams.get('site')!)

  const storiesGen = stories({ p, n, next, id, site }, type);

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
            ${async function* () {
              try {
                let i = (next && n)
                  ? (n - 1) 
                  : (p - 1) * 30;
                for await (const post of storiesGen) {
                  if (typeof post !== 'string') {
                    yield rowEl(post, i++, type);
                  } else if (post) {
                    yield html`<tr class="morespace" style="height:10px"></tr>
                      <tr>
                        <td colspan="2"></td>
                        <td class="title"><a href="${post}" class="morelink" rel="next">More</a></td>
                      </tr>`;
                  }
                }
              } catch (err) {
                yield html`<tr><td colspan="2"></td><td>${err instanceof Error ? err.message : err as string}</td></tr>`;
              }
            }}
          </tbody>
        </table>
      </td>
    </tr>`));
};

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

const withBasics = basics()
router.get('/news', withBasics, (_req, ctx) => news(ctx))
router.get('/newest', withBasics, (_req, x) => newest(x));
router.get('/best', withBasics, (_req, x) => best(x));
router.get('/show', withBasics, (_req, x) => show(x))
router.get('/shownew', withBasics, (_req, x) => showNew(x))
router.get('/ask', withBasics, (_req, x) => ask(x))
router.get('/jobs', withBasics, (_req, x) => jobs(x))
router.get('/submitted', withBasics, (_req, x) => submitted(x))
router.get('/classic', withBasics, (_req, x) => classic(x))
router.get('/from', withBasics, (_req, x) => from(x))
