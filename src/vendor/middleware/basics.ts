import { Awaitable } from "../common-types";
import { Context, Handler } from "./index";

export type BasicsContext = { 
  headers: Headers, 
  url: URL, 
  method: string, 
  pathname: string, 
  searchParams: URLSearchParams,
};
export type BasicsHandler<X extends Context> = (ctx: X & BasicsContext) => Awaitable<Response>;

export const withBasics = () => <X extends Context>(handler: BasicsHandler<X>): Handler<X> => ctx => {
  const { request } = ctx.event;
  const { headers } = request;
  const method = request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  return handler({ ...ctx, headers, method, url, pathname, searchParams })
}