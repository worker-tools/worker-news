import { html, unsafeHTML, HTMLResponse, HTMLContent } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";

import { RouteArgs, router } from "../router";

import { threads as apiThreads } from "./api/provider";

import { pageLayout } from './components';
import { commentEl } from "./item";

function threads({ searchParams }: RouteArgs)  {
  const id = searchParams.get('id');
  if (!id) return notFound('No such item.');
  const title = `${id}'s comments`;

  const pageRenderer = pageLayout({ title, op: 'threads', id })

  return new HTMLResponse(pageRenderer(async () => {
    try {
      return html`
        <tr id="pagespace" title="${encodeURIComponent(title)}" style="height:10px"></tr>
        <tr>
          <td>
          </td>
        </tr>
        ${async function* () {
          for await (const item of apiThreads(id)) {
            yield commentEl(item, { showReply: true, showParent: item.level === 0 });
          }
        }}
        `;
    } catch (err) {
      return html`<tr id="pagespace" title="Error" style="height:10px"></tr>
        <tr><td>${err.message}</td></tr>`
    }
  }));
}

router.get('/threads', threads);
