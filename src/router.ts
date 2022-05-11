import { basics, combine, contentTypes } from 'https://ghuc.cc/worker-tools/middleware/index.ts';
import { WorkerRouter, Method } from 'https://ghuc.cc/worker-tools/router/index.ts';

export interface RouteArgs {
  request: Request;
  url: URL;
  pathname: string;
  searchParams: URLSearchParams
  headers: Headers;
  method: Method;
  params: { [key: string]: string | undefined };
  type: string;
  handled: Promise<void>;
  waitUntil: (f?: any) => void
}

export const mw = combine(basics(), contentTypes(['text/html', 'application/json']))
export const router = new WorkerRouter(x => x, { fatal: false })
router.addEventListener('error', ({ error, message }) => console.warn('err', message))

