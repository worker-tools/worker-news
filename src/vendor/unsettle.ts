declare global {
  class AggregateError extends Error {
    readonly errors: any[];
    constructor(errors: any[], message?: string)
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
class AggregateErrorPolyFill extends Error {
  errors: any[];
  constructor(errors: any[], name = '') {
    super(name);
    this.name = 'AggregateError';
    this.errors = errors;
  }
}

const AE = 'AggregateError' in globalThis ? AggregateError : AggregateErrorPolyFill

export const isFulfilled = <T>(r: PromiseSettledResult<T>): r is PromiseFulfilledResult<T> => {
  return r.status === 'fulfilled';
}
export const isRejected = <T>(r: PromiseSettledResult<T>): r is PromiseRejectedResult => {
  return r.status === 'rejected';
}

/**
 * Helper function that unwinds `Promise.allSettled`: 
 * Takes the promise returned and throws a `CombinedError` iff at least one promise settled with a rejection. 
 * Otherwise returns the list of fulfilled values.
 * @param allSettledPromise A promise returned by `Promise.allSettled`
 * @returns List of fulfilled values
 */
export const unsettle = async <T>(allSettledPromise: Promise<PromiseSettledResult<T>[]>): Promise<T[]> => {
  const rs = await allSettledPromise;
  if (rs.every(isFulfilled)) return rs.map(r => r.value)
  throw new AE(rs.filter(isRejected).map(r => r.reason), "One or more Promises in 'unsettle' were rejected"); 
}

// type Awaitable<T> = T | PromiseLike<T>;
// const NEVER = new Promise<undefined>(() => {});
// function raceNonNullish<T>(
//   iterable: Iterable<Awaitable<T | undefined | null>>
// ) {
//   const promises = [...iterable].map(_ => Promise.resolve(_));
//   let { length } = promises;
//   const continueIfNullish = (value: T | undefined | null) => value != null
//     ? value
//     : --length > 0
//       ? NEVER
//       : undefined;
//   const candidates = promises.map(p => p.then(continueIfNullish))
//   return Promise.race(candidates);
// }

// async function* raceAll<T>(
//   iterable: Iterable<Awaitable<T>>
// ) {
//   const promises = new Map([...iterable].map(async (p, i) => [i, await p] as const).entries());
//   for (const _ of promises) {
//     const [i, value] = await Promise.race(promises.values());
//     promises.delete(i);
//     yield value;
//   }
// }