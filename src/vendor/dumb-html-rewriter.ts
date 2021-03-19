import { DOMParser } from  'linkedom'
import { asyncIterableToStream } from 'whatwg-stream-to-async-iter';

const NODE_END = -1;
const ELEMENT_NODE = 1;
const ATTRIBUTE_NODE = 2;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const DOCUMENT_NODE = 9;
const DOCUMENT_TYPE_NODE = 10;
const DOCUMENT_FRAGMENT_NODE = 11;
const SHOW_ALL = -1;
const SHOW_ELEMENT = 1;
const SHOW_TEXT = 4;
const SHOW_COMMENT = 128;
const DOCUMENT_POSITION_DISCONNECTED = 1;
const DOCUMENT_POSITION_PRECEDING = 2;
const DOCUMENT_POSITION_FOLLOWING = 4;
const DOCUMENT_POSITION_CONTAINS = 8;
const DOCUMENT_POSITION_CONTAINED_BY = 16;
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

async function* promiseToAsyncIterable<T>(promise: Promise<T>): AsyncIterableIterator<T> {
  yield await promise;
}

/* Checks if this element or any of its parents matches a given `selector`. */
export function matchesAncestors(el: Element | null, selector: string): Element | null {
  let curr = el;
  while (curr != null) {
    if (curr.matches(selector)) return curr;
    curr = curr.parentElement;
  }
  return null;
}

/**
 * A dumb implementation of Cloudflare's HTMLRewriter in pure JavaScript.
 * 
 * Unlike the original, this implementation dumps the entire document in memory, 
 * parses it via a `DOMParser` (provided by `linkedom`),
 * and runs selectors against this representation.
 * As a result, it is several orders of magnitude slower and memory intensive!
 * 
 * TODO:
 * - Rewriting...
 * - document callback
 * - comment callbacks
 */
export class DumbHTMLRewriter implements HTMLRewriter {
  #onMap = new Map<string, ElementHandler>();
  #onDocument = new Array<DocumentHandler>();

  public on(selector: string, handlers: ElementHandler): HTMLRewriter {
    this.#onMap.set(selector, handlers);
    return this;
  }
  public onDocument(handlers: DocumentHandler): HTMLRewriter {
    throw Error('Method not implemented.');
    this.#onDocument.push(handlers);
    return this;
  }
  public transform(response: Response): Response {
    return new Response(asyncIterableToStream(promiseToAsyncIterable((async () => {
      try {
        // This is where the "dumb" part comes in: We're not actually stream processing, 
        // instead we'll just build the DOM in memory and run the selectors...
        const text = await response.text()
        const document = new DOMParser().parseFromString(text, 'text/html');

        const walker = document.createTreeWalker(document.documentElement, SHOW_ELEMENT + SHOW_TEXT + SHOW_COMMENT);
        const elemEntries = [...this.#onMap.entries()].filter(x => x[1].element);
        const textEntries = [...this.#onMap.entries()].filter(x => x[1].text);
        const commEntries = [...this.#onMap.entries()].filter(x => x[1].comments);

        let { currentNode: node } = walker;
        while(node) {
          if (node.nodeType === ELEMENT_NODE) {
            let n = node as Element
            const handlers = elemEntries.filter(([sel]) => n.matches(sel))
            for (const [, handler] of handlers) {
              const attributes = n.getAttributeNames().map(k => [k, n.getAttribute(k)] as [string, string]);
              handler.element!({
                tagName: n.tagName,
                attributes: attributes[Symbol.iterator](),
                namespaceURI: n.namespaceURI,
                getAttribute: n.getAttribute.bind(n),
                hasAttribute: n.hasAttribute.bind(n),
                // TODO
              } as any);
            }
          }
          if (node.nodeType === TEXT_NODE) {
            let n = node as Text
            const handlers = textEntries.filter(([sel]) => matchesAncestors(n.parentElement, sel));
            for (const [, handler] of handlers) {
              if (n.textContent && n.textContent.trim() !== '') {
                handler.text!({ text: n.textContent, lastInTextNode: true } as any)
              }
            }
          }
          if (node.nodeType === COMMENT_NODE) {
            // TODO
          }

          node = walker.nextNode();
        }

        return new TextEncoder().encode(document.toString());
      } catch (err) { console.error(err); throw err }
    })())), response);
  }
}