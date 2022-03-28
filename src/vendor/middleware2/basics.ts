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
}

// const mk = (s: URL) => {
//   const { dirname, filename } = s.pathname.match(/^(?<dirname>.*)\/(?<filename>.*)$/) ?? { dirname: '', filename: '' };
//   return [dirname, filename]
// }

export async function addBasics<X extends Context>(ax: Awaitable<X>): Promise<X & BasicsContext> {
  const x = await ax;
  const { request } = x;
  const { headers } = request;
  const method = <Method>request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  const userAgent = headers.get('user-agent') ?? '';
  return Object.assign(x, { headers, method, url, pathname, searchParams, userAgent })
}
