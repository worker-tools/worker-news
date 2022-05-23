import { basics, combine, contentTypes, Context } from '@worker-tools/middleware';
import { WorkerRouter, Method } from '@worker-tools/router';

export const mw = combine(basics(), contentTypes(['text/html', 'application/json', '*/*']))

export type RouteArgs = Awaited<ReturnType<typeof mw>>

export const router = new WorkerRouter(x => x, { fatal: false })
router.addEventListener('error', ({ error, message }) => console.warn('err', message))

