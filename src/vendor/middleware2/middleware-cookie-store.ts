import { 
  CookieStore, CookieListItem, CookieInit, CookieList, CookieStoreDeleteOptions, CookieStoreGetOptions
} from "@worker-tools/request-cookie-store";
import { ExtendablePromise } from '../extendable-promise';
import { Cookies, cookiesFrom } from "./cookies";

function decodeCookieValue(item: CookieListItem): CookieListItem;
function decodeCookieValue(item: CookieListItem | null): CookieListItem | null;
function decodeCookieValue(item: CookieListItem | null) {
  if (item) {
    item.name = decodeURIComponent(item.name);
    item.value = decodeURIComponent(item.value);
  }
  return item;
}

/**
 * A more opinionated cookie store implementation that URI-encodes cookie values 
 * and provides a promise that that resolves when async operations associated with this store have settled.
 */
export class MiddlewareCookieStore implements CookieStore {
  #promise: ExtendablePromise<void>;
  #store: CookieStore;
  constructor(store: CookieStore) {
    this.#store = store;
    this.#promise = new ExtendablePromise<void>();
  }
  get(name?: string): Promise<CookieListItem | null>;
  get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
  async get(options?: any): Promise<CookieListItem | null> {
    return decodeCookieValue(await this.#store.get(options));
  }
  getAll(name?: string): Promise<CookieList>;
  getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
  async getAll(options?: any): Promise<CookieList> {
    return (await this.#store.getAll(options)).map(item => decodeCookieValue(item));
  }
  set(name: string, value: string): Promise<void>;
  set(options: CookieInit): Promise<void>;
  async set(name: string | CookieInit, value?: string): Promise<void> {
    if (typeof name === 'string' && typeof value === 'string') {
      const res = this.#store.set(encodeURIComponent(name), encodeURIComponent(value));
      this.#promise.waitUntil(res);
      return res;
    }
    throw Error('Overload not implemented')
  }
  delete(name: string): Promise<void>;
  delete(options: CookieStoreDeleteOptions): Promise<void>;
  delete(options: any): Promise<void> {
    const res = this.#store.delete(options)
    this.#promise.waitUntil(res);
    return res;
  }
  addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: any, callback: any, options?: any): void {
    this.#store.addEventListener(type, callback, options);
  }
  dispatchEvent(event: Event): boolean;
  dispatchEvent(event: any): boolean {
    return this.#store.dispatchEvent(event);
  }
  removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: any, callback: any, options?: any): void {
    this.#store.removeEventListener(type, callback, options);
  }
  get settled() { return this.#promise.settled }
  get allSettledPromise() { return this.#promise }

  /**
   * If you've made changes to the store and would like to access the current cookies as an object, 
   * it is provided as a promise here (TODO:)
   */
  get updatedCookies(): Promise<Cookies> {
    return cookiesFrom(this)
  }
}
