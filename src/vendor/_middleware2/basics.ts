import { Method } from "tiny-request-router";
import { Awaitable } from "../common-types";
import { Context } from "./index";

export interface BasicsContext { 
  request: Request,
  headers: Headers, 
  url: URL, 
  method: Method, 
  pathname: string, 
  searchParams: URLSearchParams,
  userAgent: string,
  params: { [key: string]: string }
}

// const mk = (s: URL) => {
//   const { dirname, filename } = s.pathname.match(/^(?<dirname>.*)\/(?<filename>.*)$/) ?? { dirname: '', filename: '' };
//   return [dirname, filename]
// }

export const basics = () => async <X extends Context>(ax: Awaitable<X>): Promise<X & BasicsContext> => {
  const x = await ax;
  const { request, match } = x;
  const { headers } = request;
  const method = <Method>request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  const userAgent = headers.get('user-agent') ?? '';
  const params = match.groups;
  return Object.assign(x, { headers, method, url, pathname, searchParams, userAgent, params })
}
