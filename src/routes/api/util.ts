import { DOMParser } from 'linkedom';
import { unescape } from 'html-escaper';

// import type { HTMLRewriter as HR, Element } from 'html-rewriter-wasm';
// const h2r = (htmlRewriter: HTMLRewriter) => htmlRewriter as unknown as HR;
// const r2h = (hTMLRewriter: HR) => hTMLRewriter as unknown as HTMLRewriter;

// Primitive support for 
// Problem: item?id=26520957, item?id=30283264
export async function blockquotify(text: string) {
  const { protocol, host } = self.location;

  // const newText = await r2h(h2r(new HTMLRewriter())
  //   .on('p', {
  //     text(chunk) {
  //       const text = unescape(chunk.text);
  //       // console.log(text)
  //       if (text.startsWith('>')) {
  //         console.log('!!')
  //         // const bq = doc.createElement('blockquote')
  //         // bq.innerHTML = innerHTML.substring(1);
  //         // const invis = doc.createElement('span'); invis.textContent = '>'; invis.classList.add('sr-only'); 
  //         // bq.prepend(invis, doc.createTextNode(' '));
  //         // p.outerHTML = bq.outerHTML;
  //       }
  //     },
  //     element(el) {
  //       // console.log(el)
  //       console.log('ok?', el.tagName)
  //       el.onEndTag(endTag => {
  //         // el.setInnerContent('foobar')
  //         // endTag.remove()
  //         // endTag.remove()
  //         // endTag.before('<p>foobar</p>')
  //         // endTag.after('<p>foobar</p>')
  //       });
  //     },
  //   })
  //   .on('a[href^="http://news.ycombinator.com"], a[href^="https://news.ycombinator.com"]', {
  //     element(a) {
  //       const href = a.getAttribute('href')!.replace(/https?:\/\/news.ycombinator.com/g, `${protocol}//${host}`);
  //       a.setAttribute('href', href)
  //     },
  //   })
  // )
  //   .transform(new Response(text))
  //   .text();
  
  // return newText;

  const doc = new DOMParser().parseFromString(text, 'text/html')
  let match;
  for (const p of doc.querySelectorAll('p') as HTMLParagraphElement[]) {
    const innerHTML = unescape(p.innerHTML.trim());

    for (const a of p.querySelectorAll('a[href^="http://news.ycombinator.com"], a[href^="https://news.ycombinator.com"]')) {
      const href = a.getAttribute('href')!
        .replace(/https?:\/\/news.ycombinator.com/g, `${protocol}//${host}`);
      a.setAttribute('href', href)
    }

    // Test nested: item?id=30297007
    if (innerHTML.startsWith('>')) {
      const bq = doc.createElement('blockquote')
      bq.innerHTML = innerHTML.substring(1);
      const invis = doc.createElement('span'); invis.textContent = '>'; invis.classList.add('sr-only'); 
      bq.prepend(invis, doc.createTextNode(' '));
      p.outerHTML = bq.outerHTML;
    }

    // Test: item?id=26514612, item?id=26545082, item?id=30282629
    else if (match = /^([-*])[^-*]/.exec(innerHTML)) {
      const li = doc.createElement('li')
      li.innerHTML = innerHTML.substring(1);
      const invis = doc.createElement('span'); invis.textContent = match[1]; invis.classList.add('sr-only'); 
      li.prepend(invis, doc.createTextNode(' '));
      p.outerHTML = li.outerHTML;
    }

    // Test: item?id=30244534
    else if (match = /^([-*]{3,})$/.exec(innerHTML)) {
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
