export * from './interface.ts';

import * as domAPI from './dom-api.ts';
import * as swAPI from './sw-api.ts';
import * as restAPI from './rest-api.ts';
import * as fireAPI from './firebase.ts';

export const api = SW === true 
  ? swAPI 
  : 'Deno' in self 
    ? fireAPI 
    : domAPI
