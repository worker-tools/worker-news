import { html, HTMLResponse } from '@worker-tools/html';
import { ParamsURL } from '@worker-tools/json-fetch';
import { StorageArea } from '@worker-tools/kv-storage';
import { badRequest, found, internalServerError, ok, unauthorized } from '@worker-tools/response-creators';
import { 
  combine,
  basics,
  unsignedCookies, 
  withStorageSession, 
  CookieSessionContext as SessionContext, 
  AnyCookieContext as CookiesContext 
} from '@worker-tools/middleware';

import { RouteArgs, router } from "../router.ts";
import { consume } from '../api/rewrite-content.ts';

function newFormData(rec: Record<string, string | Blob> = {}) {
  const data = new FormData();
  for (const [k, v] of Object.entries(rec)) data.append(k, v);
  return data;
}

function recordToSearchParams(rec: Record<string, string>) {
  const data = new URLSearchParams();
  for (const [k, v] of Object.entries(rec)) data.append(k, v);
  return data;
}

export type SessionType = { 
  user?: string | null, 
  token?: string | null,
  cookie?: string | null, 
  votes: Set<number>,
}

export type LoginArgs = RouteArgs & CookiesContext & SessionContext<SessionType>

export const withBasics = basics()
export const withCookies = unsignedCookies();
export const withSession = withStorageSession<SessionType>({ 
  storage: new StorageArea('logins'),
  expirationTtl: 60 * 60 * 24 * 365 * 15,
  defaultSession: { votes: new Set() }
});

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
    </table><br/>`;
}

const loginMW = combine(withBasics, withCookies, withSession)
router.get('/login', loginMW, (req, { searchParams, session }) => {
  const goto = searchParams.get('goto') ?? 'news';
  if (session.token) found(goto)
  return new HTMLResponse(html`<html lang="en">
    <head>
      <meta name="referrer" content="origin">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="favicon.ico">
    </head>
    <body>
      <b>Login</b>
      <br/><br/>
      <form method="post" action="login">
        <input type="hidden" name="goto" value="${goto}">
        ${loginEl(true)}
        <input type="submit" value="login">
      </form>
      <a href="forgot">Forgot your password?</a>
      <br/><br/>
      <b>Create Account</b>
      <br/><br/>
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

router.post('/login', loginMW, async (req, { request, session }) => {
  const fd = await request.formData();
  const acct = fd.get('acct') as string;
  const pw = fd.get('pw') as string;
  const goto = (fd.get('goto') ?? 'news') as string;

  const { headers } = await fetch(new URL(`/login`, HOSTNAME).href, {
    method: 'POST',
    headers: { 'content-type': 'x-www-form-urlencoded' },
    body: recordToSearchParams({ acct, pw, goto }),
    redirect: 'manual',
  });

  // FIXME
  // if (!ok) return internalServerError()

  const setCookie = headers.get('set-cookie');
  const [user, token] = setCookie?.split('; ')[0]?.substr('user='.length).split('&') ?? [];

  session.user = user;
  session.token = token;

  return found(goto);
});

router.get('/logout', loginMW, async (req, { searchParams, session, cookieStore }) => {
  const goto = searchParams.get('goto') ?? 'news';
  if (session.user) {
    delete session.user;
    delete session.token;
    delete session.cookie;
    await cookieStore.delete('sid');
  }
  return found(goto)
});

async function getAuthToken(id: number, cookie: string) {
  const authResponse = await fetch(new ParamsURL('/item', { id }, HOSTNAME).href, {
    headers: [['Cookie', cookie]],
  });

  // FIXME: auth.ok??

  const abort = new AbortController();
  let auth: string;
  const rewriter = new HTMLRewriter()
    .on(`#up_${id}[href]`, {
      element(el) {
        auth = new URL(el.getAttribute('href')!, HOSTNAME).searchParams.get('auth')!
        abort.abort();
      }
    });

  await consume(rewriter.transform(authResponse).body!, abort.signal);
  return auth!;
}

router.get('/vote', loginMW, async (req, { searchParams, session }) => {
  if (session.user && session.token) {
    const id = Number(searchParams.get('id'));
    const how = searchParams.get('how')
    const goto = searchParams.get('goto')
    if (!id || !how || Number.isNaN(id)) return badRequest();

    const cookie = `user=${session.user}&${session.token}`;
    const auth = await getAuthToken(id, cookie);

    const voteResponse = await fetch(new ParamsURL('/vote', { id, how, auth }, HOSTNAME).href, {
      headers: [['Cookie', cookie]],
    });
    
    if (voteResponse.ok) {
      session.votes = session.votes.add(id);
      // FIXME: response.ok?
      return found(goto ?? 'news')
    } else {
      return internalServerError()
    }
  } else {
    return unauthorized();
  }
})
