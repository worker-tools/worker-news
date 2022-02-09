import { Awaitable } from "../common-types";
import { BaseContext } from "./index";

export type WithBasics = { 
  headers: Headers, 
  url: URL, 
  method: string, 
  pathname: string, 
  searchParams: URLSearchParams,
};
export type WithBasicsHandler<X extends BaseContext> = (ctx: X & WithBasics) => Awaitable<Response>;

export const withBasics = () => <X extends BaseContext>(handler: WithBasicsHandler<X>) => (ctx: X) => {
  const { request } = ctx.event;
  const { headers } = request;
  const method = request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  return handler({ ...ctx, headers, method, url, pathname, searchParams })
}