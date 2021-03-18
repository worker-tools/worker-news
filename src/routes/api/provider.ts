import * as DOM from './DOM'
import * as REST from './REST'

export const stories = 'Deno' in self
    ? REST.stories
    : DOM.stories;

export const comments = 'Deno' in self
    ? REST.comments
    : DOM.comments;

export * from './interface';
