import { ResolvablePromise } from './resolvable-promise';

const queueMicrotask = typeof globalThis.queueMicrotask === "function"
  ? globalThis.queueMicrotask
  : (callback: VoidFunction) => Promise.resolve().then(callback).catch(e => setTimeout(() => { throw e }));

export class ExtendablePromise<T = unknown> /* extends Promise<T[]> */ implements Promise<PromiseSettledResult<T>[]> {
  #values: PromiseSettledResult<T>[] = [];
  #promise: ResolvablePromise<PromiseSettledResult<T>[]>;
  #numAdded = 0;
  #numSettled = 0;

  constructor(f?: T | PromiseLike<T>) {
    // super(r => r(undefined as any));
    this.#promise = new ResolvablePromise();
    this.waitUntil(f);
    // queueMicrotask(() => {
    //   if (this.#numAdded === 0) {
    //     this.#promise.resolve([]);
    //   }
    // });
  }

  #fulfill(i: number, value: T) {
    this.#values[i] = { status: 'fulfilled', value };
    if (++this.#numSettled === this.#numAdded) {
      this.#promise.resolve(this.#values);
    }
  };

  #reject(i: number, reason: any) {
    this.#values[i] = { status: 'rejected', reason };
    if (++this.#numSettled === this.#numAdded) {
      this.#promise.resolve(this.#values);
    }
  };

  waitUntil(f?: T | PromiseLike<T>) {
    if (this.#promise.settled) {
      throw new Error("Can't add promise to an ExtendablePromise that has already settled.");
    }
    if (f) {
      let i = ++this.#numAdded;
      Promise.resolve(f)
        .then(v => this.#fulfill(i, v))
        .catch(r => this.#reject(i, r))
    }
  };

  get settled() { return this.#promise.settled }

  then<TResult1 = PromiseSettledResult<T>[], TResult2 = never>(onfulfilled?: ((value: PromiseSettledResult<T>[]) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
    return this.#promise.then(onfulfilled, onrejected);
  }
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<PromiseSettledResult<T>[] | TResult> {
    return this.#promise.catch(onrejected);
  }
  finally(onfinally?: (() => void) | null): Promise<PromiseSettledResult<T>[]> {
    return this.#promise.finally(onfinally);
  }
  get [Symbol.toStringTag]() { return 'ExtendablePromise' }
}

// TODO: Not good for performance
// ExtendablePromise.prototype = Object.getPrototypeOf(Promise);

// export type Awaitable<T> = T | PromiseLike<T>
// const NEVER = new Promise<unknown>(() => { });
// export async function raceNonNullish<T>(iterable: Iterable<Awaitable<T | undefined | null>>) {
//   const ps = [...iterable].map(_ => Promise.resolve(_));
//   let { length } = ps;
//   const continueIfNullish = (value: T | undefined | null) => value != null
//     ? value
//     : --length > 0
//       ? NEVER
//       : undefined;
//   const candidates = ps.map(p => p.then(continueIfNullish))
//   return Promise.race(candidates);
// }

// export type ResolvablePromise<T> = Promise<T> & { resolve: Resolver<T>, reject: Rejecter }

// export function resolvablePromise<T>(): ResolvablePromise<T> {
//   let resolve!: Resolver<T>;
//   let reject!: Rejecter;
//   const p = new Promise<T>((r, j) => { resolve = r; reject = j });
//   return Object.assign(p, { resolve, reject })
// }

// export function withSettled<P extends Promise<T>, T>(p: P): P & { settled: boolean } {
//   const sp = p as P & { settled: boolean }
//   sp.settled = false;
//   p.finally(() => { sp.settled = true })
//   return sp;
// }

// export function resolvablePromise<T>(): ResolvablePromise<T> {
//   return new ResolvablePromise();
// }

async function* raceAll<T>(it: Iterable<Promise<T>>) {
  const promises = new Map([...it].map(async (p, i) => [i, await p] as const).entries());
  for (const _ of promises) {
    const [i, value] = await Promise.race(promises.values());
    promises.delete(i);
    yield value;
  }
};