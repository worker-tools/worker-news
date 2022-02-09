import { DOMParser } from 'linkedom';

// Primitive support for 
// Problem: item?id=26520957
export function blockquotify(text: string) {
  const { protocol, host } = self.location;

  text = text.replace(/https?:\/\/news.ycombinator.com/g, `${protocol}//${host}`);
  text = text.replace(/https?:&#x2F;&#x2F;news.ycombinator.com/g, `${protocol}//${host}`);

  const doc = new DOMParser().parseFromString(text, 'text/html')
  for (const p of doc.querySelectorAll('p') as HTMLParagraphElement[]) {
    if (p.textContent?.startsWith('>')) {
      const bq = doc.createElement('blockquote')
      bq.textContent = p.textContent.substring(1);
      p.outerHTML = bq.outerHTML;
    }
    // Test: item?id=26514612, item?id=26545082
    if (p.textContent && /^[-*][^-*]/.test(p.textContent)) {
      const li = doc.createElement('li')
      li.textContent = p.textContent.substring(1);
      p.outerHTML = li.outerHTML;
    }
    // Test: item?id=30244534
    if (p.textContent && /^[-*]{3,}$/.test(p.textContent)) {
      p.outerHTML = `<hr/>`;
    }
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
    const aborted = signal.aborted 
      ? Promise.resolve() 
      : new Promise(res => signal.addEventListener('abort', res));
    while (await Promise.race([
      reader.read().then(x => !x.done), 
      aborted.then(() => false),
    ])) { /* noop */ }
  }
}
