import { BaseContext, Handler } from "./index";

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

const ORIGIN = 'Origin';
const REQUEST_METHOD = 'Access-Control-Request-Method';
const REQUEST_HEADERS = 'Access-Control-Request-Headers';
const ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
const ALLOW_METHODS = 'Access-Control-Allow-Methods';
const ALLOW_HEADERS = 'Access-Control-Allow-Headers';
const ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials';

interface CORSOptions {
  origin?: string | URL,
  methods?: Method[],
  headers?: string[],
  credentials?: boolean;
}

/**
 * A CORS middleware that gives clients exactly the permissions they ask for.
 */
export const withCORS = (opt: CORSOptions = {}) => <X extends BaseContext>(handler: Handler<X>) => async (ctx: X): Promise<Response> => {
  const req = ctx.event.request;
  const res = await handler(ctx);

  const origin = typeof opt.origin === 'string' 
    ? new URL(opt.origin) 
    : opt.origin;

  if (!res.headers.has(ALLOW_ORIGIN)) 
    res.headers.set(ALLOW_ORIGIN, origin?.origin ?? <string>req.headers.get(ORIGIN));

  if (!res.headers.has(ALLOW_METHODS) && req.headers.has(REQUEST_METHOD)) 
    res.headers.set(ALLOW_METHODS, opt.methods?.join() ?? <string>req.headers.get(REQUEST_METHOD));

  if (!res.headers.has(ALLOW_HEADERS) && req.headers.has(REQUEST_HEADERS))
    res.headers.set(ALLOW_HEADERS, opt.headers?.join() ?? <string>req.headers.get(REQUEST_HEADERS));

  if (!res.headers.has(ALLOW_CREDENTIALS) && opt.credentials) 
    res.headers.set(ALLOW_CREDENTIALS, 'true');

  return res;
}
