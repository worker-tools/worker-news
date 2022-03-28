import * as re from '@worker-tools/response-creators';
import { RequestCookieStore, CookieStore, CookieListItem, CookieInit, CookieList, CookieStoreDeleteOptions, CookieStoreGetOptions } from "@worker-tools/request-cookie-store";
import { SignedCookieStore } from "@worker-tools/signed-cookie-store";
import { EncryptedCookieStore } from "@worker-tools/encrypted-cookie-store";
import { AllSettledCookieStore } from './all-settled-cookie-store';
import { unsettle } from '../unsettle';

import { Context, Handler } from "./index";
import { iterHeadersSetCookieFix } from './headers-set-cookie-fix'

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

/**
 * A readonly map of the cookies associated with this request.
 * This is for reading convenience (no await required) only.
 * Use `CookieStore` for making changes.
 */
export type Cookies = ReadonlyMap<string, string> & Pick<CookiesMap, 'update'>

export type CookiesContext = { cookieStore: CookieStore, cookies: Cookies };
export type SignedCookiesContext = { signedCookieStore: CookieStore, signedCookies: Cookies };
export type EncryptedCookiesContext = { encryptedCookieStore: CookieStore, encryptedCookies: Cookies };

export type CookiesHandler<X extends Context> = Handler<X & CookiesContext>
export type SignedCookiesHandler<X extends Context> = Handler<X & SignedCookiesContext>;
export type EncryptedCookiesHandler<X extends Context> = Handler<X & EncryptedCookiesContext>

// DRY: DeriveOptions
export interface CookiesOptions {
  secret: string | BufferSource | JsonWebKey
  salt?: BufferSource
  iterations?: number
  format?: KeyFormat,
  hash?: HashAlgorithmIdentifier;
  hmacHash?: HashAlgorithmIdentifier;
  length?: number,
}

export const withCookies = () => <X extends Context>(handler: CookiesHandler<X>): Handler<X> => async (request, ctx) => {
  const cookieStore = new RequestCookieStore(request);
  const cookies = await CookiesMap.from(cookieStore);
  const { status, statusText, body, headers } = await handler(request, { ...ctx, cookieStore, cookies });
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

export const withSignedCookies = (opts: CookiesOptions) => {
  const keyPromise = SignedCookieStore.deriveCryptoKey(opts);

  return <X extends Context>(handler: SignedCookiesHandler<X>): Handler<X> => async (request, ctx) => {
    const cookieStore = new RequestCookieStore(request);
    const signedCookieStore = new AllSettledCookieStore(new SignedCookieStore(cookieStore, await keyPromise));

    let signedCookies: Cookies;
    try {
      signedCookies = await CookiesMap.from(signedCookieStore);
    } catch {
      return re.forbidden();
    }

    const { status, statusText, body, headers } = await handler(request, {
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

export const withEncryptedCookies = (opts: CookiesOptions) => {
  const keyPromise = EncryptedCookieStore.deriveCryptoKey(opts);

  return <X extends Context>(handler: EncryptedCookiesHandler<X>): Handler<X> => async (request, ctx) => {
    const cookieStore = new RequestCookieStore(request);
    const encryptedCookieStore = new AllSettledCookieStore(new EncryptedCookieStore(cookieStore, await keyPromise));

    let encryptedCookies: Cookies;
    try {
      encryptedCookies = await CookiesMap.from(encryptedCookieStore);
    } catch {
      return re.forbidden();
    }

    const { status, statusText, body, headers } = await handler(request, {
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

export * from '@worker-tools/request-cookie-store';
