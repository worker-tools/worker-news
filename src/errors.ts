import * as re from '@worker-tools/response-creators';
import { Awaitable } from './vendor/common-types';

export function handleError(err: any) {
  if (err instanceof Response) return err;
  if (err instanceof NotFoundError) return re.notFound(err.message);
  if (err instanceof PaymentRequiredError) return re.paymentRequired(err.message);
  if (err instanceof ConflictError) return re.conflict(err.message);
  if (err instanceof BadRequestError) return re.badRequest(err.message);
  if (DEBUG) throw err;
  return re.internalServerError();
}

export const errors = <T extends { event: FetchEvent }>(handler: (args: T) => Awaitable<Response>) => async (args: T): Promise<Response> => {
  try {
    return await handler(args);
  } catch (err) {
    return handleError(err);
  }
}

export class NotFoundError extends Error {}
export class PaymentRequiredError extends Error {}
export class ConflictError extends Error {}
export class BadRequestError extends Error {}
