
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

export async function slurp<T>(xs: AsyncIterable<T>): Promise<T[]> {
  let ret: T[] = [];
  for await (const x of xs) ret.push(x);
  return ret;
}
