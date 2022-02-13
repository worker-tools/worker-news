import { html, unsafeHTML, HTMLResponse, HTMLContent } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';

import { RouteArgs, router } from "../router";

import { comments as apiComments, AComment, APost, Stories, APollOpt } from "./api";

import { pageLayout } from './components';
import { cookies, LoginArgs, session } from "./login";
import { aThing, subtext } from './news';
import { moreLinkEl } from "./threads";

export interface CommOpts {
  showToggle?: boolean,
  showReply?: boolean,
  showParent?: boolean,
}

export const commentTr = (comm: AComment, { showToggle = true, showReply = true, showParent = false }: CommOpts = {}) => {
  const { id, level, by, text, time, quality, deleted, parent, story, storyTitle } = comm;
  const timeAgo = time && formatDistanceToNowStrict(time, { addSuffix: true })
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
          <a href="user?id=${by}" class="hnuser">${by}</a> 
          <span class="age" title="${time?.toUTCString()}"><a href="item?id=${id}">${timeAgo}</a></span>
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
          ${showReply && !deleted ? html`<div class="reply">
            <p>
              <font size="1">
                ${/*<u><a href="reply?id=${id}&amp;goto=item%3Fid%3D${comm.story}%23${id}">reply</a></u>*/''}
                ${/*<span style="cursor:default;opacity:0.33" title="Not implemented">reply</span>*/''}
                <u><a onclick="popitup(this,event,850,300)" href="https://news.ycombinator.com/item?id=${id}#${id}">reply</a></u>
              </font>
            </p>
          </div>`: ''}
        </span>
      </div>
    </td>
  </tr>`;
}

export const commentEl = (comment: AComment, commOpts: CommOpts = {}) => {
  if (comment.dead) return '';
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

export async function* commentTree(kids: AsyncIterable<AComment>): AsyncGenerator<HTMLContent> {
  for await (const item of kids) {
    yield commentEl(item);
    if (item.kids) yield* commentTree(item.kids);
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

// Dead items: 26841031
function getItem({ searchParams, session }: LoginArgs)  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');
  const p = Number(searchParams.get('p'));

  const postResponse = apiComments(id, p);
  const pageRenderer = pageLayout({ title: PLACEHOLDER, op: 'item', session })

  return new HTMLResponse(pageRenderer(async () => {
    try {
      const post = await postResponse;
      const { title, text, kids, parts } = post;
      return html`
        <tr id="pagespace" title="${title}" style="height:10px"></tr>
        ${title 
          ? html`<script>document.title = document.title.replace('${PLACEHOLDER}', decodeURIComponent(document.getElementById('pagespace').title))</script>` 
          : ''}
        <tr>
          <td>
            <table class="fatitem" border="0">
              <tbody>
                ${post.type === 'comment' 
                  ? [commentTr(post as AComment, { showParent: true })]
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
            <table border="0" class="comment-tree">
              <tbody>
                ${kids && commentTree(kids)}
                ${async () => {
                  const moreLink = await post.moreLink;
                  return moreLink
                    ? moreLinkEl(moreLink)
                    : html`<br/><br/>`;
                }}
              </tbody>
            </table>
          </td>
        </tr>`;
    } catch (err) {
      return html`<tr id="pagespace" title="Error" style="height:10px"></tr>
        <tr><td>${err instanceof Error ? err.message : err as string}</td></tr>`
    }
  }));
}

router.get('/item', cookies(session(getItem)));
