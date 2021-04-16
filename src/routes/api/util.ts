import { DOMParser } from 'linkedom';

// Primitive support for 
// Problem: item?id=26520957
export function blockquotify(text: string) {
  const doc = new DOMParser().parseFromString(text, 'text/html')
  for (const p of doc.querySelectorAll('p') as HTMLParagraphElement[]) {
    if (p.textContent?.startsWith('>')) {
      const bq = doc.createElement('blockquote')
      bq.innerHTML = p.innerHTML.substr(1);
      p.outerHTML = bq.outerHTML;
    }
    // Test: item?id=26514612, item?id=26545082
    // if (p.textContent?.startsWith('-') || p.textContent?.startsWith('*')) {
    //   const li = doc.createElement('li')
    //   li.innerHTML = p.innerHTML.substr(1);
    //   p.outerHTML = li.outerHTML;
    // }
  }
  for (const a of doc.querySelectorAll('a[href*="news.ycombinator.com"]') as HTMLAnchorElement[]) {
    const url = new URL(a.href);
    url.host = self.location.host;
    url.protocol = self.location.protocol;
    a.setAttribute('href', url.href);
  }
  return doc.toString();
}

/** 
 * Consumes a `Response` body while discarding all chunks. 
 * Useful for pulling data into `HTMLRewriter`. 
 */
export async function consume(r: Response, signal?: AbortSignal) {
  const reader = r.body!.getReader();
  if (!signal) {
    while (await reader.read().then(x => !x.done)) { /* noop */ }
  } else {
    const aborted = new Promise(res => signal.addEventListener('abort', res));
    while (await Promise.race([
      reader.read().then(x => !x.done), 
      aborted.then(() => false),
    ])) { /* noop */ }
  }
}
