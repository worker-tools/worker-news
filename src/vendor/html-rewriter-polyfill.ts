import { ParseHTMLRewriter } from './parse-html-rewriter';

if (!('HTMLRewriter' in self)) {
  Object.defineProperty(self, 'HTMLRewriter', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: ParseHTMLRewriter
  })
}