import { html, HTMLContent, HTMLResponse, unsafeHTML } from "@worker-tools/html";
import { StorageArea } from "@worker-tools/kv-storage";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';

import { RouteArgs, router } from "../router";
import { pageLayout } from './components';

import { stories, APost, Stories } from './api'
import { cookies, session, LoginArgs, SessionType } from "./login";

const tryURL = (url: string): URL | null => {
  try { return new URL(url, self.location.origin); } catch { return null }
}

const stripWWW = (url?: URL | null) => {
  if (!url) return '';
  if (url.hostname.substr(0, 4) === 'www.') {
    url.hostname = url.hostname.substr(4);
  }
  if (['github.com', 'gitlab.com'].includes(url.hostname)) {
    const p = url.pathname.substr(1).replace(/\/+/g, '/').split('/');
    return url.hostname + '/' + p[0];
  }
  return url.hostname;
}

const rankEl = (index?: number) => html`
  <span class="rank">${index != null && !Number.isNaN(index) ? `${index + 1}.` : ''}</span>`;

export const aThing = async ({ type, id, url, title, dead }: APost, index?: number, op?: Stories, session?: SessionType) => {
  try {
    const uRL = tryURL(url);
    const upVoted = session?.votes.has(id);
    return html`
      <tr class="athing" id="${id}">
        <td align="right" valign="top" class="title">${rankEl(index)}</td>
        <td valign="top" class="votelinks"><center>${dead || type === 'job'
          ? html`<img src="s.gif" height="1" width="14">`
          : upVoted ? '' : html`<a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
                href="vote?id=${id}&amp;how=up&amp;goto=${op}">
                <div class="votearrow" title="upvote"></div>
              </a>`}</center></td>
        <td class="title">${dead 
          ? '[flagged]' 
          : html`<a href="${url}"
            class="storylink">${title}</a>${uRL?.host === self.location.host ? '' : html`<span
            class="sitebit comhead"> (<a href="from?site=${uRL?.hostname}"><span
                class="sitestr">${stripWWW(uRL)}</span></a>)</span>`}</td>`}
      </tr>`;
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

const rowEl = (arg: APost, i: number, type: Stories, session?: SessionType) => {
  return html`
    ${aThing(arg, i, type, session)}
    ${subtext(arg, i, type)}
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
}

const messageEl = (message: HTMLContent, marginBottom = 12) => html`
  <tr style="height:6px"></tr>
  <tr><td colspan="2"></td><td>${message}</td></tr>
  <tr style="height:${marginBottom}px"></tr>`;

const mkStories = (type: Stories) => ({ searchParams, session }: LoginArgs) => {
  const p = Number(searchParams.get('p') || '1');
  if (p > Math.ceil(500 / 30)) return notFound('Not supported by Worker News');
  const next = Number(searchParams.get('next'))
  const n = Number(searchParams.get('n'))
  const id = Stories.USER ? searchParams.get('id')! : '';

  const title = x[type].replace('$user', searchParams.get('id')!)
  const storiesGen = stories({ p, n, next, id }, type);

  return new HTMLResponse(pageLayout({ op: type, title, id: searchParams.get('id')!, session })(html`
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
                    yield rowEl(post, type !== Stories.JOB ? i++ : NaN, type, session);
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

export const news = cookies(session(mkStories(Stories.TOP)))
export const newest = cookies(session(mkStories(Stories.NEW)))
export const best = cookies(session(mkStories(Stories.BEST)))
export const show = cookies(session(mkStories(Stories.SHOW)))
export const showNew = cookies(session(mkStories(Stories.SHOW_NEW)))
export const ask = cookies(session(mkStories(Stories.ASK)))
export const jobs = cookies(session(mkStories(Stories.JOB)))
export const submitted = cookies(session(mkStories(Stories.USER)))
export const classic = cookies(session(mkStories(Stories.CLASSIC)))

router.get('/news', news);
router.get('/newest', newest);
router.get('/best', best);
router.get('/show', show);
router.get('/shownew', showNew);
router.get('/ask', ask);
router.get('/jobs', jobs);
router.get('/submitted', submitted)
router.get('/classic', classic)
