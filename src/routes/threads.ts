import { html, unsafeHTML, HTMLResponse, HTMLContent } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { basics } from "src/vendor/middleware2";

import { router, RouteArgs } from "../router";

import { threads as apiThreads } from "./api";

import { pageLayout } from './components';
import { commentEl } from "./item";

export const moreLinkEl = (moreLink: string) => html`
  <tr class="morespace" style="height:10px"></tr>
  <tr>
    <td>
      <table border="0">
        <tr>
          <td><img src="s.gif" height="1" width="0"></td>
          <td><img src="s.gif" height="1" width="14"></td>
          <td class="title"><a href="${moreLink}" class="morelink" rel="next">More</a></td>
        </tr>
      </table>
    </td>
  </tr>`;

function threads({ searchParams }: RouteArgs)  {
  const id = searchParams.get('id');
  if (!id) return notFound('No such item.');
  const title = `${id}'s comments`;

  const next = Number(searchParams.get('next'));

  const threadsGen = apiThreads(id, next);

  return new HTMLResponse(pageLayout({ title, op: 'threads', id })(async () => {
    return html`
      <tr id="pagespace" title="${title}" style="height:10px"></tr>
      <tr>
        <td> </td>
      </tr>
      ${async function* () {
        try {
          for await (const item of threadsGen) {
            if (typeof item !== 'string') {
              yield commentEl(item, { showReply: true, showParent: item.level === 0 });
            } else if (item) {
              yield moreLinkEl(item);
            }
          }
        } catch (err) {
          console.warn(err)
          yield html`<tr><td>${err instanceof Error ? err.message : err as string}</td></tr>`;
        }
      }}
      `;
  }));
}

router.get('/threads', basics(), (_req, x) => threads(x))
