import { Context, Handler } from "./index";

export type BasicsContext = { 
  headers: Headers, 
  url: URL, 
  method: string, 
  pathname: string, 
  searchParams: URLSearchParams,
};

export const withBasics = () => <X extends Context>(handler: Handler<X & BasicsContext>): Handler<X> => (request, ctx) => {
  const { headers } = request;
  const method = request.method;
  const url = new URL(request.url)
  const { pathname, searchParams } = url;
  return handler(request, { ...ctx, headers, method, url, pathname, searchParams })
}
