// @ts-ignore: worker location not defined in deno
class WorkerLocationPolyfill2 implements WorkerLocation {
  #url: URL;
  constructor(href: string) { this.#url = new URL(href) }
  get hash(): string { return '' }
  get host(): string { return this.#url.host }
  get hostname(): string { return this.#url.hostname }
  get href(): string { return this.#url.href }
  get origin(): string { return this.#url.origin }
  get pathname(): string { return '/' }
  get port(): string { return this.#url.port }
  get protocol(): string { return this.#url.protocol }
  get search(): string { return '' }
  toString(): string { return this.href }
}

const envLoc = ((<any>self).WORKER_LOCATION) ?? ((<any>self).process?.env?.WORKER_LOCATION)
export const location = self.location || new WorkerLocationPolyfill2(envLoc)
