import { DumbHTMLRewriter } from './dumb-html-rewriter';

if (!('HTMLRewriter' in self)) {
  Object.defineProperty(self, 'HTMLRewriter', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: DumbHTMLRewriter
  })
}