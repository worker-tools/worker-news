import { html, unsafeHTML, HTMLResponse, HTMLContent } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";

import { RouteArgs, router } from "../router";

import { threads as apiThreads } from "./api";

import { pageLayout } from './components';
import { commentEl } from "./item";
import { cookies, LoginArgs, session } from "./login";

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

function threads({ searchParams, session }: LoginArgs)  {
  const id = searchParams.get('id');
  if (!id) return notFound('No such item.');
  const title = `${id}'s comments`;

  const next = Number(searchParams.get('next'));

  const threadsGen = apiThreads(id, next);
  const pageRenderer = pageLayout({ title, op: 'threads', id, session })

  return new HTMLResponse(pageRenderer(async () => {
    try {
      return html`
        <tr id="pagespace" title="${encodeURIComponent(title)}" style="height:10px"></tr>
        <tr>
          <td>
          </td>
        </tr>
        ${async function* () {
          for await (const item of threadsGen) {
            if (typeof item !== 'string') {
              yield commentEl(item, { showReply: true, showParent: item.level === 0 });
            } else if (item) {
              yield moreLinkEl(item);
            }
          }
        }}
        `;
    } catch (err) {
      return html`<tr id="pagespace" title="Error" style="height:10px"></tr>
        <tr><td>${err instanceof Error ? err.message : err as string}</td></tr>`
    }
  }));
}

router.get('/threads', cookies(session(threads)));
