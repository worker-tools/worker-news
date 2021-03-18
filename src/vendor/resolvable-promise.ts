// TypeScript, ugh..
export type Resolve<T> = (value: T | PromiseLike<T>) => void
export type Reject = (reason?: any) => void
export type ResolvablePromise<T> = Promise<T> & { resolve: Resolve<T>, reject: Reject };
export function resolvablePromise<T>(): ResolvablePromise<T> {
  let resolve!: Resolve<T>;
  let reject!: Reject;
  const p: Partial<ResolvablePromise<T>> = new Promise((res, rej) => { resolve = res; reject = rej; })
  p.resolve = resolve;
  p.reject = reject;
  return p as ResolvablePromise<T>;
}
