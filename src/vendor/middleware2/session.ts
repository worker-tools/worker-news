import type { StorageArea } from 'kv-storage-interface';
import { UUID } from 'uuid-class';
import { Base64Decoder, Base64Encoder } from 'base64-encoding';
import { Encoder as MsgPackEncoder, Decoder as MsgPackDecoder } from 'msgpackr';
// import { Encoder as CBOREncoder, Decoder as CBORDecoder } from 'cbor-x/browser';

import { Context, Handler, CookiesContext, SignedCookiesContext } from './index';
import { Awaitable } from '../common-types';
import { EncryptedCookiesContext } from './cookies';
import { shortenId, parseUUID } from '../short-id';

type ARecord = Record<any, any>;

export type AnyCookieContext = Context & (EncryptedCookiesContext | SignedCookiesContext | CookiesContext);

export type SessionContext<S extends ARecord = ARecord> = { session: S };

export interface StorageSessionOptions<S extends ARecord = ARecord> extends CookieSessionOptions<S> {
  /** The storage area where to persist the session objects. */
  storage: StorageArea,
}

export interface CookieSessionOptions<S extends ARecord = ARecord> {
  /** You can override the name of the session cookie. Defaults to `sid`. */
  cookieName?: string,

  /** Session expiration time in seconds. Defaults to five minutes. */
  expirationTtl?: number,

  /** TODO */
  defaultSession?: S,
}

/**
 * Cookie session middleware for worker environments.
 * 
 * Requires a cookie store, preferably encrypted or signed.
 */
export function addCookieSession<S extends ARecord = ARecord>(
  { defaultSession = {}, cookieName = 'session', expirationTtl = 5 * 60 }: CookieSessionOptions = {}
): <X extends AnyCookieContext>(ax: Awaitable<X>) => Promise<X & SessionContext> {
  return async ax => {
    const ctx = await ax;
    const { event } = ctx;
    const { encryptedCookies, encryptedCookieStore } = ctx as EncryptedCookiesContext;
    const { signedCookies, signedCookieStore } = ctx as SignedCookiesContext;
    const { cookies: baseCookies, cookieStore: baseCookieStore } = ctx as CookiesContext;
    // TODO: configure preference?
    const cookieStore = encryptedCookieStore || signedCookieStore || baseCookieStore;
    const cookies = encryptedCookies || signedCookies || baseCookies;

    const controller = new AbortController();

    const [, session, flag] = await getCookieSessionProxy<S>(cookies.get(cookieName), event, {
      cookieName,
      expirationTtl,
      defaultSession,
      signal: controller.signal,
    });

    const newContext =  Object.assign(ctx, { session })

    ctx.effects.push(async response => {
      // Indicate that cookie session can no longer be modified.
      controller.abort();

      // no await necessary
      if (flag.dirty) cookieStore.set({
        name: cookieName,
        value: stringifySessionCookie(session),
        expires: new Date(Date.now() + expirationTtl * 1000),
        sameSite: 'lax',
        httpOnly: true,
      });

      return response;
    })

    return newContext;
  };
}

/**
 * Session middleware for worker environments.
 * 
 * The session object is a POJO that is persisted at the end of the application handler. 
 * It will implicitly call .waitUntil` to prevent the worker from shuting down before the operation has finished.
 * 
 * Users need to provide a `StorageArea` to persist the session between requests. 
 * There are implementations for both browsers (IndexedDB-backed) and Cloudflare Workers (KV storage backed) available.
 * 
 * Issues
 * - Will "block" until session object is retrieved from KV => provide "unyielding" version that returns a promise?
 */
