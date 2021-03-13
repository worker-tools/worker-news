import * as re from '@worker-tools/response-creators';
import { RequestCookieStore, CookieStore } from "@worker-tools/request-cookie-store";
import { SignedCookieStore } from "@worker-tools/signed-cookie-store";
import { EncryptedCookieStore } from "@worker-tools/encrypted-cookie-store";

import { Awaitable } from "../common-types";
import { Base, Handler } from "./index";

/**
 * A readonly map of the cookies associated with this request.
 * This is for reading convenience (no await required) only.
 * Use `CookieStore` for making changes.
 */
export type Cookies = ReadonlyMap<string, string> & Pick<CookiesMap, 'update'>

export type WithCookies = { cookieStore: CookieStore, cookies: Cookies };
export type WithSignedCookies = { signedCookieStore: CookieStore, signedCookies: Cookies };
export type WithEncryptedCookies = { encryptedCookieStore: CookieStore, encryptedCookies: Cookies };

export type WithCookiesHandler<X extends Base> = (ctx: X & WithCookies) => Awaitable<Response>;
export type WithSignedCookiesHandler<X extends Base> = (ctx: X & WithSignedCookies) => Awaitable<Response>;
export type WithEncryptedCookiesHandler<X extends Base> = (ctx: X & WithEncryptedCookies) => Awaitable<Response>;

export interface WithCookiesOptions {
  secret: string | BufferSource
  salt?: BufferSource
  iterations?: number
}

export const withCookies = () => <X extends Base>(handler: WithCookiesHandler<X>) => async (ctx: X): Promise<Response> => {
  const cookieStore = new RequestCookieStore(ctx.event.request);
  const cookies = await CookiesMap.from(cookieStore);
  const { status, statusText, body, headers } = await handler({ ...ctx, cookieStore, cookies });
  const response = new Response(body, {
    status,
    statusText,
    headers: [
      ...iterHeadersSetCookieFix(headers),
      ...cookieStore.headers,
    ],
  });
  return response;
}

export const withSignedCookies = (opts: WithCookiesOptions) => {
  const keyPromise = SignedCookieStore.deriveCryptoKey(opts);

  return <X extends Base>(handler: WithSignedCookiesHandler<X>): Handler<X> => async (ctx: X): Promise<Response> => {
    const cookieStore = new RequestCookieStore(ctx.event.request);
    const signedCookieStore = new SignedCookieStore(cookieStore, await keyPromise);

    let signedCookies: Cookies;
    try {
      signedCookies = await CookiesMap.from(signedCookieStore);
    } catch {
      return re.forbidden();
    }

    const { status, statusText, body, headers } = await handler({
      ...ctx,
      signedCookieStore,
      signedCookies,
    });

    // New `Response` to work around a known limitation in `Headers` class:
    const response = new Response(body, {
      status,
      statusText,
      headers: [
        ...iterHeadersSetCookieFix(headers),
        ...cookieStore.headers,
      ],
    });

    return response;
  };
}

export const withEncryptedCookies = (opts: WithCookiesOptions) => {
  const keyPromise = EncryptedCookieStore.deriveCryptoKey(opts);

  return <X extends Base>(handler: WithEncryptedCookiesHandler<X>): Handler<X> => async (ctx: X): Promise<Response> => {
    const cookieStore = new RequestCookieStore(ctx.event.request);
    const encryptedCookieStore = new EncryptedCookieStore(cookieStore, await keyPromise);

    let encryptedCookies: Cookies;
    try {
      encryptedCookies = await CookiesMap.from(encryptedCookieStore);
    } catch {
      return re.forbidden();
    }

    const { status, statusText, body, headers } = await handler({
      ...ctx,
      encryptedCookieStore,
      encryptedCookies,
    });

    // New `Response` to work around a known limitation in `Headers` class:
    const response = new Response(body, {
      status,
      statusText,
      headers: [
        ...iterHeadersSetCookieFix(headers),
        ...cookieStore.headers,
      ],
    });

    return response;
  };
}

export class CookiesMap extends Map<string, string> {
  static async from(cookieStore: CookieStore) {
    return new CookiesMap((await cookieStore.getAll()).map(({ name, value }) => [name, value]));
  }

  /** Updates this cookie map with new values from `cookieStore`. */
  async update(cookieStore: CookieStore) {
    super.clear();
    for (const { name, value } of await cookieStore.getAll()) {
      super.set(name, value);
    }
  }
}

const XE = /(Mon|Tue|Wed|Thu|Fri|Sat|Sun), /;
const XR = '$1,�';
const YE = /(Mon|Tue|Wed|Thu|Fri|Sat|Sun),�/;
const YR = '$1, '

/** 
 * Fixes the iteration of the `Headers` class with respect to `set-cookie` header:
 * 
 * By default, multiple `set-cookie` headers will be concatenated by the `Headers` class implementation.
 * However, the HTTP protocol/browsers expect multiple `Set-Cookie` headers,
 * and do not recognize concatenated `Set-Cookie` headers.
 * 
 * This helper function fixes this behavior, yielding multiple `set-cookie` key-value tuples,
 * provided that no value contains the concatenation sequence `', '` (comma empty-space).
 */
function iterHeadersSetCookieFix(headers: Headers): [string, string][] {
  return [...headers].flatMap(([h, v]) => h === 'set-cookie'
    ? v.replace(new RegExp(XE, 'g'), XR)
      .split(', ')
      .map(x => [h, x.replace(new RegExp(YE, 'g'), YR)] as [string, string])
    : [[h, v] as [string, string]])
}

export * from '@worker-tools/request-cookie-store';
