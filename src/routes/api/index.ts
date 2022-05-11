export * from './interface.ts';

import * as domAPI from './dom-api.ts';
import * as swAPI from './sw-api.ts';
// import * as restAPI from './rest-api.ts';
// import * as fireAPI from './firebase.ts';

export const stories = self.SW === true
  ? swAPI.stories
  : domAPI.stories;

export const comments = self.SW === true
  ? swAPI.comments
  : domAPI.comments;

export const user = self.SW === true 
  ? swAPI.user
  : domAPI.user;

export const threads = self.SW === true
  ? swAPI.threads
  : domAPI.threads;

