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