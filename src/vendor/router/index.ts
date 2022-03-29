// import { Router, Method } from 'tiny-request-router';
import type { URLPatternComponentResult, URLPatternInit, URLPatternResult } from 'urlpattern-polyfill/dist/url-pattern.interfaces';
import { URLPattern } from 'urlpattern-polyfill';

import { Awaitable } from '../common-types';
import { Context, EffectsList, executeEffects } from '../middleware2/index';
import { AppendOnlyList } from '../append-only-list';
import { Method, MethodWildcard } from 'tiny-request-router';
import { internalServerError, notFound } from '@worker-tools/response-creators';

export type BaseMiddleware<X extends Context> = (x: Awaitable<Context>) => Awaitable<X>
export type Middleware<RX extends Context, X extends Context> = (x: Awaitable<RX>) => Awaitable<X>
export type Handler<X extends Context> = (request: Request, ctx: X) => Awaitable<Response>;

export type Kind = Method | MethodWildcard

type RouteHandler = (x: Omit<Context, 'effects'>) => Awaitable<Response> 

export interface Route {
  method: Kind
  pattern: URLPattern
  handler: RouteHandler
}

export class WorkerRouter<RX extends Context = Context> {
  #middleware: BaseMiddleware<RX>
  #routes = new AppendOnlyList<Route>();

  constructor(middleware: BaseMiddleware<RX> = _ => _ as RX) {
    this.#middleware = middleware;
  }

  async #match(ctx: Omit<Context, 'effects' | 'match'>): Promise<Response> {
    const result = this.#matchRoutes(ctx.request)
    if (result) {
      try {
        const [handler, match] = result;
        return await handler(Object.assign(ctx, { match }));
      } catch (err) {
        if (err instanceof Response) {
          return err; // TODO: customization??
        } else {
          // TODO: throw err, logging ?????????????
          return internalServerError();
        }
      }
    }
    return notFound();
  }

  #matchRoutes(request: Request): readonly [RouteHandler, URLPatternComponentResult] | null {
    for (const { method, pattern, handler } of this.#routes) {
      // Skip immediately if method doesn't match
      if (method !== request.method.toUpperCase() && method !== 'ALL') continue

      if (['*', '/*'].includes(pattern.pathname)) {
        const url = new URL(request.url)
        return [handler, {
          input: url.pathname,
          groups: { '0': url.pathname.substring(pattern.pathname.length - 1) },
        }]
      }
      // if (route.path === '/' && route.options.end === false) {
      //   return { ...route, params: {} }
      // }
      // If method matches try to match path regexp
      
      const match = pattern.exec(request.url)
      if (!match) continue
      return [handler, match.pathname] as const
    }
    return null
  }

  #pushBasicRoute(
    method: Kind,
    pattern: URLPattern,
    handler: Handler<RX>,
  ) {
    this.#routes.push({
      method,
      pattern,
      handler: async event => {
        const effects = new EffectsList();
        const response = handler(event.request, await this.#middleware({
          ...event,
          effects,
        }));
        return executeEffects(effects, response)
      }
      // options,
    })
  }

  #pushRoute<X extends RX>(
    method: Kind,
    pattern: URLPattern,
    middleware: Middleware<RX, X>,
    handler: Handler<X>,
  ) {
    this.#routes.push({
      method,
      pattern,
      handler: async event => {
        const effects = new EffectsList();
        const response = handler(event.request, await middleware(this.#middleware({
          ...event,
          effects,
        })));
        return executeEffects(effects, response)
      },
      // options,
    })
  }

  #registerRoute<X extends RX>(
    method: Kind,
    argsN: number,
    pathname: string,
    middlewareOrHandlerOrRouter: Middleware<RX, X> | Handler<X> | WorkerRouter<X>,
    handler?: Handler<X>,
  ): this {
    const pattern = new URLPattern({ pathname })
    if (middlewareOrHandlerOrRouter instanceof WorkerRouter) {
      // TODO: delegate to other router...
    } else {
      if (argsN === 2) {
        const handler = middlewareOrHandlerOrRouter as Handler<RX>
        this.#pushBasicRoute(method, pattern, handler)
      } else if (argsN === 3) {
        const middleware = middlewareOrHandlerOrRouter as Middleware<RX, X>
        this.#pushRoute(method, pattern, middleware, handler!)
      } else {
        throw Error(`Router '${method.toLowerCase()}' called with invalid number of arguments`)
      }
    }
    return this;
  }

  /** Add a route that matches any method. */
  all<X extends RX>(path: string, router: WorkerRouter<X>): this;
  all<X extends RX>(path: string, handler: Handler<X>): this;
  all<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  all<X extends RX>(path: string, middlewareOrHandlerOrRouter: Middleware<RX, X> | Handler<X> | WorkerRouter<X>, handler?: Handler<X>): this {
    return this.#registerRoute('ALL', arguments.length, path, middlewareOrHandlerOrRouter, handler);
  }
  /** Add a route that matches the GET method. */
  get<X extends RX>(pathname: string, handler: Handler<X>): this;
  get<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  get<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('GET', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the POST method. */
  post<X extends RX>(pathname: string, handler: Handler<X>): this;
  post<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  post<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('POST', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the PUT method. */
  put<X extends RX>(pathname: string, handler: Handler<X>): this;
  put<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  put<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('PUT', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the PATCH method. */
  patch<X extends RX>(pathname: string, handler: Handler<X>): this;
  patch<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  patch<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('PATCH', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the DELETE method. */
  delete<X extends RX>(pathname: string, handler: Handler<X>): this;
  delete<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  delete<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('DELETE', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the HEAD method. */
  head<X extends RX>(pathname: string, handler: Handler<X>): this;
  head<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  head<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('HEAD', arguments.length, pathname, middlewareOrHandler, handler);
  }
  /** Add a route that matches the OPTIONS method. */
  options<X extends RX>(pathname: string, handler: Handler<X>): this;
  options<X extends RX>(pathname: string, middleware: Middleware<RX, X>, handler: Handler<X>): this;
  options<X extends RX>(pathname: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handler?: Handler<X>): this {
    return this.#registerRoute('OPTIONS', arguments.length, pathname, middlewareOrHandler, handler);
  }

  get handler(): Handler<RX> {
    return (request, ctx) => {
      return this.#match({ request, waitUntil: ctx.waitUntil.bind(ctx) })
    }
  }

  get fetchEventCallback() {
    return (ev: FetchEvent) => {
      ev.respondWith(this.#match({ request: ev.request, waitUntil: ev.waitUntil.bind(ev) }));
    }
  }

  get fetchModuleExport() {
    // TODO: do something about env?
    return async (request: Request, env: any, ctx: any): Promise<Response> => {
      return this.#match({ request, env, waitUntil: ctx.waitUntil.bind(ctx) } as any);
    }
  }

  get serveCallback() {
    return async (request: Request, connInfo: any): Promise<Response> => {
      return this.#match({ request, connInfo, waitUntil: (_f: any) => {} } as any);
    }
  }
}
