declare global {
  const DEBUG: boolean;
  const SW: boolean;

  interface Window {
    readonly DEBUG: boolean;
    readonly SW: boolean;
    readonly WORKER_LOCATION: string;
    readonly caches: CacheStorage;
  }

  interface Navigator {
    // @ts-ignore: avoid error i.c. Deno implements this property
    readonly onLine?: boolean;
  }

  abstract class Cache {
    delete(
      request: Request | string,
      options?: CacheQueryOptions
    ): Promise<boolean>;
    match(
      request: Request | string,
      options?: CacheQueryOptions
    ): Promise<Response | undefined>;
    put(request: Request | string, response: Response): Promise<void>;
    /** @deprecated SW only */
    keys(): Promise<string[]>;
    /** @deprecated SW only */
    addAll(requests: (Request | string)[]): Promise<void>;
  }

  interface CacheQueryOptions {
    ignoreMethod?: boolean;
  }

  abstract class CacheStorage {
    open(cacheName: string): Promise<Cache>;
    match(
      request: Request | string,
      options?: CacheQueryOptions
    ): Promise<Response | undefined>;
    readonly default: Cache;
  }
}

export {}
