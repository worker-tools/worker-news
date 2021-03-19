import * as DOM from './dom-api'
import * as REST from './rest-api'

// TODO: Make configurable
export const stories = DOM.stories
    // ? REST.stories
    // : DOM.stories;

// TODO: Make configurable
export const comments = DOM.comments
    // ? REST.comments
    // : DOM.comments;

export * from './interface';
