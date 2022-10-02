import './globals.ts'
import './deno-globals.ts'
import '@worker-tools/html-rewriter/polyfill'
import { router } from '../routes/index.ts';
import { serve } from "https://deno.land/std@0.158.0/http/server.ts";
await serve(router.serveCallback);