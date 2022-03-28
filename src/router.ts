import { ok } from '@worker-tools/response-creators';
import { Router, Method, Params, RouteOptions } from 'tiny-request-router';
import { Awaitable } from './vendor/common-types';
import {
  adapt,
  Context,
  Handler,
  BasicsContext, 
  withBasics, 
  withContentNegotiation, 
  CookiesContext, 
  withCookies, 
  withCORS, 
  withStorageSession, 
  withSignedCookies, 
  SessionContext, 
  CookieSessionOptions, 
  StorageSessionOptions, 
  SessionContextDeps, 
  CORSOptions, 
  ContentNegotiationOptions, 
  ContentNegotiationResults, 
  CookiesOptions, 
  SignedCookiesContext, 
  EncryptedCookiesContext,
  BasicsHandler
} from './vendor/middleware';

export interface RouteArgs {
  event: FetchEvent;
  request: Request;
  url: URL;
  pathname: string;
  searchParams: URLSearchParams
  headers: Headers;
  method: Method;
  params: Params;
}

export type RHandler = (args: RouteArgs) => Awaitable<Response>;

export const router = new Router<RHandler>();

const newRouter = new Router<(args: FetchEvent) => Awaitable<Response>>();
// newRouter.get('/console',
//   withBasics(
//     withCookies(
//       withSignedCookies({ secret: 'foobar' },
//         withCORS({ origin: '*' },
//           withContentNegotiation(<const>{
//             types: ['hello/world', 'foo/bar'],
//             accepts: ['hello/world', 'foo/bar'],
//           },
//             ctx => {
//               console.log(ctx.url)
//               console.log(ctx.searchParams)
//               console.log(ctx.cookies)
//               console.log(ctx.cookieStore)
//               console.log(ctx.signedCookies)
//               console.log(ctx.signedCookieStore)
//               console.log(ctx.type)
//               return new Response('console.log')
//             }))))))

const basics = withBasics();
const cookies = withCookies();
const cors = withCORS()
const sessionX = withStorageSession<{ x: number }>({ storage: null as any });
// newRouter.get('/hello', adapt(({ event }) => ok('Hello World')))
newRouter.get('/basic', adapt(basics((req, { url }) => ok('Hello World' + url.pathname))))
newRouter.get('/basic', adapt(cookies(basics((req, { url }) => ok('Hello World' + url.pathname)))))
newRouter.get('/basic', adapt(cookies(sessionX(basics((req, { url, session, cookies }) => ok('Hello World' + url.pathname))))))
// newRouter.get('/cookie', adapt(basics(cookies(sessionX(cors((req, { url, cookies, session }) => ok('Hello World' + cookies.get('hello'))))))))

const xxx = adapt(basics(cookies(sessionX(cors((req, { url, cookies, session }) => ok('Hello World' + cookies.get('hello')))))));

// const fnx = adapt(basics(cookies(({ cookies, url, event }) => ok('Hello World' + cookies.get('hello')))))
const fnx = (handler: (r: Request, x: Context & BasicsContext & CookiesContext) => Awaitable<Response>) => adapt(basics(cookies(handler)))

newRouter.get('/fnx', fnx((req, { url, cookies }) => ok('aadf')))

// import { compose, pipeline, pipelineUnary } from 'ts-pipe-compose';

// const fnz = pipelineUnary(basics, adapt)
// newRouter.get('/fnz', fnz(({ url, searchParams }) => ok()));

// newRouter.get('/console', ctx => {
//   console.log(ctx.url)
//   console.log(ctx.searchParams)
//   console.log(ctx.cookies)
//   console.log(ctx.cookieStore)
//   console.log(ctx.signedCookies)
//   console.log(ctx.signedCookieStore)
//   console.log(ctx.type)
//   return new Response('console.log')
// } |> withBasics(%)
//   |> withCookies(%)
//   |> withSignedCookies({ secret: 'foobar' }, %)
//   |> withCORS({ origin: '*' }, %)
//   |> withContentNegotiation(<const>{
//     types: ['hello/world', 'foo/bar'],
//     accepts: ['hello/world', 'foo/bar'],
//   }, %)
//   |> with...
// ) 
// function compose<T1, T2 extends T1, T3 extends T2>(
//   f : (x : T2) => T3,
//   g : (x : T1) => T2
// ) : (x : T1) => T3
// function compose<T1, T2 extends T1, T3 extends T2, T4 extends T3>(
//   f : (x : T3) => T4,
//   g : (x : T2) => T3,
//   h : (x : T1) => T2
// ) : (x : T1) => T4
// function compose<T1, T2, T3, T4, T5>(
//   f : (x : T4) => T5,
//   g : (x : T3) => T4,
//   h : (x : T2) => T3,
//   k : (x : T1) => T2
// ) : (x : T1) => T5
// function compose(...args: any[]): any {}
// import { compose, pipe } from 'ts-functional-pipe';

