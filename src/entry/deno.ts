// @ts-ignore
import { serve } from "https://deno.land/std@0.136.0/http/server.ts";
// import '@worker-tools/deno-fetch-event-adapter/listen.ts';
import './html-rewriter-polyfill-deno'
import { router } from '../routes/index';
serve(router.serveCallback, { port: Number(self.location.port ?? 8787) });