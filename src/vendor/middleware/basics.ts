import { Awaitable } from "../common-types";
import { Base } from "./index";

export type WithBasics = { 
  headers: Headers, 
  url: URL, 
  method: string, 
  pathname: string, 
  searchParams: URLSearchParams,
};
export type WithBasicsHandler<X extends Base> = (ctx: X & WithBasics) => Awaitable<Response>;

export const withBasics = () => <X extends Base>(handler: WithBasicsHandler<X>) => (ctx: X) => {
  const { request } = ctx.event;
  const { headers } = request;
  const method = request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  return handler({ ...ctx, headers, method, url, pathname, searchParams })
}