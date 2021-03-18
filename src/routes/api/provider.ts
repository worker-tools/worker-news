import * as DOM from './dom-api'
import * as REST from './rest-api'

export const stories = 'Deno' in self
    ? REST.stories
    : DOM.stories;

export const comments = 'Deno' in self
    ? REST.comments
    : DOM.comments;

export * from './interface';
