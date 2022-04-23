/** Quick n' dirty CustomEvent polyfill for Worker Environments. */

self.navigator = self.navigator || { userAgent: 'Cloudflare Workers' }

if (!('CustomEvent' in self)) {
  class CustomEvent<T = any> extends Event {
    readonly detail: T; 
    constructor(event: string, { detail }: CustomEventInit<T>) { 
      super(event); 
      this.detail = detail as T;
    }
  }

  Object.defineProperty(self, 'CustomEvent', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: CustomEvent
  });
}