import { Awaitable } from "../common-types";
import { Context } from "./index";

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

export const ORIGIN = 'Origin';
export const REQUEST_METHOD = 'Access-Control-Request-Method';
export const REQUEST_HEADERS = 'Access-Control-Request-Headers';
export const ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
export const ALLOW_METHODS = 'Access-Control-Allow-Methods';
export const ALLOW_HEADERS = 'Access-Control-Allow-Headers';
export const ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials';

export interface CORSOptions {
  origin?: string | URL,
  methods?: Method[],
  headers?: string[],
  credentials?: boolean;
}

/**
 * A CORS middleware that gives clients exactly the permissions they ask for.
 */
export const addCORS = (opt: CORSOptions = {}) => async <X extends Context>(ax: Awaitable<X>): Promise<X> => {
  const x = await ax;
  const req = x.request;
  x.effects.push(res => {
    const optOrigin = typeof opt.origin === 'string' 
      ? new URL(opt.origin) 
      : opt.origin;

    if (!res.headers.has(ALLOW_ORIGIN)) 
      res.headers.set(ALLOW_ORIGIN, optOrigin?.origin ?? <string>req.headers.get(ORIGIN));

    if (!res.headers.has(ALLOW_METHODS) && req.headers.has(REQUEST_METHOD)) 
      res.headers.set(ALLOW_METHODS, opt.methods?.join() ?? <string>req.headers.get(REQUEST_METHOD));

    if (!res.headers.has(ALLOW_HEADERS) && req.headers.has(REQUEST_HEADERS))
      res.headers.set(ALLOW_HEADERS, opt.headers?.join() ?? <string>req.headers.get(REQUEST_HEADERS));

    if (!res.headers.has(ALLOW_CREDENTIALS) && opt.credentials) 
      res.headers.set(ALLOW_CREDENTIALS, 'true');

    return res;
  })

  return x;
}
