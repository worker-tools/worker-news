// @ts-ignore
import { serve } from "https://deno.land/std@0.136.0/http/server.ts";
import './html-rewriter-polyfill-deno'
import { router } from '../routes/index';
await serve(router.serveCallback);