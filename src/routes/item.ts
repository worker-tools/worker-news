import { html, unsafeHTML, HTMLResponse, HTML } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { formatDistanceToNowStrict } from 'date-fns';

import { RouteArgs, router } from "../router";

import { api } from './api';
import { Item } from "./api2";
import { comments as apiComments, Post, Comment } from "./apidom";

import { page } from './components';
import { aThing } from './news';

const commentEl = ({ id, by, time, text }: any, level: number) => {
  const date = new Date(time * 1000);
  return html`<tr class="athing comtr " id="${id}">
    <td>
      <table border="0">
        <tbody>
          <tr>
            <td class="ind"><img src="https://news.ycombinator.com/s.gif" height="1" width="${level * 40}"></td>
            <td valign="top" class="votelinks">
              <center><a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
                  href="vote?id=${id}&amp;how=up&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D26443768#26444290">
                  <div class="votearrow" title="upvote"></div>
                </a></center>
            </td>
            <td class="default">
              <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
                      href="item?id=${id}">${formatDistanceToNowStrict(date, { addSuffix: true })}</a></span> <span id="unv_${id}"></span><span
                    class="par"></span> <a class="togg" n="1" href="javascript:void(0)"
                    onclick="return toggle(event, ${id})"></a> <span class="storyon"></span>
                </span></div><br>
              <div class="comment">
                <span class="commtext c00">
                  ${unsafeHTML(text)}
                  <div class="reply">
                    <p>
                      <font size="1">
                        <u><a href="reply?id=26444290&amp;goto=item%3Fid%3D26443768%2326444290">reply</a></u>
                      </font>
                    </p>
                  </div>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;
}

const commentEl2 = ({ id, author: by, created_at, text }: Item, level: number) => {
  const date = new Date(created_at);
  // console.log(text);
  return html`<tr class="athing comtr " id="${id}">
    <td>
      <table border="0">
        <tbody>
          <tr>
            <td class="ind"><img src="https://news.ycombinator.com/s.gif" height="1" width="${level * 40}"></td>
            <td valign="top" class="votelinks">
              <center><a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
                  href="vote?id=${id}&amp;how=up&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D26443768#26444290">
                  <div class="votearrow" title="upvote"></div>
                </a></center>
            </td>
            <td class="default">
              <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
                      href="item?id=${id}">${formatDistanceToNowStrict(date, { addSuffix: true })}</a></span> <span id="unv_${id}"></span><span
                    class="par"></span> <a class="togg" n="1" href="javascript:void(0)"
                    onclick="return toggle(event, ${id})"></a> <span class="storyon"></span>
                </span></div><br>
              <div class="comment">
                <span class="commtext c00">
                  ${text ? unsafeHTML(text) : ' '}
                  <div class="reply">
                    <p>
                      <font size="1">
                        <u><a href="reply?id=26444290&amp;goto=item%3Fid%3D26443768%2326444290">reply</a></u>
                      </font>
                    </p>
                  </div>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;
}

const commentEl3 = ({ id, level, user: by, content: text, time_ago, quality }: Comment) => {
  return html`<tr class="athing comtr " id="${id}">
    <td>
      <table border="0">
        <tbody>
          <tr>
            <td class="ind"><img src="https://news.ycombinator.com/s.gif" height="1" width="${level * 40}"></td>
            <td valign="top" class="votelinks">
              <center><a id="up_${id}" onclick="return vote(event, this, &quot;up&quot;)"
                  href="vote?id=${id}&amp;how=up&amp;auth=${'TODO'}&amp;goto=item%3Fid%3D26443768#26444290">
                  <div class="votearrow" title="upvote"></div>
                </a></center>
            </td>
            <td class="default">
              <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a href="user?id=${by}" class="hnuser">${by}</a> <span class="age"><a
                      href="item?id=${id}">${/*formatDistanceToNowStrict(date, { addSuffix: true })*/ time_ago}</a></span> <span id="unv_${id}"></span><span
                    class="par"></span> <a class="togg" n="1" href="javascript:void(0)"
                    onclick="return toggle(event, ${id})"></a> <span class="storyon"></span>
                </span></div><br>
              <div class="comment">
                <span class="commtext ${quality}">
                  ${text ? unsafeHTML(text) : ' '}
                  <div class="reply">
                    <p>
                      <font size="1">
                        <u><a href="reply?id=${id}&amp;goto=item%3Fid%3D26443768%2326444290">reply</a></u>
                      </font>
                    </p>
                  </div>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;
}

async function* commentTree(kids?: number[], level = 0): AsyncGenerator<HTML> {
  for (const id of kids ?? []) {
    const comment = await api(`/v0/item/${id}.json`);
    yield commentEl(comment, level);
    yield* commentTree(comment.kids, level + 1);
  }
}

async function* commentTree2(children: Item[], level = 0): AsyncGenerator<HTML> {
  for (const item of children) {
    yield commentEl2(item, level);
    yield* commentTree2(item.children, level + 1);
  }
}

async function* commentTree3(children: Comment[]): AsyncGenerator<HTML> {
  for (const item of children) {
    yield commentEl3(item);
    yield* commentTree3(item.comments);
  }
}

function getItem({ searchParams }: RouteArgs)  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');

  return new HTMLResponse(page({ title: 'Loading...', op: 'item' })(async () => {
    // const item = await api(`/v0/item/${id}.json`);
    // const { type, title, time, score, url, by, descendants } = item;
    // const item = await apiItem(id);
    // const { title, author: by, points: score, created_at, children, descendants } = item;
    // const date = new Date(created_at);
    const item = await apiComments(id);
    const { title, points: score, comments_count: descendants, user: by, time_ago, comments } = item;
    return html`
      ${title 
        ? html` <script>document.title=decodeURIComponent("${unsafeHTML(encodeURIComponent(title))}")</script>` 
        : null}
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
                    class="hnuser">${by}</a> <span class="age"><a href="item?id=${id}">${/*formatDistanceToNowStrict(date, { addSuffix: true })*/ time_ago}</a></span>
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
          <table border="0" class="comment-tree">
            <tbody>
              ${commentTree3(comments)}
            </tbody>
          </table>
          <br><br>
        </td>
      </tr>`;
  }));
}

router.get('/item', getItem);