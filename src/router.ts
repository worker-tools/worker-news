import { WorkerRouter } from '@worker-tools/router';
import { contentNegotiation } from '@worker-tools/middleware'
import { ok } from '@worker-tools/response-creators';
import { Router, Method, Params } from 'tiny-request-router';

export interface RouteArgs {
  request: Request;
  url: URL;
  pathname: string;
  searchParams: URLSearchParams
  headers: Headers;
  method: Method;
  params: Params;
}

// export type RHandler = (args: RouteArgs) => Awaitable<Response>;

// export const router = new Router<RHandler>();
export const router = new WorkerRouter();

// hnRouter.get('/foobar', addCookies, async (req, { cookies }) => {
//   cookies.get('foobar')
//   return ok(req.body!)
// })

// const newRouter = new Router<(args: FetchEvent) => Awaitable<Response>>();
// // newRouter.get('/console',
// //   withBasics(
// //     withCookies(
// //       withSignedCookies({ secret: 'foobar' },
// //         withCORS({ origin: '*' },
// //           withContentNegotiation(<const>{
// //             types: ['hello/world', 'foo/bar'],
// //             accepts: ['hello/world', 'foo/bar'],
// //           },
// //             ctx => {
// //               console.log(ctx.url)
// //               console.log(ctx.searchParams)
// //               console.log(ctx.cookies)
// //               console.log(ctx.cookieStore)
// //               console.log(ctx.signedCookies)
// //               console.log(ctx.signedCookieStore)
// //               console.log(ctx.type)
// //               return new Response('console.log')
// //             }))))))

// const basics = withBasics();
// const cookies = withCookies();
// const cors = withCORS()
// const sessionX = withStorageSession<{ x: number }>({ storage: null as any });
// // newRouter.get('/hello', adapt(({ event }) => ok('Hello World')))
// newRouter.get('/basic', adapt(basics((req, { url }) => ok('Hello World' + url.pathname))))
// newRouter.get('/basic', adapt(cookies(basics((req, { url }) => ok('Hello World' + url.pathname)))))
// newRouter.get('/basic', adapt(cookies(sessionX(basics((req, { url, session, cookies }) => ok('Hello World' + url.pathname))))))
// // newRouter.get('/cookie', adapt(basics(cookies(sessionX(cors((req, { url, cookies, session }) => ok('Hello World' + cookies.get('hello'))))))))

// const xxx = adapt(basics(cookies(sessionX(cors((req, { url, cookies, session }) => ok('Hello World' + cookies.get('hello')))))));

// const fnx = adapt(basics(cookies(({ cookies, url, event }) => ok('Hello World' + cookies.get('hello')))))
// const fnx = (handler: (r: Request, x: Context & BasicsContext & CookiesContext) => Awaitable<Response>) => adapt(basics(cookies(handler)))
// newRouter.get('/fnx', fnx((req, { url, cookies }) => ok('aadf')))

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
// type Func<TArgs extends any[], TOut> = (...args: TArgs) => TOut;
// type UnaryFunction<TIn, TOut> = Func<[TIn], TOut>;

// function pipe<TIn extends any[], TOut>(f0: Func<TIn, TOut>): Func<TIn, TOut>;
// function pipe<TIn extends any[], T1, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, TOut>): Func<TIn, TOut>;
// function pipe<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
// function pipe(...args: any): any { }

// export type HandlerFunc<X extends Context> = Func<[Request, X], Awaitable<Response>>
// type AResponse = Awaitable<Response>

// function mwc<TI, TO>(
//   f0: UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>
// ): UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>;
// function mwc<TI, T1, TO>(
//   f0: UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, T1], AResponse>>,
//   f1: UnaryFunction<Func<[Request, T1], AResponse>, Func<[Request, TO], AResponse>>,
// ): UnaryFunction<Func<[Request, TI], AResponse>, Func<[Request, TO], AResponse>>;
// // function mwc<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
// function mwc(...args: any): any { }

// function combine<TIn extends TOut, TOut extends Context>(f0: UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>): UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>;
// function combine<TIn extends T1, T1 extends TOut, TOut extends Context>(f0: UnaryFunction<HandlerFunc<TIn>, HandlerFunc<T1>>, f1: UnaryFunction<HandlerFunc<T1>, HandlerFunc<TOut>>): UnaryFunction<HandlerFunc<TIn>, HandlerFunc<TOut>>;
// // function combine<TIn extends UnaryFunction<Handler<Context>, Handler<Context>>, T1 extends TIn, TOut extends T1>(f0: UnaryFunction<TIn, T1>, f1: UnaryFunction<T1, TOut>): UnaryFunction<TIn, TOut>;
// // function combine<TIn extends any[], T1, T2, TOut>(f0: Func<TIn, T1>, f1: UnaryFunction<T1, T2>, f2: UnaryFunction<T2, TOut>): Func<TIn, TOut>;
// function combine(...args: any): any { }

