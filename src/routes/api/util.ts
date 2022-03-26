import { DOMParser } from 'linkedom';
import type { TreeWalker } from 'linkedom/types/interface/tree-walker';
import type { Node } from 'linkedom/types/interface/node';
import { unescape } from 'html-escaper';

import type { HTMLRewriter as HR, Element } from 'html-rewriter-wasm';
import { Text } from 'linkedom/types/interface/text';

const TEXT_NODE = 3;
const SHOW_TEXT = 4;

export function* treeWalkerToIter(walker: TreeWalker): IterableIterator<Node> {
  let node; while (node = walker.nextNode()) yield node;
}

// Primitive support for 
// Problem: item?id=26520957, item?id=30283264
export async function blockquotify(text: string) {
  const { protocol, host } = self.location;

  // const resp1 = new Response(text);
  // // const resp2 = resp1.clone();

  // const rewriter = h2r(new HTMLRewriter())
  //   .on('a[href^="http:&#x2F;&#x2F;news.ycombinator.com"], a[href^="https:&#x2F;&#x2F;news.ycombinator.com"]', {
  //     element(a) {
  //       const href = a.getAttribute('href')!
  //         .replace(/https?:&#x2F;&#x2F;news.ycombinator.com/g, `${protocol}//${host}`);
  //       a.setAttribute('href', href)
  //     },
  //   })
  //   .on('p', {
  //     element(el) {
  //     },
  //     text(chunk) {
  //       const text = chunk.text;
  //       let match;
  //       if (text.startsWith('&gt;')) {
  //         const bq = `<blockquote><span class="sr-only">&gt;</span>${text.substring(4)}</blockquote>`
  //         chunk.replace(bq, { html: true })
  //       }
  //       else if (match = /^([-*])[^-*]/.exec(text)) {
  //         const li = `<li><span class="sr-only">${match[1]}</span>${text.substring(1)}</li>`
  //         chunk.replace(li, { html: true })
  //       }
  //       else if (match = /^([-*]{3,})$/.exec(text)) {
  //         const hr = `<hr/><span class="sr-only">${match[1]}</span>`
  //         chunk.replace(hr, { html: true })
  //       }
  //     }
  //   })

  // return await r2h(rewriter)
  //   .transform(resp1)
  //   .text()

  const doc = new DOMParser().parseFromString(text, 'text/html')
  let match;
  for (const p of doc.querySelectorAll('p')) {
    for (const a of p.querySelectorAll('a[href^="http://news.ycombinator.com"], a[href^="https://news.ycombinator.com"]')) {
      const href = a.getAttribute('href')!
        .replace(/https?:\/\/news.ycombinator.com/g, `${protocol}//${host}`);
      a.setAttribute('href', href)
    }

    // Test nested: http://localhost:8787/item?id=30297007
    // Wrong: http://localhost:8787/item?id=30405883
    if (match = /^([|>])/.exec(p.textContent.trim())) {
      const bq = doc.createElement('blockquote');
      bq.innerHTML = p.innerHTML;
      for (const nd of treeWalkerToIter(doc.createTreeWalker(bq, SHOW_TEXT))) {
        if (/^([|>])/.test(nd.textContent.trim())) {
          nd.textContent = nd.textContent.trim().substring(1); 
          break;
        }
      }
      const span = doc.createElement('span'); span.textContent = match[1]; span.classList.add('sr-only'); 
      bq.prepend(span);
      p.outerHTML = bq.outerHTML;
    }

    // Test: item?id=26514612, item?id=26545082, item?id=30282629
    if (match = /^([-*])[^-*]/.exec(p.textContent.trim())) {
      const li = doc.createElement('li')
      li.innerHTML = p.innerHTML;
      for (const x of treeWalkerToIter(doc.createTreeWalker(li, SHOW_TEXT))) {
        if (/^([-*])[^-*]/.test(x.textContent.trim())) {
          x.textContent = x.textContent.trim().substring(1); 
          break;
        }
      }
      const span = doc.createElement('span'); span.textContent = match[1]; span.classList.add('sr-only'); 
      li.prepend(span);
      p.outerHTML = li.outerHTML;
    }

    // Test: item?id=30244534
    if (match = /^([-*]{3,})$/.exec(p.textContent.trim())) {
      p.outerHTML = `<hr/><span class="sr-only">${match[1]}</span>`;
    }
  }

  return doc.toString();
}

/** 
 * Consumes a `Response` body while discarding all chunks. 
 * Useful for pulling data into `HTMLRewriter`. 
 */
export async function consume(r: ReadableStream, signal?: AbortSignal) {
  const reader = r.getReader();
  if (!signal) {
    while (!(await reader.read()).done) { /* NOOP */ }
  } else {
    const aborted = signal.aborted 
      ? Promise.resolve() 
      : new Promise(res => signal.addEventListener('abort', res, { once: true }));
    while (await Promise.race([
      reader.read().then(x => !x.done), 
      aborted.then(() => false),
    ])) { /* NOOP */ }
  }
}
