import { Awaitable } from "../common-types";

export type Context = { event: FetchEvent, /*waitUntil: (f?: any) => void*/ }
export type Handler<X extends Context> = (ctx: X) => Awaitable<Response>;

/**
 * @example
 *   self.addEventListener('fetch', adapt(withCORS()(withContentNegotiation()((async () => {
 *     return ok();
 *   })))));
 */
export const adapt = (handler: (ctx: Context) => Awaitable<Response>) => (event: FetchEvent) => handler({ event });

export * from './basics';
export * from './content-negotiation';
export * from './cookies';
export * from './cors';
export * from './session';