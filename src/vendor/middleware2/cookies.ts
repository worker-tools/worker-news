import { CookieStore, RequestCookieStore } from "@worker-tools/request-cookie-store";
import { SignedCookieStore, DeriveOptions } from "@worker-tools/signed-cookie-store";
import { EncryptedCookieStore } from "@worker-tools/encrypted-cookie-store";
import { forbidden } from "@worker-tools/response-creators";

import { Awaitable } from "../common-types";
import { MiddlewareCookieStore } from "./utils/middleware-cookie-store";
import { headersSetCookieFix } from '../middleware/headers-set-cookie-fix'
import { unsettle } from "../unsettle";

import { Context } from "./index";

export async function cookiesFrom(cookieStore: CookieStore): Promise<Cookies> {
  return Object.fromEntries((await cookieStore.getAll()).map(({ name, value }) => [name, value]));
}

/**
 * An object of the cookies sent with this request.
 * It is for reading convenience only.
 * To make changes, use the associated cookie store instead (provided by the middleware along with this object)
 */
export type Cookies = { readonly [key: string]: string };

export type UnsignedCookiesContext = { unsignedCookieStore: CookieStore, unsignedCookies: Cookies };
export type CookiesContext = { cookieStore: CookieStore, cookies: Cookies };
export type EncryptedCookiesContext = { encryptedCookieStore: CookieStore, encryptedCookies: Cookies };

export interface CookiesOptions extends DeriveOptions {
  keyring?: readonly CryptoKey[];
};

export const unsignedCookies = () => async <X extends Context>(ax: Awaitable<X>): Promise<X & UnsignedCookiesContext> => {
  const x = await ax;
  const unsignedCookieStore = new RequestCookieStore(x.request);
  const unsignedCookies = await cookiesFrom(unsignedCookieStore);
  x.effects.push(response => {
    const { status, statusText, body, headers } = response;
    return new Response(body, {
      status,
      statusText,
      headers: [
        ...headersSetCookieFix(headers),
        ...unsignedCookieStore.headers,
      ],
    });
  })
  return Object.assign(x, { unsignedCookies, unsignedCookieStore })
}

export const cookies = (opts: CookiesOptions) => {
  // TODO: options to provide own cryptokey??
  // TODO: What if secret isn't known at initialization (e.g. Cloudflare Workers)
  const keyPromise = SignedCookieStore.deriveCryptoKey(opts);

  return async <X extends Context>(ax: Awaitable<X>): Promise<X & CookiesContext> => {
    const x = await ax;
    const request = x.request;
    const cookieStore = new RequestCookieStore(request);
    const signedCookieStore = new MiddlewareCookieStore(new SignedCookieStore(cookieStore, await keyPromise, {
      keyring: opts.keyring
    }));

    let signedCookies: Cookies;
    try {
      signedCookies = await cookiesFrom(signedCookieStore);
    } catch {
      throw forbidden();
    }

    const nx = Object.assign(x, {
      cookieStore: signedCookieStore,
      cookies: signedCookies,
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
      encryptedCookies = await cookiesFrom(encryptedCookieStore);
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