// interface IPerson { name: string }
// const mkPerson = (name: string): IPerson => ({ name });
// const addLength = <P extends IPerson>(p: P) => Object.assign(p, { length: p.name.length })
// const addFoo = <P extends IPerson>(p: P) => Object.assign(p, { foo: p.name + 'foo' })
// const addBar = <P extends IPerson>(p: P) => Object.assign(p, { bar: p.name + 'bar' })
// const expected = addBar(addFoo(addLength(mkPerson('John'))))
// const observed = compose(addBar, addFoo)(mkPerson('John'))

// const fn = pipe(addBar, addFoo, addLength)
// const x = fn({ name: 'john' })
type Func<TArgs extends any[], TOut> = (...args: TArgs) => TOut;
type UnaryFunction<TIn, TOut> = Func<[TIn], TOut>;

function pipe<TIn extends any[], TOut>(f0: Func<TIn, TOut>): Func<TIn, TOut>;
function pipe<TIn extends any[], T1, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, TOut>): Func<TIn, TOut>;
function pipe<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
function pipe(...args: any): any { }

export type HandlerFunc<X extends Context> = Func<[Request, X], Awaitable<Response>>
type AResponse = Awaitable<Response>

function mwc<TI, TO>(
  f0: UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>
): UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>;
function mwc<TI, T1, TO>(
  f0: UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, T1], AResponse>>, 
  f1: UnaryFunction<Func<[Request, T1], AResponse>, Func<[Request, TO], AResponse>>,
): UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>;
// function mwc<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
function mwc(...args: any): any { }

// function combine<TIn extends TOut, TOut extends Context>(f0: UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>): UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>;
// function combine<TIn extends T1, T1 extends TOut, TOut extends Context>(f0: UnaryFunction<HandlerFunc<TIn>, HandlerFunc<T1>>, f1: UnaryFunction<HandlerFunc<T1>, HandlerFunc<TOut>>): UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>;
// // function combine<TIn extends UnaryFunction<Handler<Context>, Handler<Context>>, T1 extends TIn, TOut extends T1>(f0: UnaryFunction<TIn, T1>, f1: UnaryFunction<T1, TOut>): UnaryFunction<TIn, TOut>;
// // function combine<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
// function combine(...args: any): any { }

// const crs = withCORS()
const bsc = withBasics()
const ccc = withCookies()
// const fn = combine<Context & BasicsContext & CookiesContext, BasicsContext & Context, Context>(ccc, bsc)
// const fn = pipe(ccc, bsc)
const fn = mwc(bsc, ccc)

const hn = fn((req, { url }) => ok(''))

// hn(new Request(''), { event: new FetchEvent('fetch', null as any) })


adapt(bsc(ccc((request, { cookies, url }) => ok(''))))

// adapt(ccc(bsc((req, { event, url, cookiesStore }) => ok())))
// adapt(bsc(ccc((req, { event, url, cookies }) => ok())))

const handlerX = pipe(cookies, basics)





type ResponseEffect = (r: Response) => Awaitable<Response>
const effectsMap = new WeakMap<Event, ResponseEffect[]>()
function registerEffects(event: Event, ...effects: ResponseEffect[]) {
  effectsMap.set(event, [...effectsMap.get(event) ?? [], ...effects])
}


function addCookies<X extends Context>(x: X): X & CookiesContext;
function addCookies() { }

function addSignedCookies(opts: CookiesOptions): <X extends Context>(x: X) => X & SignedCookiesContext;
function addSignedCookies(opts: CookiesOptions) { return (x: any) => { } }

function addEncryptedCookies(opts: CookiesOptions): <X extends Context>(x: X) => X & EncryptedCookiesContext;
function addEncryptedCookies(opts: CookiesOptions) { return (x: any) => { } }

function addBasics<X extends Context>(x: X): X & BasicsContext;
function addBasics() { }

function addCookieSession<S>(opts: CookieSessionOptions<S>): <X extends SessionContextDeps>(x: X) => X & SessionContext<S>
function addCookieSession(opts: any) { return (x: any) => { } }

function addStorageSession<S>(opts: StorageSessionOptions<S>): <X extends SessionContextDeps>(x: X) => X & SessionContext<S>
function addStorageSession(opts: any) { return (x: any) => { } }

const addCORS = (opt: CORSOptions = {}) => <X extends Context>(x: X): X => {
  registerEffects(x.event, response => {
    response.headers.set('cors', 'true');
    return response;
  })
  return x;
}


function addContentNegotiation<
  CT extends readonly string[],
  CL extends readonly string[],
  CE extends readonly string[],
  CC extends readonly string[],
  AT extends readonly string[],
  AL extends readonly string[],
  AE extends readonly string[],
  AC extends readonly string[],
  >(opts?: ContentNegotiationOptions<CT, CL, CE, CC, AT, AL, AE, AC>): <X extends Context>(x: X) => X & ContentNegotiationResults<CT[number], CL[number], CE[number], CC[number], AT[number], AL[number], AE[number], AC[number]>;
