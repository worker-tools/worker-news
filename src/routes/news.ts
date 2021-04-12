import { html, HTMLResponse } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';

import { RouteArgs, router } from "../router";
import { page } from './components';

import { stories, Post } from './api/provider'

const tryURL = (url: string): URL | null => {
  try {
    return new URL(url, self.location.origin);
  } catch {
    return null;
  }
}

const stripWWW = (url?: string) => {
  if (url?.startsWith('www')) return url.substr(4);
  else return url;
}

// export const aThing = ({ id, type, title, time, score, url, by, descendants, index }: any) => {
//   return html`
//     <tr class="athing" id="${id}">
//       <td align="right" valign="top" class="title"><span class="rank">${index != null ? `${index + 1}.` : ''}</span></td>
//       <td valign="top" class="votelinks">
//         <center><a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
//             href="vote?id=${id}&amp;how=up&amp;auth=${'TODO'}&amp;goto=news">
//             <div class="votearrow" title="upvote"></div>
//           </a></center>
//       </td>
//       <td class="title"><a href="${url}"
//           class="storylink">${title}</a><span
//           class="sitebit comhead"> (<a href="from?site=${tryURL(url)?.hostname}"><span
//               class="sitestr">${stripWWW(tryURL(url)?.hostname)}</span></a>)</span></td>
//     </tr>`;
// }

// const colSpan2 = ({ id, type, title, time, score, url, by, descendants, index }: any) => {
//   const date = new Date(time * 1000);
//   return html`
//     <tr>
//       <td colspan="2"></td>
//       <td class="subtext">
//         <span class="score" id="score_${id}">${score} points</span> by <a
//           href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
//             href="item?id=${id}">${formatDistanceToNowStrict(date, { addSuffix: true })}</a></span>
//         <span id="unv_${id}"></span>
//         | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=news" onclick="return hidestory(event, this, ${id})">hide</a> 
//         | <a href="item?id=${id}">${descendants}&nbsp;comments</a></td>
//     </tr>
//   `;
// }

// const rowEl = (arg: any) => {
//   // FIXME: support other types
//   if (arg.type !== 'story') return;
//   return html`
//     ${aThing(arg)}
//     ${colSpan2(arg)}
//     <tr class="spacer" style="height:5px"></tr>`;
// }

export const aThing = ({ id, url, title }: Post, index?: number) => {
  try {
    const uRL = tryURL(url);
    return html`
      <tr class="athing" id="${id}">
        <td align="right" valign="top" class="title"><span class="rank">${index != null ? `${index + 1}.` : ''}</span></td>
        <td valign="top" class="votelinks">
          <center><a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
              href="vote?id=${id}&amp;how=up&amp;auth=${'TODO'}&amp;goto=news">
              <div class="votearrow" title="upvote"></div>
            </a></center>
        </td>
        <td class="title"><a href="${url}"
            class="storylink">${title}</a>${uRL?.host === self.location.host ? '' : html`<span
            class="sitebit comhead"> (<a href="from?site=${uRL?.hostname}"><span
                class="sitestr">${stripWWW(uRL?.hostname)}</span></a>)</span>`}</td>
      </tr>`;
  } catch (err) {
    throw html`<tr><td>Something went wrong</td><td>${err.message}</td></tr>`
  }
}

const subtext = ({ id, timeAgo: time_ago, score, by, descendants }: Post) => {
  return html`
    <tr>
      <td colspan="2"></td>
      <td class="subtext">
        <span class="score" id="score_${id}">${score} points</span> by <a
          href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
            href="item?id=${id}">${time_ago}</a></span>
        <span id="unv_${id}"></span>
        | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=news" onclick="return hidestory(event, this, ${id})">hide</a> 
        | <a href="item?id=${id}">${descendants}&nbsp;comments</a></td>
    </tr>
  `;
}

const rowEl2 = (arg: Post, i: number) => {
  // FIXME: support other types
  if (arg.type !== 'story') return;
  return html`
    ${aThing(arg, i)}
    ${subtext(arg)}
    <tr class="spacer" style="height:5px"></tr>`;
}

export function news({ searchParams }: RouteArgs) {
  const p = Number(searchParams.get('p') || '1');
  if (p > Math.ceil(500 / 30)) return notFound('Not supported by Edge HN');

  return new HTMLResponse(page({ op: 'news' })(html`
    <tr id="pagespace" title="" style="height:10px"></tr>
    <tr>
      <td>
        <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
          <tbody>
            ${async function* () {
              let i = (p - 1) * 30;
              for await (const post of stories(p)) yield rowEl2(post, i++);
            }}
            <tr class="morespace" style="height:10px"></tr>
            <tr>
              <td colspan="2"></td>
              <td class="title"><a href="news?p=${p + 1}" class="morelink" rel="next">More</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`));
}

router.get('/news', news);
