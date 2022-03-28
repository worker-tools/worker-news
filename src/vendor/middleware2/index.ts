import { AppendOnlyList } from "../append-only-list";
import { Awaitable } from "../common-types";

export interface Context { 
  event: FetchEvent, 
  /** 
   * A list of effects (transforms?) applied to the `Response`. 
   * Middleware can add effects to the list, but user handlers should ignore it. 
   */
  effects: AppendOnlyList<ResponseEffect>, 
  /*waitUntil: (f?: any) => void*/ 
}
export type Handler<X extends Context> = (request: Request, ctx: X) => Awaitable<Response>;

export type ResponseEffect = (r: Response) => Awaitable<Response>
export class EffectsList extends AppendOnlyList<ResponseEffect> {}

// /**
//  * @example
//  *   self.addEventListener('fetch', adapt(withCORS()(withContentNegotiation()((async () => {
//  *     return ok();
//  *   })))));
//  */
// export const adapt = (handler: Handler<Context>) => (event: FetchEvent) => handler(event.request, { event, effects: new AppendOnlyList() });

export * from './basics';
// export * from './content-negotiation';
export * from './cookies';
export * from './cors';
// export * from './session';