import { Router, Method, Params } from 'tiny-request-router';
import { Awaitable } from './vendor/common-types';

export interface RouteArgs {
  event: FetchEvent;
  request: Request;
  url: URL;
  pathname: string;
  searchParams: URLSearchParams
  headers: Headers;
  method: Method;
  params: Params;
}

export type Handler = (args: RouteArgs) => Awaitable<Response>;

export const router = new Router<Handler>();
