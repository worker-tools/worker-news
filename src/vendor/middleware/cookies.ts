import * as re from '@worker-tools/response-creators';
import { RequestCookieStore, CookieStore, CookieListItem, CookieInit, CookieList, CookieStoreDeleteOptions, CookieStoreGetOptions } from "@worker-tools/request-cookie-store";
import { SignedCookieStore } from "@worker-tools/signed-cookie-store";
import { EncryptedCookieStore } from "@worker-tools/encrypted-cookie-store";
import { AllSettledCookieStore } from './all-settled-cookie-store';
import { unsettle } from '../unsettle';

import { Awaitable } from "../common-types";
import { BaseContext, Handler } from "./index";
import { iterHeadersSetCookieFix } from './headers-set-cookie-fix'

/**
 * A readonly map of the cookies associated with this request.
 * This is for reading convenience (no await required) only.
 * Use `CookieStore` for making changes.
 */
export type Cookies = ReadonlyMap<string, string> & Pick<CookiesMap, 'update'>

export type WithCookies = { cookieStore: CookieStore, cookies: Cookies };
export type WithSignedCookies = { signedCookieStore: CookieStore, signedCookies: Cookies };
export type WithEncryptedCookies = { encryptedCookieStore: CookieStore, encryptedCookies: Cookies };

export type WithCookiesHandler<X extends BaseContext> = (ctx: X & WithCookies) => Awaitable<Response>;
export type WithSignedCookiesHandler<X extends BaseContext> = (ctx: X & WithSignedCookies) => Awaitable<Response>;
export type WithEncryptedCookiesHandler<X extends BaseContext> = (ctx: X & WithEncryptedCookies) => Awaitable<Response>;

export interface WithCookiesOptions {
  secret: string | BufferSource
  salt?: BufferSource
  iterations?: number
}

export const withCookies = () => <X extends BaseContext>(handler: WithCookiesHandler<X>) => async (ctx: X): Promise<Response> => {
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

  return <X extends BaseContext>(handler: WithSignedCookiesHandler<X>): Handler<X> => async (ctx: X): Promise<Response> => {
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

    // Wait for all set cookie promises to settle
    await unsettle(signedCookieStore.allSettledPromise);

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

  return <X extends BaseContext>(handler: WithEncryptedCookiesHandler<X>): Handler<X> => async (ctx: X): Promise<Response> => {
    const cookieStore = new RequestCookieStore(ctx.request);
    const encryptedCookieStore = new AllSettledCookieStore(new EncryptedCookieStore(cookieStore, await keyPromise));

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

    // Wait until all cookie related promises have settled
    await unsettle(encryptedCookieStore.allSettledPromise);

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

export * from '@worker-tools/request-cookie-store';
