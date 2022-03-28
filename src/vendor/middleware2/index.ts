import { AppendOnlyList } from "../append-only-list";
import { Awaitable } from "../common-types";

export { pipe as combine } from 'ts-functional-pipe';

export interface Context { 
  request: Request, 

  /** 
   * A list of effects (transforms?) applied to the `Response`. 
   * Middleware can add effects to the list, but user handlers should ignore it. 
   */
  effects: AppendOnlyList<ResponseEffect>, 

  /**
   * TODO
   */
  waitUntil: (f: any) => void
}
export type ResponseEffect = (r: Response) => Awaitable<Response>
export class EffectsList extends AppendOnlyList<ResponseEffect> {}

export * from './basics';
export * from './content-negotiation';
export * from './cookies';
export * from './cors';
export * from './session';