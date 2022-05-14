export async function* aMap<A, B>(as: AsyncIterable<A>, f: (a: A) => B) {
  for await (const a of as) yield f(a)
}

export async function* aTake<T>(n: number, xs: AsyncIterable<T>): AsyncIterableIterator<T> {
  let i = 0;
  for await (const x of xs) {
    if (++i > n) break;
    yield x;
  }
}

export type ForAwaitable<T> = Iterable<T> | AsyncIterable<T>;
export async function* aConcat<A, B>(as: ForAwaitable<A>, bs: ForAwaitable<B>): AsyncIterableIterator<A | B> {
  for await (const a of as) yield a;
  for await (const b of bs) yield b;
}

export const isIterable = <T>(x: unknown): x is Iterable<T> =>
  x != null && typeof x === 'object' && Symbol.iterator in x

export const isAsyncIterable = <T>(x: unknown): x is AsyncIterable<T> =>
  x != null && typeof x === 'object' && Symbol.asyncIterator in x

export type ForAwaitIterator<T> = AsyncIterator<T> | Iterator<T>
export type ForAwaitIterableIterator<T> = AsyncIterableIterator<T> | IterableIterator<T>

// const toIterableIterator = <T>(iter: Iterator<T>): IterableIterator<T> => ({ 
//   ...iter, 
//   [Symbol.iterator]() { return this } 
// })

// const toAsyncIterableIterator = <T>(iter: AsyncIterator<T>): AsyncIterableIterator<T> => ({ 
//   ...iter, 
//   [Symbol.asyncIterator]() { return this } 
// })

const iterableIterator = <T>(iterable: Iterable<T>): IterableIterator<T> => {
  const iter = iterable[Symbol.iterator]()
  return {
    ...iter, 
    [Symbol.iterator]() { return this } 
  }
}
const aIterableIterator = <T>(iterable: AsyncIterable<T>): AsyncIterableIterator<T> => {
  const iter = iterable[Symbol.asyncIterator]()
  return {
    ...iter, 
    [Symbol.asyncIterator]() { return this } 
  }
}

export const getForAwaitIterator = <T>(iterable: ForAwaitable<T>): ForAwaitIterableIterator<T> => isAsyncIterable(iterable)
  ? aIterableIterator(iterable)
  : iterableIterator(iterable)
