import { HTMLRewriter } from 'https://deno.land/x/html_rewriter/index.ts'
(<any>self).HTMLRewriter = HTMLRewriter;

declare global {
  interface Window {
    HTMLRewriter: typeof HTMLRewriter;
  }
}

// Trigger WASM initialization
new HTMLRewriter()