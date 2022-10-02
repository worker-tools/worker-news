declare global {
  const DEBUG: boolean;
  const SW: boolean;

  interface Window {
    readonly DEBUG: boolean;
    readonly SW: boolean;
    readonly WORKER_LOCATION: string;
  }

  interface Navigator {
    readonly onLine?: boolean;
  }

  interface CacheStorage {
    readonly default: Cache;
    match(
      request: RequestInfo | URL,
      options?: CacheQueryOptions,
    ): Promise<Response | undefined>;
  }

  interface CacheQueryOptions {
    cacheControl: string
  }

  interface Cache {
    keys(): Promise<string[]>
    addAll(requests: (string|Request)[]): Promise<void>
  }
}

export {}
