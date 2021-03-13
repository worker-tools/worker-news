import { html, unsafeHTML, HTMLResponse } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';

import { router } from "../router";

import { page } from './components';

import './css';

const tryURL = (url?: string): URL | null => {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

const API = 'https://hacker-news.firebaseio.com';

const aThing = ({ id, type, title, time, score, url, by, descendants, index }) => {
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
          class="storylink">${title}</a><span
          class="sitebit comhead"> (<a href="from?site=${tryURL(url)?.hostname}"><span
              class="sitestr">${tryURL(url)?.hostname}</span></a>)</span></td>
    </tr>`;
}

const colSpan2 = ({ id, type, title, time, score, url, by, descendants, index }) => {
  const date = new Date(time * 1000);
  return html`
    <tr>
      <td colspan="2"></td>
      <td class="subtext">
        <span class="score" id="score_${id}">${score} points</span> by <a
          href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
            href="item?id=${id}">${formatDistanceToNowStrict(date, { addSuffix: true })}</a></span>
        <span id="unv_${id}"></span>
        | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=news" onclick="return hidestory(event, this, ${id})">hide</a> 
        | <a href="item?id=${id}">${descendants}&nbsp;comments</a></td>
    </tr>
  `;
}

const rowEl = (arg) => {
  // FIXME: support other types
  if (arg.type !== 'story') return '';
  return html`
    ${aThing(arg)}
    ${colSpan2(arg)}
    <tr class="spacer" style="height:5px"></tr>`;
}

router.get('/item', item);
router.get('/news', news);
router.get('/', news);

function item({ searchParams })  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');

  return new HTMLResponse(page({ title: 'Loading...', op: 'item' })(async () => {
    const item = await fetch(new URL(`/v0/item/${id}.json`, API).href).then(x => x.json());
    const { type, title, time, score, url, by, descendants } = item;
    const date = new Date(time * 1000);
    return html`
      <script>document.title=decodeURIComponent("${unsafeHTML(encodeURIComponent(title))}")</script>
      <tr id="pagespace" title="${title}" style="height:10px"></tr>
      <tr>
        <td>
          <table class="fatitem" border="0">
            <tbody>
              ${aThing(item)}
              <tr>
                <td colspan="2"></td>
                <td class="subtext">
                  <span class="score" id="score_${id}">${score} points</span> by <a href="user?id=${by}"
                    class="hnuser">${by}</a> <span class="age"><a href="item?id=${id}">${formatDistanceToNowStrict(date, { addSuffix: true })}</a></span>
                  <span id="unv_${id}"></span> 
                  | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D26443768">hide</a>
                  | <a href="https://hn.algolia.com/?query=Speed%20of%20Rust%20vs.%20C&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0"
                    class="hnpast">past</a> 
                  | <a href="fave?id=${id}&amp;auth=${'TODO'}">favorite</a> 
                  | <a href="item?id=${id}">${descendants}&nbsp;comments</a>
                </td>
              </tr>
              <tr style="height:10px"></tr>
              <tr>
                <td colspan="2"></td>
                <td>
                  <form method="post" action="comment"><input type="hidden" name="parent" value="${id}"><input
                      type="hidden" name="goto" value="item?id=${id}"><input type="hidden" name="hmac"
                      value="8af18e7b0722de602e6630756ea267f0f8fb60c5"><textarea name="text" rows="6"
                      cols="60" disabled></textarea>
                    <br><br><input type="submit" value="add comment" disabled>
                  </form>
                </td>
              </tr>
            </tbody>
          </table><br><br>
        </td>
      </tr>`;
  }));
}

function news({ searchParams }) {
  const p = Number(searchParams.get('p') || '1');
  if (p > Math.ceil(500 / 30)) return notFound('Not supported by Edge HN');

  return new HTMLResponse(page({ op: 'news' })(html`
    <tr id="pagespace" title="" style="height:10px"></tr>
    <tr>
      <td>
        <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
          <tbody>
            ${async () => {
              const res = await fetch(new URL('/v0/topstories.json', API).href);
              const ids = await res.json() as any[];
              return ids.slice((p - 1) * 30, p * 30).map(async (id, index) => {
                const item = await fetch(new URL(`/v0/item/${id}.json`, API).href).then(x => x.json());
                return rowEl({ 
                  ...item, 
                  index: (p - 1) * 30 + index,
                })
              }) as any; // FIXME
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

