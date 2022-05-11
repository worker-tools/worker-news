declare global {
  // const DEBUG: boolean;
  // const SW: boolean;

  interface Window {
    readonly DEBUG: boolean;
    readonly SW: boolean;
    readonly caches: CacheStorage;
  }

  interface Navigator {
    readonly onLine?: boolean;
    readonly userAgent?: string;
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
    keys(): Promise<string[]>;
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
