import { html, unsafeHTML, HTMLResponse, HTMLContent, BufferedHTMLResponse } from "@worker-tools/html";
import { basics, caching, combine, contentTypes } from "@worker-tools/middleware";
import { notFound, ok } from "@worker-tools/response-creators";
import { StreamResponse } from '@worker-tools/stream-response';
import { JSONResponse } from '@worker-tools/json-fetch';
import { renderIconSVG } from '@download/blockies';
import { formatDistanceToNowStrict } from 'date-fns';

import { mw, RouteArgs, router } from "../router";

import { comments as apiComments, AComment, APost, Stories, APollOpt } from "./api";

import { pageLayout, identicon, cachedWarning } from './components';
import { aThing, subtext } from './news';
import { moreLinkEl } from "./threads";
import { Awaitable } from "src/vendor/common-types";
import { promiseToAsyncIterable } from "./api/iter";

export interface CommOpts {
  showToggle?: boolean,
  showReply?: boolean,
  showParent?: boolean,
}

export const commentTr = (comm: AComment, { showToggle = true, showReply = true, showParent = false }: CommOpts = {}) => {
  const { id, level, by, text, time, quality, deleted, parent, story, storyTitle } = comm;
  const timeAgo = time && formatDistanceToNowStrict(new Date(time), { addSuffix: true })
  return html`<tr>
    <td class="ind" indent="${level ?? 0}"><img src="s.gif" height="1" width="${(level ?? 0) * 40}"></td>
    <td valign="top" class="votelinks">
      <center>${deleted 
        ? html`<img src="s.gif" height="1" width="14">`
        : html`<a id="up_${id}" onclick="popitup(this,event)" href="https://news.ycombinator.com/item?id=${id}#${id}"><div class="votearrow" title="upvote"></div></a>`
      }</center>
    </td>
    <td class="default">
      <div style="margin-top:2px; margin-bottom:-10px;">
        <span class="comhead">
          <a href="user?id=${by}" class="hnuser">${identicon(by)} ${by}</a> 
          <span class="age" title="${time && new Date(time).toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
          <span id="unv_${id}"></span>
          <span class="navs">
            <span class="par">${showParent ? html` | <a href="item?id=${parent}">parent</a>` : ''}</span> 
          </span>
          ${showToggle 
            ? html`<a class="togg clicky" id="${id}" n="${(comm.descendants ?? 0) + 1}" href="javascript:void(0)">[–]</a>` 
            : ''}
          <span class="onstory">${showParent && story && storyTitle ? html` | on: <a href="item?id=${story}">${storyTitle}</a>`: ''}</span>
        </span>
      </div><br/>
      <div class="comment">
        <span class="commtext ${quality}">
          ${deleted ? '[flagged]' : text ? unsafeHTML(text) : ' '}
          <div class="reply">
            <p>
              ${showReply && !deleted ? html`<font size="1">
                ${/*<u><a href="reply?id=${id}&amp;goto=item%3Fid%3D${comm.story}%23${id}">reply</a></u>*/''}
                ${/*<span style="cursor:default;opacity:0.33" title="Not implemented">reply</span>*/''}
                <u><a onclick="popitup(this,event,850,300)" href="https://news.ycombinator.com/item?id=${id}#${id}">reply</a></u>
              </font>` : ''}
            </p>
          </div>
        </span>
      </div>
    </td>
  </tr>`;
}

export const commentEl = (comment: AComment, commOpts: CommOpts = {}) => {
  // if (comment.dead) return '';
  return html`<tr class="athing comtr" id="${comment.id}">
    <td>
      <table border="0">
        <tbody>
          ${commentTr(comment, commOpts)}
        </tbody>
      </table>
    </td>
  </tr>`;
}

const timeout = (n?: number) => new Promise(res => setTimeout(res, n))

export async function* commentTree(kids: AsyncIterable<AComment>, parent: { dead: boolean }): AsyncGenerator<HTMLContent> {
  let i = 0;
  for await (const item of kids) {
    yield commentEl(item, { showReply: !parent.dead });
    if (i++ % 10 === 0) await timeout()
    if (item.kids) yield* commentTree(item.kids, parent);
  }
}

export const pollOptEl = (opt: APollOpt) => {
  return html`<tr class="athing" id="${opt.id}"><td></td>
    <td valign="top" class="votelinks"><center><a id="up_${opt.id}" href="https://news.ycombinator.com/item?id=${opt.id}#${opt.id}" onclick="popitup(this,event)">
      <div class="votearrow" title="upvote"></div></a></center></td><td class="comment"><div style="margin-top:1px;margin-bottom:0px">
    <font style="color:var(--text-strong)">${opt.text}</font>
    </div></td></tr><tr><td colspan="2"></td><td class="default"><span class="comhead">
    <span class="score" id="score_${opt.id}">${opt.score} points</span><span id="unv_${opt.id}"></span></span></td></tr>
    <tr style="height:7px"></tr>`;
}

async function* pollOptList(parts: AsyncIterable<APollOpt>): AsyncIterable<HTMLContent> {
  yield html`<tr style="height:10px"></tr>
    <tr>
      <td colspan="2"></td>
      <td><table border="0">${(async function*() {
        for await (const item of parts) {
          yield pollOptEl(item);
        }
      })()}</table></td>
    </tr>`;
}

