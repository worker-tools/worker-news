import { ok } from "@worker-tools/response-creators";
import { Context, Handler, adapt, withCookies, BasicsContext } from ".";
import { CookiesContext, SessionContext } from "../_middleware2";
import { withBasics } from "./basics";
import { withSignedCookies } from "./cookies";
import { withCORS } from "./cors";
import { withCookieSession, SessionContextDeps } from './session'

declare function pipe<A extends any[], B, C>   (ab: (...a: A) => B, bc: (b: B) => C                 ): (a: A) => C;
declare function pipe<A extends any[], B, C, D>(ab: (...a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D;

const ccc = withCookies()
const scc = withSignedCookies({ secret: 'foo' })
const bsc = withBasics();
const sss = withCookieSession({ defaultSession: {} })
const crs = withCORS();

type MW<CTX extends Context = Context, EXT extends CTX = CTX> = (x: Handler<EXT>) => Handler<CTX>
// type MMW<U, W> = (x: Handler<U>) => Handler<W>

interface FooContext extends Context {
  foo: string;
}

type Ctx<T extends MW<CTX, EXT>, CTX extends Context = Context, EXT extends CTX = CTX, > = Parameters<ReturnType<T>   >[1]
type Ext<T extends MW<CTX, EXT>, CTX extends Context = Context, EXT extends CTX = CTX, > = Parameters<Parameters<T>[0]>[1]
type Ext2<CTX extends Context = Context, EXT extends CTX = CTX, T extends MW<CTX, EXT> = MW<CTX, EXT>> = Parameters<Parameters<T>[0]>[1]
type MyCtx<T extends (args: any) => any> = Parameters<ReturnType<T>>[1]
type MyExt<T extends (args: any) => any> = Parameters<Parameters<T>[0]>[1]
type A = Ext<typeof ccc>
type B = Ext<typeof bsc>
type C = A & B;

type AnyMW = (args: any) => any

type X = Ctx<typeof ccc>
type Y = Ctx<typeof bsc>
// type Z = Ext<typeof sss, SessionContextDeps, SessionContextDeps & SessionContext<Record<any, any>>>
// type ZXXX = Ext<, Context, FooContext>

type TF = MW<FooContext, FooContext & BasicsContext>
type TFE = MyExt<TF>
type TFFC = MyCtx<typeof sss>
type TFFF = MyExt<typeof sss>

const ffff = bsc((req, x: FooContext) => ok(x.foo))

// type From<T extends Middleware<any, any>> = 

declare function combine<A extends AnyMW, B extends AnyMW>(a: A, b: B): MyCtx<A>
declare function combine<A extends MW, B extends MW, C extends MW>(a: A, b: B, c: C): MW<MyCtx<A>, MyExt<A> & MyExt<B> & MyExt<C>>
declare function combine<A extends MW, B extends MW, C extends MW, D extends MW>(a: A, b: B, c: C, d: D): MW<MyCtx<A>, MyExt<A> & MyExt<B> & MyExt<C> & MyExt<D>>

// declare function combine<A extends Middleware, B extends Middleware>(a: A, b: B): (_: Ctx<A>) => (_: Ctx<B>) => Ext<B>

const request = new Request('/')
const event = new FetchEvent('fetch', {} as any)
const args = [request, { event }] as const

const y = adapt(bsc(ccc(sss((q, ctx) => ok()))))

// const x = combine(sss, bsc, ccc, scc)
const x = combine(sss, ccc)

// x((re, { cookies, url }) => ok())


declare function combineX<
A extends Context, 
B extends A, 
C extends B,
MA extends MW<A, B>,
MB extends MW<B, C>,
>(z: MA, y: MB): (_: Handler<C>) => Handler<A>

const xx = combineX(scc, ccc)