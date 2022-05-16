// deno-lint-ignore-file

// Based on node.js event utility: <https://github.com/nodejs/node/blob/5b59e14dafb43b907e711cb418bb9c302bce2890/lib/events.js#L1017>
// Copyright Joyent, Inc. and other Node contributors.
// Licensed under the MIT license

type Resolver<T> = (value: T | PromiseLike<T>) => void;
type Rejecter = (reason?: any) => void;

function newAbortError() {
  return new DOMException('eventTargetToAsyncIter was aborted via AbortSignal', 'AbortError');
}

export interface AsyncQueueOptions<T> {
  /**
   * An abort signal to cancel async iteration.
   */
  signal?: AbortSignal,

  /**
   * TODO
   */
  underlyingSource?: UnderlyingSource<T>,
}

/**
 * A queue implementation that delivers values asynchronously. 
 * Useful for implementing various async iterable functionality.
 * 
 * Producers can provide values to the queue via `push`, while consumers can request them via `shift`.
 * Unlike regular JS arrays, `shift` returns a promise that resolves with the next value in the queue. 
 * If the queue is currently empty, the promise will resolve once a new value gets pushed into the queue.
 * Repeated calls to shift with an empty queue will deliver results in the order they have been requested.
 * 
 * The queue also implements the async iterable interface, meaning it can be used in a for-await loop:
 * 
 * ```
 * const q = new AsyncQueue()
 * q.push(1, 2, 3)
 * for await (const value of q) {
 *   // ...
 * }
 * ```
 */
export class AsyncQueue<T = any> implements AsyncIterableIterator<T>, ReadableStreamDefaultController<T> {
  #unconsumedValues: T[] = [];
  #unconsumedPromises: { resolve: Resolver<IteratorResult<T, void>>, reject: Rejecter }[] = [];
  #signal?: AbortSignal;
  #error?: any = null;
  #finished = false;
  #src?: UnderlyingSource<T>;

  /** @deprecated TODO */
  get desiredSize() { return 0 }

  constructor(options?: AsyncQueueOptions<T>) {
    const signal = options?.signal;
    if (signal?.aborted) throw newAbortError();
    if (signal) {
      signal.addEventListener('abort', this.#abortListener, { once: true });
    }
    this.#signal = signal
    this.#src = options?.underlyingSource;
    options?.underlyingSource?.start?.(this);
  }

  #errorHandler = (err: any) => {
    this.#finished = true;

    const toError = this.#unconsumedPromises.shift();

    if (toError) {
      toError.reject(err);
    } else {
      // The next time we call next()
      this.#error = err;
    }

    this.return();
  }

  #abortListener = () => {
    this.#errorHandler(newAbortError());
  }

  #push(value: T) {
    const promise = this.#unconsumedPromises.shift();
    if (promise) {
      promise.resolve({ value, done: false });
    } else {
      this.#unconsumedValues.push(value);
    }
  }

  // push(...items: T[]) {
  //   for (const item of items) this.#push(item)
  //   return this.length
  // }

  enqueue(item: T) {
    this.#push(item);
  }

  // async dequeue(): Promise<T | undefined> {
  //   const { done, value } = await this.next();
  //   return done ? undefined : value;
  // }

  next(): Promise<IteratorResult<T, void>> {
    // First, we consume all unread events
    const value = this.#unconsumedValues.shift();
    if (value) {
      return Promise.resolve({ value, done: false });
    }

    // Then we error, if an error happened
    // This happens one time if at all, because after 'error'
    // we stop listening
    if (this.#error) {
      const p = Promise.reject(this.#error);
      // Only the first element errors
      this.#error = null;
      return p;
    }

    // If the iterator is finished, resolve to done
    if (this.#finished) {
      return Promise.resolve({ value: undefined, done: true });
    }

    // Wait until an event happens
    return new Promise((resolve, reject) => {
      this.#unconsumedPromises.push({ resolve, reject });

      // FIXME: should it keep calling pull until the size is 1 again??
      // Compare with streams spec
      if (typeof this.#src?.pull === 'function') (async () => {
        while (this.size < 0) await this.#src?.pull?.(this)
      })();
    });
  }

  /**
   * Get the length of the queue. 
   * _Note that the length can be negative_, meaning more values have been requested than have been provided.
   */
  get size() {
    return this.#unconsumedValues.length - this.#unconsumedPromises.length
  }

  return(): Promise<IteratorResult<T, void>> {
    if (this.#signal) {
      this.#signal.removeEventListener('abort', this.#abortListener);
    }

    this.#finished = true;

    for (const promise of this.#unconsumedPromises) {
      promise.resolve({ value: undefined, done: true });
    }

    return Promise.resolve({ value: undefined, done: true });
  }

  close(): void {
    this.return()
  }

  throw(err: any): Promise<IteratorResult<T, void>> {
    this.#error = err;
    return Promise.reject(err)
  }

  error(err: any): void {
    this.throw(err)
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<T> {
    return this;
  }
}
