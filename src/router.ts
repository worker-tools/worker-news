import { WorkerRouter, Method } from '@worker-tools/router';

export interface RouteArgs {
  request: Request;
  url: URL;
  pathname: string;
  searchParams: URLSearchParams
  headers: Headers;
  method: Method;
  params: { [key: string]: string | undefined };
}

export const router = new WorkerRouter();

