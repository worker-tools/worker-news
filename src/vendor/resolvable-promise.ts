export type Resolve<T> = (value: T | PromiseLike<T>) => void;
export type Reject = (reason?: any) => void;
export type Executor<T> = PromiseLike<T> | ((resolve: Resolve<T>, reject: Reject) => void);

/** @deprecated */
export function resolvablePromise<T>() {
  return new ResolvablePromise<T>();
}

export class ResolvablePromise<T> implements Promise<T> {
  #promise: Promise<T>;
  #resolve?: Resolve<T>;
  #reject?: Reject;
  #settled = false;
  constructor(executor?: Executor<T> | null) {
    // super(r => r(<any>void 0));
    this.#promise = new Promise((res, rej) => {
      this.#resolve = res;
      this.#reject = rej;
      if (executor == null) return;
      if (typeof executor === 'function') executor(res, rej);
      else if (typeof executor.then === 'function') executor.then(res, rej);
    });
  }
  resolve(x: T) {
    if (this.#resolve) this.#resolve(x)
    else throw Error('Cannot resolve ResolvablePromise that was initialized with an executor.');
  }
  reject(reason?: any) {
    if (this.#reject) this.#reject(reason)
    else throw Error('Cannot reject ResolvablePromise that was initialized with an executor.');
  }
  get settled() { return this.#settled }
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
    return this.#promise.then(onfulfilled, onrejected);
  }
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult> {
    return this.#promise.catch(onrejected);
  }
  finally(onfinally?: (() => void) | null): Promise<T> {
    this.#settled = true;
    return this.#promise.finally(onfinally);
  }
  get [Symbol.toStringTag]() { return 'ResolvablePromise' };
}

// Vanilla JS inheritance
// ResolvablePromise.prototype = Object.create(Promise.prototype);
// ResolvablePromise.prototype.constructor = ResolvablePromise;