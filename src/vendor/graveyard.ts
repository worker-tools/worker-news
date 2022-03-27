import { ResolvablePromise } from "./resolvable-promise";
import { ExtendablePromise } from "./extendable-promise";
import { unsettle } from "./unsettle";

// function __graveyard<T extends unknown[], U>(f: (opts: { waitUntil: (f?: any) => void }, ...args: T) => Promise<U>) {
//   return async (...args: T) => {
//     const promise = new ResolvablePromise();
//     const graveyard = new ExtendablePromise(promise);
//     const result = await f({ waitUntil: graveyard.waitUntil.bind(graveyard) }, ...args)
//     promise.resolve(null);
//     await unsettle(graveyard);
//     return result;
//   }
// }
// const myAsyncFunc = __graveyard(async (graveyard, t: number, s?: string) => {
//   graveyard.waitUntil(new Promise((res) => setTimeout(res, t)))
//   return s ?? 'hello world';
// })
// const x = await myAsyncFunc(1000, 'hello');

async function __graveyard<U>(f: (opts: { waitUntil: (f?: any) => void }) => Promise<U>) {
  const promise = new ResolvablePromise();
  const graveyard = new ExtendablePromise(promise);
  const result = await f({ waitUntil: graveyard.waitUntil.bind(graveyard) })
  promise.resolve(true);
  await unsettle(graveyard);
  return result;
}

const timeout = (n: number) => new Promise(r => setTimeout(r, n));

function foo(x: number) {
  return __graveyard(async undertaker => {
      undertaker.waitUntil(timeout(1000).then(() => Promise.reject('Foo')))
      undertaker.waitUntil(timeout(1000).then(() => Promise.reject('Bar')))
      return x;
  })
}

console.log(await foo(2));

// function withGraveyard<T extends unknown[], U>() {
//   // return function (target: object, _: string, descriptor: Omit<PropertyDescriptor, 'value'> & { value: Function }) {
//   return function (target: object, _: string, descriptor: TypedPropertyDescriptor<(opts: { waitUntil: (f?: any) => void }, ...args: T) => Promise<U>>) {
//     const method = descriptor.value!;
//     const newDesc = descriptor as unknown as TypedPropertyDescriptor<(...args: T) => Promise<U>>
//     newDesc.value = __graveyard(method);
//     return newDesc;
//   };
// }
class X {
  // @withGraveyard<unknown, void>()
  foo(x: number) {
    return __graveyard(async undertaker => {
      undertaker.waitUntil(timeout(1000))
      return x;
    })
  }
}

console.log(await new X().foo(3))

// const timeout = (n: number) => new Promise(r => setTimeout(r, n));
// self.addEventListener('unhandledrejection', ev => { 
//   ev.preventDefault();
//   console.warn('Unhandled rejection', ev) 
// })
// ;(async () => {
//   try {
//   const p = timeout(1000).then(() => Promise.reject(new Error('Uncaught?')));
//   await timeout(2000);
//   await p;
//   } catch (err) {
//     console.log('Got \'em')
//   }
// })();
type Awaitable<T> = T | PromiseLike<T>
Promise.race

const NEVER = new Promise<undefined>(() => {});

function raceNonNullish<T>(iterable: Iterable<Awaitable<T | undefined | null>>): Promise<T | undefined> {
  const ps = [...iterable].map(_ => Promise.resolve(_));
  let { length } = ps;
  const continueIfNullish = (value: T | undefined | null) => value != null
    ? value
    : --length > 0
      ? NEVER
      : undefined;
  const candidates = ps.map(p => p.then(continueIfNullish))
  return Promise.race(candidates);
}

Object.values({ a: 3 })
