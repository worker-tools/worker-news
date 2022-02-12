import { html, HTMLResponse, unsafeHTML } from "@worker-tools/html";
import { notFound } from "@worker-tools/response-creators";
// import { notFound } from "@worker-tools/response-creators";
// import { formatDistanceToNowStrict } from 'date-fns';

import { RouteArgs, router } from "../router";
import { user as apiUser } from "./api";
import { pageLayout } from './components';
import { cookies, LoginArgs, session } from "./login";

const dtf = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const numDTF = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

const user = ({ searchParams, session }: LoginArgs) => {
  const un = searchParams.get('id');
  if (!un) return notFound('No such user.');

  const userPromise = apiUser(un)
  const title = `Profile: ${un}`;

  return new HTMLResponse(pageLayout({ op: 'user', title, session })(html`
    <tr id="pagespace" title="${title}" style="height:10px"></tr>
    <tr>
      <td>
        <table border="0"><tbody>
          ${async () => {
            try {
              const uo = await userPromise;
              const dt = uo?.created && new Date(uo.created * 1000);
              const [{ value: month },, { value: day },, { value: year }] = numDTF.formatToParts(dt);
              return html`
                <tr class="athing"><td valign="top">user:</td><td timestamp="${uo.created}"><a href="user?id=${un}" class="hnuser">${un}</a></td></tr>
                <tr><td valign="top">created:</td><td><a href="front?day=${year}-${month}-${day}&amp;birth=${un}">${dtf.format(dt)}</a></td></tr>
                <tr><td valign="top">karma:</td><td>${uo.karma}</td></tr>
                <tr><td valign="top">about:</td><td style="overflow:hidden;">${unsafeHTML(uo.about ?? '')}</td></tr>
                <tr><td></td><td><a href="submitted?id=${un}"><u>submissions</u></a></td></tr>
                <tr><td></td><td><a href="threads?id=${un}"><u>comments</u></a></td></tr>
                <!-- <tr><td></td><td><a href="favorites?id=${un}"><u>favorites</u></a></td></tr> -->
              `;
            } catch (err) {
              return html`<tr><td colspan="2"></td><td>${err instanceof Error ? err.message : err as string}</td></tr>`;
            }
          }}
        </tbody></table>
        <br/><br/>
      </td>
    </tr>`));
}

router.get('/user', cookies(session(user)));