// // const crs = withCORS()
// const bsc = withBasics()
// const ccc = withCookies()
// // const fn = combine<Context & BasicsContext & CookiesContext, BasicsContext & Context, Context>(ccc, bsc)
// // const fn = pipe(ccc, bsc)
// const fn = mwc(bsc, ccc)
//
// const hn = fn((req, { url }) => ok(''))

// hn(new Request(''), { event: new FetchEvent('fetch', null as any) })


// adapt(bsc(ccc((request, { cookies, url }) => ok(''))))

// adapt(ccc(bsc((req, { event, url, cookiesStore }) => ok())))
// adapt(bsc(ccc((req, { event, url, cookies }) => ok())))


// export type ResponseEffect = (r: Response) => Awaitable<Response>
// const effectsMap = new WeakMap<Event, ResponseEffect[]>()
// export function registerEffect(event: Event, ...effects: ResponseEffect[]) {
//   effectsMap.get(event)?.push(...effects) ?? effectsMap.set(event, effects)
// }
// function executeEffectsFor(event: FetchEvent, response: Awaitable<Response>) {
//   const effects = effectsMap.get(event) ?? []
//   const r = effects.reduceRight(async (response, effect) => {
//     return effect(await response)
//   }, response);
//   effectsMap.delete(event);
//   return r;
// }


// const enrich = <X extends Context>(fn: (x: Context) => X, handler: (x: X) => Awaitable<Response>) => (event: FetchEvent) => {
//   return handler(fn({ event }))
// }

/// ----

// const addSessionX = addCookieSession<XSession>({ defaultSession: { x: -1 } })

// type XSession = { x: number }
// type YSession = { y: number }

// const acceptJSON = addContentNegotiation(<const>{ types: ['application/json'], accepts: ['application/json'] })
// const acceptENAndDE = addContentNegotiation(<const>{ languages: ['en', 'de'] })

// const baseMW = combine(addBasics, addCookies, acceptJSON)
// const myReusableMW = combine(addCookies, addCookieSession({ defaultSession: { user: '' } }))

// const itemRouter = new WorkerRouter(combine(baseMW, myReusableMW))
//   .get('/item/:id', (req, { cookies }) => ok())

// .all('/item*', itemRouter)

const myJSON = contentNegotiation({ types: ['application/json', 'text/html'], accepts: ['application/json'] })
const betterRouter = new WorkerRouter()
  .get('/index', myJSON, (_, { type, accepted }) => ok())

//   .get('/foo', combine(addSessionX, addCookieSession<YSession>({})), (request, { url, cookies, cookieStore, session }) => {
//     return ok('')
//   })
//   .patch('/foobar/:id', (req, { cookies, cookieStore }) => ok(cookies.update(cookieStore).toString()))
//   .all('/bar', (request, { url }) => ok(url.toString()))
//   .post('/office', combine(
//     myReusableMW,
//     addSignedCookies({ secret: 'password123' }),
//     addEncryptedCookies({ secret: 'foobar' })
//   ),
//     (request, { session, signedCookies, signedCookieStore, encryptedCookieStore }) => {
//       return ok('Yayy')
//     })
//   .post('/party', combine(myReusableMW, addCORS(), acceptENAndDE), (request, { session, cookieStore, cookies, type, accepted, language, effects }) => {
//     cookieStore.set('foo', 'bar')
//     return ok()
//   })
//   .post('/party', combine(myReusableMW, addCORS(), acceptENAndDE), myHandler)
//   .options('/foo', x => {
//     return ok(x.method)
//   })

// const myMW = combine(baseMW, myReusableMW, addCORS(), acceptENAndDE)
// // type MYMW = Awaited<ReturnType<typeof myMW>>;

// // export type ContextOf<X extends ((...args: any) => any) | WorkerRouter<any>> = X extends (...args: any) => any
// //   ? Awaited<ReturnType<X>> 
// //   : X extends WorkerRouter<infer RX>
// //     ? RX
// //     : never
// export type ContextOf<X extends ((...args: any) => any)> = X extends (...args: any) => any ? Awaited<ReturnType<X>> : never


// // type BetterRouterType = ContextOf<typeof betterRouter>
// // type MYMW = ContextOf<typeof myMW>
// // type LOL = BetterRouterType & MYMW

// async function myHandler(request: Request, { session, cookieStore, cookies, type, accepted, language, effects }: ContextOf<typeof myMW>) {
//   return ok('')
// }

// // handlerX(({ url, cookies }) => ok('hello' + session.x))

// // const fny = pipe(adapt, basics, cookies)

// // addEventListener('fetch', betterRouter.handle)
