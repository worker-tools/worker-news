import { getAssetFromKV, mapRequestToAsset, Options } from '@cloudflare/kv-asset-handler'
import { internalServerError, notFound } from '@worker-tools/response-creators'

// addEventListener('fetch', event => {
//   event.waitUntil(handleEvent(event))
// })

export async function handler(req: Request, event: { request: Request, waitUntil: (_f: any) => void }) {
  const options: Partial<Options> = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (self.DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: false,
      }
    }

    let page: Response;
    if ('__STATIC_CONTENT' in self) {
      page = await getAssetFromKV(event, options)
    } else if ('Deno' in globalThis) {
      const url = new URL(event.request.url);
      const assetHref = new URL(`../../public${url.pathname}`, import.meta.url).href;
      console.log(assetHref)
      page = await fetch(assetHref)
    } else { // Service Worker
      page = (await self.caches.match(event.request)) ?? await fetch(event.request)
    }

    // allow headers to be altered
    const response = new Response(page.body, page)

    if (req.url.endsWith('.js')) response.headers.set('content-type', 'text/javascript')
    if (req.url.endsWith('.wasm')) response.headers.set('content-type', 'application/wasm')
    if (req.url.endsWith('.css')) response.headers.set('content-type', 'text/css')
    if (req.url.endsWith('.html')) response.headers.set('content-type', 'text/html')
    if (req.url.endsWith('.webmanifest')) response.headers.set('content-type', 'application/manifest+json')

    // response.headers.set('X-XSS-Protection', '1; mode=block')
    // response.headers.set('X-Content-Type-Options', 'nosniff')
    // response.headers.set('X-Frame-Options', 'DENY')
    // response.headers.set('Referrer-Policy', 'unsafe-url')
    // response.headers.set('Feature-Policy', 'none')

    return response

  } catch (e) {
    console.error(e)
    // if an error is thrown try to serve the asset at 404.html
    // if (!DEBUG) {
    //   console.warn(e)
    //   try {
    //     let notFoundResponse = await getAssetFromKV(event, {
    //       mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
    //     })

    //     return notFound(notFoundResponse.body!, notFoundResponse)
    //   } catch (e) {}
    // }

    return internalServerError(e instanceof Error ? e.message : e as string);
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix: string | RegExp) {
  return (request: Request) => {
    // compute the default (e.g. / -> index.html)
    const defaultAssetKey = mapRequestToAsset(request)
    const url = new URL(defaultAssetKey.url)

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/')

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}
