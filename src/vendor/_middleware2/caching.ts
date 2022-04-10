import type { Temporal } from '@js-temporal/polyfill'
import { Awaitable } from "../common-types";
import { Context } from "./index";

export type CacheControl = 'no-cache' | 'no-store' | 'public' | 'private' | string;

export interface CacheOptions {
  cacheControl?: CacheControl,
  maxAge?: number | Temporal.Duration,
  mustRevalidate?: boolean,
  immutable?: boolean,
}


/**
 * A CORS middleware that gives clients exactly the permissions they ask for.
 */
export const caching = (opt: CacheOptions = {}) => async <X extends Context>(ax: Awaitable<X>): Promise<X> => {
  const x = await ax;
  const req = x.request;

  x.effects.push(res => {
    res.headers.set('cache-control', opt.cacheControl ?? 'no-cache')

    if (typeof opt.maxAge === 'number') {
      if (opt.maxAge > 31536000) console.warn(`Provided maxAge appears to be too large. Values >1 year (31536000) are not supported by browsers. Or perhaps you meant ${opt.maxAge / 1000}? maxAge is defined in seconds not milliseconds!`)
      res.headers.append('cache-control', `max-age=${opt.maxAge}`)
    } else if (opt.maxAge) {
      res.headers.append('cache-control', `max-age=${opt.maxAge.total({ 
        unit: 'second', 
        relativeTo: '1970-01-01', // annoying...
      })}`)
    }

    if (opt.mustRevalidate) {
      res.headers.append('cache-control', 'must-revalidate')
    }

    if (opt.immutable) {
      res.headers.append('cache-control', 'immutable')
    }

    return res;
  })

  return x;
}

