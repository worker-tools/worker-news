import * as DOM from './dom-api'
import * as REST from './rest-api'

// TODO: Make configurable
export const stories = DOM.stories
// export const stories = REST.stories

// TODO: Make configurable
export const comments = DOM.comments
// export const comments = REST.comments

// export const user = DOM.user
export const user = REST.user

export * from './interface';
