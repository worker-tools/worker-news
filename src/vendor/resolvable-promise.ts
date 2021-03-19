// TypeScript, ugh..
export type Resolver<T> = (value: T | PromiseLike<T>) => void
export type Rejecter = (reason?: any) => void
export type ResolvablePromise<T> = Promise<T> & { resolve: Resolver<T>, reject: Rejecter };
export function resolvablePromise<T>(): ResolvablePromise<T> {
  let resolve!: Resolver<T>;
  let reject!: Rejecter;
  const p: Partial<ResolvablePromise<T>> = new Promise((res, rej) => { resolve = res; reject = rej; })
  p.resolve = resolve;
  p.reject = reject;
  return p as ResolvablePromise<T>;
}
