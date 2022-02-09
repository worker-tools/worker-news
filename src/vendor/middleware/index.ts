import { Awaitable } from "../common-types";

export type BaseContext = { event: FetchEvent }
export type BaseHandler = (ctx: BaseContext) => Awaitable<Response>;
export type Handler<X extends BaseContext> = (ctx: X) => Awaitable<Response>;

/**
 * @example
 *   self.addEventListener('fetch', adapt(withCORS()(withContentNegotiation()((async () => {
 *     return ok();
 *   })))));
 */
export const adapt = (handler: BaseHandler) => (event: FetchEvent) => handler({ event });

export * from './basics';
export * from './content-negotiation';
export * from './cookies';
export * from './cors';
export * from './session';