import { 
  CookieStore, CookieListItem, CookieInit, CookieList, CookieStoreDeleteOptions, CookieStoreGetOptions
} from "@worker-tools/request-cookie-store";
import { ExtendablePromise } from '../extendable-promise';

export class AllSettledCookieStore implements CookieStore {
  #promise: ExtendablePromise<void>;
  #store: CookieStore;
  constructor(store: CookieStore) {
    this.#store = store;
    this.#promise = new ExtendablePromise<void>();
  }
  get(name?: string): Promise<CookieListItem | null>;
  get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
  get(options?: any): Promise<CookieListItem | null> {
    return this.#store.get(options);
  }
  getAll(name?: string): Promise<CookieList>;
  getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
  getAll(options?: any): Promise<CookieList> {
    return this.#store.getAll(options);
  }
  set(name: string, value: string): Promise<void>;
  set(options: CookieInit): Promise<void>;
  set(name: any, value?: any): Promise<void> {
    const res = this.#store.set(name, value);
    this.#promise.waitUntil(res);
    return res;
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
}
