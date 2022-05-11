import { HTMLRewriter as HTMLRewriterImpl } from 'https://deno.land/x/html_rewriter/index.ts'
(<any>self).HTMLRewriter = HTMLRewriterImpl;

declare global {
  const HTMLRewriter: typeof HTMLRewriterImpl
  interface Window {
    HTMLRewriter: typeof HTMLRewriterImpl;
  }
}

// Trigger WASM initialization
new HTMLRewriterImpl()