function addContentNegotiation<
  CT extends readonly string[],
  CL extends readonly string[],
  CE extends readonly string[],
  CC extends readonly string[],
  AT extends readonly string[],
  AL extends readonly string[],
  AE extends readonly string[],
  AC extends readonly string[],
  >(opts: any) {
  return (x: any) => { }
}

// const enrich = <X extends Context>(fn: (x: Context) => X, handler: (x: X) => Awaitable<Response>) => (event: FetchEvent) => {
//   return handler(fn({ event }))
// }

const addSessionX = addCookieSession<XSession>({ defaultSession: { x: -1 } })

// type HandlerType<X extends Context> = (request: Request, x: X) => Awaitable<Response>
type RouterMiddleware<X extends Context> = (x: Context) => X
type Middleware<RX extends Context, X extends Context> = (x: RX) => X

type Kind = 'all' | 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

class WorkerRouter<RX extends Context> {
  private router = new Router<(ev: FetchEvent) => Awaitable<Response>>()
  private middleware: RouterMiddleware<RX>

  constructor(middleware: RouterMiddleware<RX>) {
    this.middleware = middleware;
  }

  get handle() {
    return async (ev: FetchEvent) => {
      const url = new URL(ev.request.url);
      const match = this.router.match(<Method>ev.request.method, url.pathname)
      if (match) {
        return ev.respondWith(match.handler(ev));
      }
      throw Error('TODO')
    }
  }

  private executeEffects(event: FetchEvent, response: Awaitable<Response>) {
    const effects = effectsMap.get(event) ?? []
    return effects.reduceRight(async (response, effect) => {
      return effect(await response)
    }, response);
  }

  private registerRoute<X extends RX>(method: Kind, argsN: number, path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions) {
    if ((argsN === 2 && typeof handlerOrOptions === 'undefined') || (argsN === 3 && typeof handlerOrOptions === 'object')) {
      const handler = middlewareOrHandler as Handler<RX>
      this.router[method](path, event => {
        const response = handler(event.request, this.middleware({ event }));
        return this.executeEffects(event, response);
      }, handlerOrOptions);
    } else {
      const middleware = middlewareOrHandler as Middleware<RX, X>;
      const handler = handlerOrOptions as Handler<X>;
      this.router[method](path, event => {
        const response = handler(event.request, middleware(this.middleware({ event })));
        return this.executeEffects(event, response);
      }, options);
    }
    return this;
  }

  /** Add a route that matches any method. */
  all<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  all<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  all<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('all', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the GET method. */
  get<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  get<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  get<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('get', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the POST method. */
  post<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  post<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  post<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('post', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the PUT method. */
  put<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  put<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  put<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('put', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the PATCH method. */
  patch<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  patch<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  patch<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('patch', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the DELETE method. */
  delete<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  delete<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  delete<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('delete', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the HEAD method. */
  head<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  head<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  head<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('head', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
  /** Add a route that matches the OPTIONS method. */
  options<X extends RX>(path: string, handler: Handler<X>, options?: RouteOptions): this;
  options<X extends RX>(path: string, middleware: Middleware<RX, X>, handler: Handler<X>, options?: RouteOptions): this;
  options<X extends RX>(path: string, middlewareOrHandler: Middleware<RX, X> | Handler<X>, handlerOrOptions?: Handler<X> | RouteOptions, options?: RouteOptions): this {
    return this.registerRoute('options', arguments.length, path, middlewareOrHandler, handlerOrOptions, options);
  }
}

type XSession = { x: number }
type YSession = { y: number }

const acceptJSON = addContentNegotiation(<const>{ types: ['application/json'], accepts: ['application/json'] })
const acceptENAndDE = addContentNegotiation(<const>{ languages: ['en', 'de'] })

const baseMW = pipe(addBasics, addCookies, acceptJSON)
const myReusableMW = pipe(addCookies, addCookieSession({ defaultSession: { user: '' } }))

const betterRouter = new WorkerRouter(baseMW)
  .get('/foo', pipe(addSessionX, addCookieSession<YSession>({})), (request, { event, url, cookies, cookieStore, session }) => {
    return ok('')
  })
  .patch('/foobar/:id', (req, { cookies, cookieStore }) => ok(cookies.update(cookieStore).toString()))
  .all('/bar', (request, { url }) => ok(url.toString()))
  .post('/office', pipe(myReusableMW, addSignedCookies({ secret: 'password123' }), addEncryptedCookies({ secret: 'foobar' })), (request, { session, signedCookies, signedCookieStore, encryptedCookieStore }) => ok())
  .post('/party', pipe(myReusableMW, addCORS(), acceptENAndDE), (request, { session, cookieStore, cookies, type, accepted, language }) => {
    cookieStore.set('foo', 'bar')
    return ok()
  })
  // .options('/foo', x => {

  // })

// handlerX(({ url, cookies }) => ok('hello' + session.x))

// const fny = pipe(adapt, basics, cookies)

// addEventListener('fetch', betterRouter.handle)
