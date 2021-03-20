// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

type Resolver<T> = (value: T | PromiseLike<T>) => void;
type Rejecter = (reason?: any) => void;

function newAbortError() {
  return new DOMException('eventTargetToAsyncGen was aborted via AbortSignal', 'AbortError');
}

/**
 * Taken from: https://github.com/nodejs/node/blob/master/lib/events.js#L774
 * 
 * Changes:
 * - Changed to `EventTarget` only.
 */
export function eventTargetToAsyncGen<E extends Event>(
  target: EventTarget, 
  event: string, 
  options?: { signal?: AbortSignal },
): AsyncGenerator<E, void, unknown> {

  const signal = options?.signal;
  if (signal?.aborted)
    throw newAbortError();

  const unconsumedEvents: E[] = [];
  const unconsumedPromises: { resolve: Resolver<IteratorResult<E, void>>, reject: Rejecter }[] = [];
  let error: any = null;
  let finished = false;

  const iterator = {
    next(): Promise<IteratorResult<E, void>> {
      // First, we consume all unread events
      const value = unconsumedEvents.shift();
      if (value) {
        return Promise.resolve({ value, done: false });
      }

      // Then we error, if an error happened
      // This happens one time if at all, because after 'error'
      // we stop listening
      if (error) {
        const p = Promise.reject(error);
        // Only the first element errors
        error = null;
        return p;
      }

      // If the iterator is finished, resolve to done
      if (finished) {
        return Promise.resolve({ value: undefined, done: true });
      }

      // Wait until an event happens
      return new Promise((resolve, reject) => {
        unconsumedPromises.push({ resolve, reject });
      });
    },

    return(): Promise<IteratorResult<E, void>> {
      target.removeEventListener(event, eventHandler);
      target.removeEventListener('error', errorHandler);

      if (signal) {
        signal.removeEventListener('abort', abortListener);
      }

      finished = true;

      for (const promise of unconsumedPromises) {
        promise.resolve({ value: undefined, done: true });
      }

      return Promise.resolve({ value: undefined, done: true });
    },

    throw(err: any): Promise<IteratorResult<E, void>> {
      // if (!err || !(err instanceof Error)) {
      //   throw new ERR_INVALID_ARG_TYPE('EventEmitter.AsyncIterator',
      //                                  'Error', err);
      // }
      error = err;
      target.removeEventListener(event, eventHandler);
      target.removeEventListener('error', errorHandler);

      // ??
      return Promise.reject(err)
    },

    [Symbol.asyncIterator]() {
      return this;
    }
  };

  target.addEventListener(event, eventHandler);
  if (event !== 'error') {
    target.addEventListener('error', errorHandler);
  }

  if (signal) {
    signal.addEventListener('abort', abortListener, { once: true });
  }

  return iterator;

  function abortListener() {
    errorHandler(newAbortError());
  }

  function eventHandler(ev: Event) {
    const promise = unconsumedPromises.shift();
    if (promise) {
      promise.resolve({ value: ev as E, done: false }); // FIXME
    } else {
      unconsumedEvents.push(ev as E); // FIXME
    }
  }

  function errorHandler(err: any) {
    finished = true;

    const toError = unconsumedPromises.shift();

    if (toError) {
      toError.reject(err);
    } else {
      // The next time we call next()
      error = err;
    }

    iterator.return();
  }
}
