import { html, unsafeHTML, HTMLResponse, HTMLContent } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
import { basics, combine, contentTypes } from "@worker-tools/middleware";

import { router, RouteArgs, mw } from "../router";

import { threads as apiThreads } from "./api";

import { pageLayout } from './components';
import { commentEl, jsonStringifyStream } from "./item";
import { JSONResponse } from "@worker-tools/json-fetch";

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

async function threads({ searchParams, type: contentType, url }: RouteArgs)  {
  const id = searchParams.get('id');
  if (!id) return notFound('No such item.');
  const title = `${id}'s comments`;

  const next = Number(searchParams.get('next'));

  const threadsPage = apiThreads(id, next, { url });

  if (contentType === 'application/json') {
    return new JSONResponse(await jsonStringifyStream(threadsPage))
  }

  return new HTMLResponse(pageLayout({ title, op: 'threads', id })(async () => {
    return html`
      <tr>
        <td> </td>
      </tr>
      ${async function* () {
        try {
          const { items, moreLink } = await threadsPage
          for await (const item of items) {
             yield commentEl(item, { showReply: true, showParent: item.level === 0 });
          }
          yield moreLinkEl(await moreLink);
        } catch (err) {
          console.warn(err)
          yield html`<tr><td>${err instanceof Error ? err.message : err as string}</td></tr>`;
        }
      }}
      `;
  }));
}

router.get('/threads', mw, (_req, x) => threads(x))