export function addStorageSession<S extends ARecord = ARecord>(
  { storage, defaultSession = {}, cookieName = 'sid', expirationTtl = 5 * 60 }: StorageSessionOptions
): <X extends AnyCookieContext>(ax: Awaitable<X>) => Promise<X & SessionContext> {
    return async ax => {
      const ctx = await ax;
      const { event } = ctx;
      const { encryptedCookies, encryptedCookieStore } = ctx as EncryptedCookiesContext;
      const { signedCookies, signedCookieStore } = ctx as SignedCookiesContext;
      const { cookies: baseCookies, cookieStore: baseCookieStore } = ctx as CookiesContext;
      const cookieStore = encryptedCookieStore || signedCookieStore || baseCookieStore;
      const cookies = encryptedCookies || signedCookies || baseCookies;

      const [id, session, flag] = await getStorageSessionProxy<S>(cookies.get(cookieName), event, {
        storage,
        cookieName,
        expirationTtl,
        defaultSession,
      });

      const newContext = Object.assign(ctx, { session })

      ctx.effects.push(response => {
        // no await necessary
        if (!cookies.has(cookieName)) cookieStore.set({
          name: cookieName,
          value: shortenId(id),
          expires: new Date(Date.now() + expirationTtl * 1000),
          sameSite: 'lax',
          httpOnly: true,
        });

        // if (flag.dirty) {
        //   event.waitUntil((async () => {
        //     await storage.set(id, session, { expirationTtl });
        //   })())
        // }

        return response;
      })

      return newContext;
    };
  }

// TODO: make configurable
// const stringifySessionCookie = <T>(value: T) => new Base64Encoder({ url: true }).encode(new CBOREncoder({ structuredClone: true }).encode(value));
// const parseSessionCookie = <T>(value: string) => <T>new CBORDecoder({ structuredClone: true }).decode(new Base64Decoder().decode(value));
const stringifySessionCookie = <T>(value: T) => 
  new Base64Encoder({ url: true }).encode(new MsgPackEncoder({ structuredClone: true }).encode(value));
const parseSessionCookie = <T>(value: string) => 
  <T>new MsgPackDecoder({ structuredClone: true }).decode(new Base64Decoder().decode(value));

async function getCookieSessionProxy<S extends ARecord = ARecord>(
  cookieVal: string | null | undefined,
  _: FetchEvent,
  { defaultSession, signal }: CookieSessionOptions & { signal: AbortSignal },
): Promise<[null, S, { dirty: boolean }]> {
  const obj = (cookieVal && parseSessionCookie<S>(cookieVal)) || defaultSession;

  const flag = { dirty: false };

  return [null, new Proxy(<any>obj, {
    set(target, prop, value) {
      if (signal.aborted)
        throw Error('Headers already sent, session can no longer be modified!');
      flag.dirty = true;
      target[prop] = value;
      return true;
    },

    deleteProperty(target, prop) {
      if (signal.aborted)
        throw Error('Headers already sent, session can no longer be modified!');
      flag.dirty = true;
      delete target[prop];
      return true;
    },
  }), flag];
}

async function getStorageSessionProxy<S extends ARecord = ARecord>(
  cookieVal: string | null | undefined,
  event: FetchEvent,
  { storage, expirationTtl, defaultSession }: Required<StorageSessionOptions<S>>,
): Promise<[UUID, S, { dirty: boolean }]> {
  const sessionId = parseUUID(cookieVal) || new UUID();
  const obj = (await storage.get<S>(sessionId)) || defaultSession;

  const flag = { dirty: false };

  // HACK: Batch calls within the same micro task
  // TODO: Do once at the end of the handler instead. 
  // Writing to KV Storage is a HTTP request, can't have too many of those in CF workers...
  let nr = 0;
  const persist = () => {
    const capturedNr = ++nr;
    event.waitUntil((async () => {
      await new Promise(r => setTimeout(r)); // await end of microtask
      if (capturedNr === nr) { // no other invocations since
        await storage.set(sessionId, obj, { expirationTtl });
      }
    })());
  }

  return [sessionId, new Proxy(<any>obj, {
    set(target, prop, value) {
      // flag.dirty = true;
      persist();
      target[prop] = value;
      return true;
    },

    deleteProperty(target, prop) {
      // flag.dirty = true;
      persist();
      delete target[prop];
      return true;
    },
  }), flag];
}
