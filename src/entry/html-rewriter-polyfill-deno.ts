// @ts-ignore
import { HTMLRewriter } from 'https://deno.land/x/html_rewriter/index.ts'
(<any>self).HTMLRewriter = HTMLRewriter;

// Trigger WASM initialization
new HTMLRewriter()