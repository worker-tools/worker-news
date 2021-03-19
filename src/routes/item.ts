import { html, unsafeHTML, HTMLResponse, HTML } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
// import { formatDistanceToNowStrict } from 'date-fns';
import { DOMParser } from 'linkedom';

import { RouteArgs, router } from "../router";

import { comments as apiComments, AComment } from "./api/provider";

import { page } from './components';
import { aThing } from './news';

// Primitive support for 
const blockquotify = (text: string) => {
  const doc = new DOMParser().parseFromString(text, 'text/html')
  for (const p of doc.querySelectorAll('p') as HTMLParagraphElement[]) {
    if (p.textContent?.startsWith('>')) {
      const bq = doc.createElement('blockquote')
      bq.textContent = p.innerHTML.substr(1);
      p.outerHTML = bq.outerHTML;
    }
  }
  for (const a of doc.querySelectorAll('a[href*="news.ycombinator.com/item"]') as HTMLAnchorElement[]) {
    const url = new URL(a.href);
    url.host = self.location.host;
    url.protocol = self.location.protocol;
    a.setAttribute('href', url.href);
  }
  return doc.toString();
}

const commentEl = ({ id, level, by, text, timeAgo, quality }: AComment) => {
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
                      href="item?id=${id}">${timeAgo}</a></span> <span id="unv_${id}"></span><span
                    class="par"></span> <a class="togg" n="1" href="javascript:void(0)"
                    onclick="return toggle(event, ${id})"></a> <span class="storyon"></span>
                </span></div><br>
              <div class="comment">
                <span class="commtext ${quality}">
                  ${text ? unsafeHTML(blockquotify(text)) : ' '}
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

async function* commentTree(kids: AsyncIterable<AComment>): AsyncGenerator<HTML> {
  for await (const item of kids) {
    yield commentEl(item);
    if (item.kids) yield* commentTree(item.kids);
  }
}

function getItem({ searchParams }: RouteArgs)  {
  const id = Number(searchParams.get('id'));
  if (Number.isNaN(id)) return notFound('No such item.');

  return new HTMLResponse(page({ title: 'Loading...', op: 'item' })(async () => {
    const post = await apiComments(id);
    const { title, score, descendants, by, timeAgo, kids } = post;
    return html`
      ${title 
        ? html` <script>document.title=decodeURIComponent("${unsafeHTML(encodeURIComponent(title))}")</script>` 
        : null}
      <tr id="pagespace" title="${title}" style="height:10px"></tr>
      <tr>
        <td>
          <table class="fatitem" border="0">
            <tbody>
              ${aThing(post)}
              <tr>
                <td colspan="2"></td>
                <td class="subtext">
                  <span class="score" id="score_${id}">${score} points</span> by <a href="user?id=${by}"
                    class="hnuser">${by}</a> <span class="age"><a href="item?id=${id}">${timeAgo}</a></span>
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
              ${kids && commentTree(kids)}
            </tbody>
          </table>
          <br><br>
        </td>
      </tr>`;
  }));
}

router.get('/item', getItem);