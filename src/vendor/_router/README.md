# Worker Router
A router for Worker Environments such as Cloudflare Workers and Deno Deploy.

Worker Router is inspired by previous tools such as `tiny-request-router` and `itty-router`. 
It improves on them by providing a more comprehensive middleware suite with better support for type inference. 
Specifically, the goal is to infer types based on usage so no explicit typing is necessary. 

```js
import { WorkersRouter } from '@worker-tools/router'
import { basics, unsignedCookies } from '@worker-tools/middleware'
import { ok } from '@worker-tools/response-creators'

const router = new WorkersRouter(basics())
  .get('/item', unsignedCookies(), (req, { userAgent, cookies }) => ok())
```

In this example, your editor can infer the types and documentation for
`userAgent` provided by the `basics` middleware for the entire router, and
`cookies` provided by the `unsignedCookies` middleware for this route only.

Worker Router middlewares are just functions and can be mixed and matched using standard tools from functional programming.
For convenience, worker router provides the `combine` utility to combine multiple middlewares into one:

```js
const myReusableMW = combine(
  basics(), 
  cookies(), 
  cookieSession({ defaultSession: { foo: '' } })
);
const router = new WorkersRouter(myReusableMW)
```

<br>

**This router makes use of `URLPattern` for path matching.**