// const itemSubtext = ({ id, title, score, by, timeAgo, descendants, dead }: APost) => html`<tr>
//   <td colspan="2"></td>
//   <td class="subtext">
//     <span class="score" id="score_${id}">${score} points</span> by <a href="user?id=${by}"
//       class="hnuser">${by}</a> <span class="age"><a href="item?id=${id}">${timeAgo}</a></span>
//     <span id="unv_${id}"></span> 
//     <!-- | <a href="hide?id=${id}&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D${id}">hide</a> -->
//     | <a href="https://hn.algolia.com/?query=${encodeURIComponent(title)}&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a> 
//     <!-- | <a href="fave?id=${id}&amp;auth=${'TODO'}">favorite</a>  -->
//     | <a href="item?id=${id}">${descendants}&nbsp;comments</a>
//   </td>
// </tr>`;

const PLACEHOLDER = 'Worker News';

const replyTr = ({ id, type }: APost) => {
  return html`<tr style="height:10px"></tr>
    <tr>
      <td colspan="2"></td>
      <td>
        <form method="post" action="comment"><input type="hidden" name="parent" value="${id}"><input
            type="hidden" name="goto" value="item?id=${id}"><input type="hidden" name="hmac"
            value="${'TODO'}"><textarea name="text" rows="8"
            cols="80" disabled placeholder="Not implemented"></textarea>
          <br/><br/><input type="submit" value="${type === 'comment' ? 'reply' : 'add comment'}" disabled>
          <font size="1"><u>
            <a onclick="popitup(this,event,850,275)" href="https://news.ycombinator.com/item?id=${id}#${id}">${type === 'comment' ? 'reply' : 'add comment'} on HN</a>
          </u></font>
        </form>
      </td>
    </tr>`;
}

// FIXME
async function buffer<T>(iter: AsyncIterable<T>): Promise<T[]> {
  const chunks: T[] = []
  for await (const x of iter) chunks.push(x)
  return chunks;
}

// FIXME
export async function jsonStringifyStream(_obj: Awaitable<Record<PropertyKey, any>>) {
  const obj = await _obj
  for (const [key, value] of Object.entries(obj)) {
    if (value != null && typeof value === 'object' && Symbol.asyncIterator in value) {
      obj[key] = await buffer(value)
    } else {
      obj[key] = await value
    }
  }
  return JSON.stringify(obj, null, DEBUG ? 2 : 0);
}

// Dead items: 26841031
async function getItem({ searchParams, type: contentType, url, handled, waitUntil }: RouteArgs)  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');
  const p = Number(searchParams.get('p'));

  const postResponse = apiComments(id, p, { url, handled, waitUntil });
  const pageRenderer = pageLayout({ title: PLACEHOLDER, op: 'item' })

  if (contentType === 'application/json') {
    // FIXME: ...
    return new StreamResponse(promiseToAsyncIterable(jsonStringifyStream(postResponse)), new JSONResponse(null))
  }

  return new HTMLResponse(pageRenderer(async () => {
    try {
      const post = await postResponse;
      const { title, text, kids, parts, fromCacheDate } = post;
      return html`
        ${title 
          ? html`<script>document.title = document.title.replace('${PLACEHOLDER}', decodeURIComponent(document.getElementById('pagespace').title))</script>` 
          : ''}
        <tr>
          <td>
            <table class="fatitem" border="0">
              <tbody>
                ${cachedWarning(fromCacheDate)}
                ${post.type === 'comment' 
                  ? [commentTr(post as AComment, { showParent: true, showToggle: false })]
                  : [
                      aThing(post), 
                      subtext(post, undefined, undefined, { showPast: true }), 
                      text 
                        ? html`<tr style="height:2px"></tr><tr><td colspan="2"></td><td>${unsafeHTML(text)}</td></tr>`
                        : '',
                      parts
                        ? pollOptList(parts)
                        : '',
                    ]
                }${!post.dead ? replyTr(post) : ''}
              </tbody>
            </table>
            <br/>
            <br/>
            <table border="0" class="comment-tree">
              <tbody>
                ${kids && commentTree(kids, post)}
                ${Promise.resolve(post.moreLink).then(ml => ml ? moreLinkEl(ml) : '')}
              </tbody>
            </table>
          </td>
        </tr>`;
    } catch (err) {
      return html`<tr id="pagespace" title="Error" style="height:10px"></tr>
        <tr><td>${err instanceof Error ? err.message : err as string}</td></tr>`
    } finally {
    }
  }));
}

router.get('/identicon/dang.svg', req => fetch('https://news.ycombinator.com/y18.gif', req)) // meehhhhhhhh
router.get('/identicon/:by.svg', 
  combine(
    basics(), 
    contentTypes(['image/svg+xml', '*/*']),  // FF does not include image/svg+xml in image request accept header...
    // caching({ 
    //   cacheControl: 'public', 
    //   maxAge: 31536000,
    // })
  ), 
  async (req, { params: { by: seed = '' }, waitUntil, handled }) => {
    const cache = await self.caches?.open('identicon');
    const res = await cache?.match(req);

    if (!res) {
      const svg = new TextEncoder().encode(renderIconSVG({ seed, size: 6, scale: 2 }))
      const res = new Response(svg, { 
        headers: { 
          'content-type': 'image/svg+xml', 
          'content-length': ''+svg.byteLength ,
          // FIXME: Make it possible to get response (or just headers!?) after middleware applied!?
          //        Avoid setting cache control manually
          'cache-control': 'public, max-age=31536000',
        }, 
      });
      waitUntil((async () => { 
        await handled; 
        return cache?.put(req, res) 
      })());
      // Returning a clone of the response, because this response gets used first (thanks to `await handled`)
      return res.clone()
    }

    // FIXME: how to deal with immutable responses + middleware from cache??
    return new Response(res.body, res)
    // return res;
  },
)

router.get('/item', mw, (_req, ctx) => getItem(ctx))
