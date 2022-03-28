import { CookieStore, RequestCookieStore } from "@worker-tools/request-cookie-store";
import { SignedCookieStore, DeriveOptions } from "@worker-tools/signed-cookie-store";
import { EncryptedCookieStore } from "@worker-tools/encrypted-cookie-store";
import { forbidden } from "@worker-tools/response-creators";

import { Awaitable } from "../common-types";
import { MiddlewareCookieStore } from "./middleware-cookie-store";
import { headersSetCookieFix } from '../middleware/headers-set-cookie-fix'
import { unsettle } from "../unsettle";

import { Context } from "./index";

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

export interface CookiesOptions extends DeriveOptions {
  keyring?: readonly CryptoKey[];
};

export async function addCookies<X extends Context>(ax: Awaitable<X>): Promise<X & CookiesContext> {
  const x = await ax;
  const cookieStore = new RequestCookieStore(x.request);
  const cookies = await CookiesMap.from(cookieStore);
  x.effects.push(response => {
    const { status, statusText, body, headers } = response;
    return new Response(body, {
      status,
      statusText,
      headers: [
        ...headersSetCookieFix(headers),
        ...cookieStore.headers,
      ],
    });
  })
  return Object.assign(x, { cookies, cookieStore })
}


export const addSignedCookies = (opts: CookiesOptions) => {
  // TODO: options to provide own cryptokey??
  // TODO: What if secret isn't known at initialization (e.g. Cloudflare Workers)
  const keyPromise = SignedCookieStore.deriveCryptoKey(opts);

  return async <X extends Context>(ax: Awaitable<X>): Promise<X & SignedCookiesContext> => {
    const x = await ax;
    const request = x.request;
    const cookieStore = new RequestCookieStore(request);
    const signedCookieStore = new MiddlewareCookieStore(new SignedCookieStore(cookieStore, await keyPromise, {
      keyring: opts.keyring
    }));

    let signedCookies: Cookies;
    try {
      signedCookies = await CookiesMap.from(signedCookieStore);
    } catch {
      throw forbidden();
    }

    const nx = Object.assign(x, {
      signedCookieStore,
      signedCookies,
    })

    x.effects.push(async response => {
      // Wait for all set cookie promises to settle
      await unsettle(signedCookieStore.allSettledPromise);

      return new Response(response.body, {
        ...response,
        headers: [
          ...headersSetCookieFix(response.headers),
          ...cookieStore.headers,
        ],
      })
    })

    return nx;
  };
}

export const addEncryptedCookies = (opts: CookiesOptions) => {
  // TODO: options to provide own cryptokey??
  // TODO: What if secret isn't known at initialization (e.g. Cloudflare Workers)
  const keyPromise = EncryptedCookieStore.deriveCryptoKey(opts);

  return async <X extends Context>(ax: Awaitable<X>): Promise<X & EncryptedCookiesContext> => {
    const x = await ax;
    const request = x.request;
    const cookieStore = new RequestCookieStore(request);
    const encryptedCookieStore = new MiddlewareCookieStore(new EncryptedCookieStore(cookieStore, await keyPromise, {
      keyring: opts.keyring
    }));

    let encryptedCookies: Cookies;
    try {
      encryptedCookies = await CookiesMap.from(encryptedCookieStore);
    } catch {
      throw forbidden();
    }

    const nx = Object.assign(x, {
      encryptedCookieStore,
      encryptedCookies,
    })

    x.effects.push(async response => {
      // Wait for all set cookie promises to settle
      await unsettle(encryptedCookieStore.allSettledPromise);

      return new Response(response.body, {
        ...response,
        headers: [
          ...headersSetCookieFix(response.headers),
          ...cookieStore.headers,
        ],
      })
    })

    return nx;
  };
}