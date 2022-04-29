export * from './interface';

import * as domAPI from './dom-api';
import * as swAPI from './sw-api';
// export * from './rest-api';
// export * from './firebase';

export const stories = SW === true
  ? swAPI.stories
  : domAPI.stories;

export const comments = SW === true
  ? swAPI.comments
  : domAPI.comments;

export const user = SW === true 
  ? swAPI.user
  : domAPI.user;

export const threads = SW === true
  ? swAPI.threads
  : domAPI.threads;

