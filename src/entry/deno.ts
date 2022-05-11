import './globals.ts'
import './deno-def.ts'
import './html-rewriter-polyfill-deno.ts'
import { router } from '../routes/index.ts';
import { serve } from "https://deno.land/std@0.136.0/http/server.ts";
await serve(router.serveCallback);