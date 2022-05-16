import { html, unsafeHTML, HTMLResponse, HTMLContent, BufferedHTMLResponse } from "@worker-tools/html";
import { basics, caching, combine, contentTypes } from "@worker-tools/middleware";
import { notFound, ok } from "@worker-tools/response-creators";
import { JSONStreamResponse, jsonStringifyGenerator } from '@worker-tools/json-stream';
import { renderIconSVG } from "@qwtel/blockies";
import { formatDistanceToNowStrict } from 'date-fns';
import { asyncIterableToStream, ForOfAwaitable } from "whatwg-stream-to-async-iter"; // FIXME
import { StreamResponse } from "@worker-tools/stream-response";

import { mw, RouteArgs, router } from "../router.ts";

import { api, AComment, APost, Stories, APollOpt } from "../api/index.ts";

import { pageLayout, identicon, cachedWarning, isSafari } from './components.ts';
import { aThing, fastTTFB, subtext } from './news.ts';
import { moreLinkEl } from "./threads.ts";

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
          <a href="user?id=${by}" class="hnuser">${!deleted && identicon(by)} ${by}</a> 
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
          ${deleted ? '[deleted]' : text ? unsafeHTML(text) : ' '}
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

export async function* commentTree(kids: ForOfAwaitable<AComment>, parent: { dead: boolean }): AsyncGenerator<HTMLContent> {
  for await (const item of kids) {
    yield commentEl(item, { showReply: !parent.dead });
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

async function* pollOptList(parts: ForOfAwaitable<APollOpt>): AsyncIterable<HTMLContent> {
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

const PLACEHOLDER = 'Loading…';

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

export class ExponentialJoinStream extends TransformStream<string, string> {
  constructor(joiner = ',') {
    let n = 0;
    let i = 0;
    let buffer: string[] = [];
    super({
      start() {
        n = 4;
        i = 0;
        buffer = new Array(2**n);
      },
      transform(chunk, controller) {
        buffer[i++] = chunk;
        if (i === 2**n) {
          i = 0;
          controller.enqueue(buffer.join(joiner))
          buffer = new Array(2**++n);
        }
      },
      flush(controller) {
        controller.enqueue(buffer.join(joiner))
        buffer = [];
      },
    })
  }
}


// Dead items: 26841031
function getItem({ request, headers, searchParams, type: contentType, url, handled, waitUntil }: RouteArgs)  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');
  const p = Math.max(1, Number(searchParams.get('p') || '1'));

  const postPromise = api.comments(id, p, { url, handled, waitUntil });
  const pageRenderer = pageLayout({ title: PLACEHOLDER, op: 'item', p, headers })

  if (contentType === 'application/json') {
    return new StreamResponse(fastTTFB(jsonStringifyGenerator(postPromise)), { 
      headers: [['content-type', JSONStreamResponse.contentType]] 
    })
  }

  // const Ctor = isSafari(navigator.userAgent) ? BufferedHTMLResponse : HTMLResponse
  const content = pageRenderer(async () => {
    try {
      const post = await postPromise;
      const { title, text, kids, parts } = post;
      return html`
        <tr id="pagespace" title="${encodeURIComponent(title)}" style="height:10px"></tr>
        ${title 
          ? html`<script>document.title = document.title.replace('${PLACEHOLDER}', decodeURIComponent(document.getElementById('pagespace').title))</script>` 
          : ''}
        <tr>
          <td>
            <table class="fatitem" border="0">
              <tbody>
                ${cachedWarning(post, request)}
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
                }${!post.dead && !searchParams.has('p') ? replyTr(post) : ''}
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
    }
  });
  let stream = asyncIterableToStream(content)
  // In safari, sending many small chunks to the chokes up the browser for some reason, 
  // so we limit the amount of chunks sent via exponential grouping.
  if (isSafari(navigator.userAgent)) stream = stream.pipeThrough(new ExponentialJoinStream(''))
  return new StreamResponse(stream, { headers: [['content-type', HTMLResponse.contentType]]})
}

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
