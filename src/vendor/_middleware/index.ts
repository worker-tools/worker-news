import { Awaitable } from "../common-types";

export type Context = { readonly event: FetchEvent, /*waitUntil: (f?: any) => void*/ }
export type Handler<X extends Context> = (request: Request, ctx: X) => Awaitable<Response>;

// /**
//  * @example
//  *   self.addEventListener('fetch', adapt(withCORS()(withContentNegotiation()((async () => {
//  *     return ok();
//  *   })))));
//  */
export const adapt = (handler: Handler<Context>) => (event: FetchEvent) => handler(event.request, { event });

export * from './basics';
export * from './content-negotiation';
export * from './cookies';
export * from './cors';
export * from './session';