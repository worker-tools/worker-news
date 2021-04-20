import { html, HTMLResponse } from '@worker-tools/html';
import { StorageArea } from '@worker-tools/kv-storage';
import { found } from '@worker-tools/response-creators';
import { WithCookies, withCookies, WithSession, withSession } from 'src/vendor/middleware';
import { FORM, FORM_DATA } from 'src/vendor/middleware/mime';

import { RouteArgs, router } from "../router";

function recordToFormData(rec: Record<string, string | Blob>) {
  const data = new FormData();
  for (const [k, v] of Object.entries(rec)) data.append(k, v);
  return data;
}

function recordToSearchParams(rec: Record<string, string>) {
  const data = new URLSearchParams();
  for (const [k, v] of Object.entries(rec)) data.append(k, v);
  return data;
}

function loginEl(autoFocus: boolean) {
  return html`
    <table border="0">
      <tr>
        <td>username:</td>
        <td><input type="text" name="acct" size="20" autocorrect="off" spellcheck="false" autocapitalize="off" ${autoFocus ? html`autofocus="true"` : ''}></td>
      </tr>
      <tr>
        <td>password:</td>
        <td><input type="password" name="pw" size="20"></td>
      </tr>
    </table><br>`;
}

router.get('/login', ({ searchParams }) => {
  const goto = searchParams.get('goto') ?? 'news';
  return new HTMLResponse(html`<html lang="en">
    <head>
      <meta name="referrer" content="origin">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="favicon.ico">
    </head>
    <body>
      <b>Login</b>
      <br><br>
      <form method="post" action="login">
        <input type="hidden" name="goto" value="${goto}">
        ${loginEl(true)}
        <input type="submit" value="login">
      </form>
      <a href="forgot">Forgot your password?</a>
      <br><br>
      <b>Create Account</b>
      <br><br>
      <form method="post" action="login">
        <input type="hidden" name="goto" value="${goto}">
        <input type="hidden" name="creating" value="t">
        ${loginEl(false)}
        <input type="submit" value="create account">
      </form>
    </body>
  </html>`);
});

const HOSTNAME = 'https://news.ycombinator.com'

export type SessionType = { cookie?: string | null, user?: string | null, token?: string | null }
export type LoginArgs = RouteArgs & WithCookies & WithSession<SessionType>
export const cookies = withCookies();
export const session = withSession<SessionType>({ 
  storage: new StorageArea('logins'),
  expirationTtl: 60 * 60 * 24 * 365 * 15,
});

router.post('/login', cookies(session(async ({ request, session }) => {
  const fd = await request.formData();
  const acct = fd.get('acct') as string;
  const pw = fd.get('pw') as string;
  const goto = (fd.get('goto') ?? 'news') as string;

  const { ok, headers } = await fetch(new URL(`/login`, HOSTNAME).href, {
    method: 'POST',
    headers: { 'content-type': FORM },
    body: recordToSearchParams({ acct, pw, goto }),
  })

  // FIXME
  if (!ok) return found('login')

  const setCookie = headers.get('set-cookie');
  const [user, token] = setCookie?.split('; ')[0]?.substr('user='.length).split('&') ?? [];

  session.user = user;
  session.token = token;

  return found(goto);
})));
