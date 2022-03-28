import { Router, Method, RouteOptions } from 'tiny-request-router';

import { Awaitable } from '../common-types';
import { Context, EffectsList } from '../middleware2/index';

export type BaseMiddleware<X extends Context> = (x: Awaitable<Context>) => Awaitable<X>
export type Middleware<RX extends Context, X extends Context> = (x: Awaitable<RX>) => Awaitable<X>
export type Handler<X extends Context> = (request: Request, ctx: X) => Awaitable<Response>;

type Kind = 'all' | 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

export function executeEffects(effects: EffectsList, response: Awaitable<Response>) {
  return effects.reduceRight(async (response, effect) => effect(await response), response);
}

export class WorkerRouter<RX extends Context = Context> {
  #router = new Router<(ctx: { request: Request, waitUntil: (f: any) => void }) => Awaitable<Response>>()
  #middleware: BaseMiddleware<RX>

  constructor(middleware: BaseMiddleware<RX> = _ => _ as RX) {
    this.#middleware = middleware;
  }

  #registerRoute<X extends RX>(
    method: Kind,
    argsN: number,
    path: string,
    middlewareOrHandler: Middleware<RX, X> | Handler<X>,
    handlerOrOptions?: Handler<X> | RouteOptions,
    options?: RouteOptions,
  ) {
    if ((argsN === 2 && typeof handlerOrOptions === 'undefined') || (argsN === 3 && typeof handlerOrOptions === 'object')) {
      const handler = middlewareOrHandler as Handler<RX>
      this.#router[method](path, async event => {
        const effects = new EffectsList();
        const response = handler(event.request, await this.#middleware({ 
          ...event,
          effects,
        }));
        return executeEffects(effects, response)
      }, handlerOrOptions);
    } else {
      const middleware = middlewareOrHandler as Middleware<RX, X>;
      const handler = handlerOrOptions as Handler<X>;
      this.#router[method](path, async event => {
        const effects = new EffectsList();
        const response = handler(event.request, await middleware(this.#middleware({ 
          ...event,
          effects,
        })));
        return executeEffects(effects, response)
      }, options);
    }
    return this;
  }

  /** Add a route that matches any method. */
  all<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  all<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  all<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('all', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the GET method. */
  get<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  get<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  get<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('get', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the POST method. */
  post<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  post<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  post<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('post', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the PUT method. */
  put<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  put<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  put<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('put', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the PATCH method. */
  patch<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  patch<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  patch<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('patch', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the DELETE method. */
  delete<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  delete<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  delete<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('delete', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the HEAD method. */
  head<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  head<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  head<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('head', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the OPTIONS method. */
  options<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  options<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  options<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.#registerRoute('options', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }

  get fetchEventCallback() {
    return (ev: FetchEvent) => {
      const url = new URL(ev.request.url);
      const match = this.#router.match(<Method>ev.request.method, url.pathname)
      if (match) {
        ev.respondWith(match.handler({ request: ev.request, waitUntil: ev.waitUntil.bind(ev) }));
      }
      throw Error('TODO')
    }
  }

  get fetchModuleExport() {
    // TODO: do something about env?
    return async (request: Request, env: any, ctx: any): Promise<Response> => {
      const url = new URL(request.url);
      const match = this.#router.match(<Method>request.method, url.pathname)
      if (match) {
        return match.handler({ request, waitUntil: ctx.waitUntil.bind(ctx) });
      }
      throw Error('TODO')
    }
  }

  get serveCallback() {
    // TODO: do something about connInfo?
    return async (request: Request, connInfo: any): Promise<Response> => {
      const url = new URL(request.url);
      const match = this.#router.match(<Method>request.method, url.pathname)
      if (match) {
        return match.handler({ request, waitUntil: _f => {} });
      }
      throw Error('TODO')
    }
  }
}

// const effectsMap = new WeakMap<Event, ResponseEffect[]>()

// export function registerEffect(event: Event, ...effects: ResponseEffect[]) {
//   effectsMap.get(event)?.push(...effects) ?? effectsMap.set(event, effects)
// }

// export function executeEffectsFor(event: FetchEvent, response: Awaitable<Response>) {
//   const effects = effectsMap.get(event) ?? []
//   const res = effects.reduceRight(async (response, effect) => effect(await response), response);
//   effectsMap.delete(event);
//   return res;
// }
