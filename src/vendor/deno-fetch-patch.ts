// @ts-ignore
import { serve } from "https://deno.land/std/http/server.ts";
// @ts-ignore
import { readerFromStreamReader } from 'https://deno.land/std/io/streams.ts';
import { asyncIterableToStream } from 'whatwg-stream-to-async-iter';

function respond(req: any, { body, headers, status }: Response) {
  const reader = body?.getReader();
  const denoReader = reader && readerFromStreamReader(reader);
  req.respond({
    status,
    headers,
    body: denoReader,
  });
}

class DenoFetchEvent extends Event implements FetchEvent {
  #req: any;
  constructor(req: any) {
    super('fetch');
    this.#req = req;
  }
  get clientId(): string { return '' };
  get preloadResponse(): Promise<any> { return Promise.resolve() };
  get replacesClientId(): string { return '' };
  get request(): Request { 
    const req = this.#req;
    const info = new URL(req.url, location.origin).href;
    // @ts-ignore
    const body = asyncIterableToStream<Uint8Array>(Deno.iter(req.body))
    // console.log(info, body);
    return new Request(info, {
      method: req.method,
      headers: req.headers,
      body,
    });
  };
  get resultingClientId(): string { return '' };
  respondWith(r: Response | Promise<Response>): void {
    if (r instanceof Promise)
      r.then(r => respond(this.#req, r))
    else respond(this.#req, r);
  }
  passThroughOnException: () => void = () => {};
  waitUntil(_f: any): void {}
}

;(async () => {
  const s = serve({ port: Number(location.port) ?? 8000 });
  for await (const req of s) {
    self.dispatchEvent(new DenoFetchEvent(req));
  }
})();
