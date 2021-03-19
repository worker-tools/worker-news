import { DOMParser } from 'linkedom'
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

const isText = (n?: Node | null): n is Text => n?.nodeType === TEXT_NODE;
const isElement = (n?: Node | null): n is Element => n?.nodeType === ELEMENT_NODE;
const isComment = (n?: Node | null): n is Comment => n?.nodeType === COMMENT_NODE;

function* findTextNodes(el: Element, document: any): Iterable<Text> {
  const tw = document.createTreeWalker(el, SHOW_TEXT);
  let node = tw.currentNode;
  while (node) {
    yield node as Text;
    node = tw.nextNode();
  }
}

function* findCommentNodes(el: Element, document: any): Iterable<Comment> {
  const tw = document.createTreeWalker(el, SHOW_COMMENT);
  let node = tw.currentNode;
  while (node) {
    yield node as Comment;
    node = tw.nextNode();
  }
}

function prepElem(n: Element) {
  const attributes = n.getAttributeNames().map(k => [k, n.getAttribute(k)] as [string, string]);
  return {
    tagName: n.tagName.toLowerCase(),
    attributes: attributes,
    namespaceURI: n.namespaceURI,
    getAttribute: n.getAttribute.bind(n),
    hasAttribute: n.hasAttribute.bind(n),
    // TODO
  } as any;
}

function prepText(text: Text | null, done = false) {
  return {
    text: text?.textContent ?? '',
    lastInTextNode: done,
    // TODO
  } as any
}

function prepComm(comm: Comment): any {
  return {
    text: comm.nodeValue
    // TODO
  }
}

class AppendMap<K, V> extends Map<K, V[]> {
  append(k: K, v: V) {
    const list = this.get(k) ?? [];
    list.push(v);
    this.set(k, list);
  }
}

type Awaitable<T> = T | Promise<T>;

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
  #onMap = new AppendMap<string, ElementHandler>();
  // #onDocument = new Array<DocumentHandler>();

  public on(selector: string, handlers: ElementHandler): HTMLRewriter {
    this.#onMap.append(selector, handlers);
    return this;
  }

  public onDocument(handlers: DocumentHandler): HTMLRewriter {
    // this.#onDocument.push(handlers);
    // return this;
    throw Error('Method not implemented.');
  }

  public transform(response: Response): Response {
    // Kinda hard to explain... Check the type signatures of `Response.constructor` and `transform` 
    // to see why this dance is necessary...
    return new Response(asyncIterableToStream(promiseToAsyncIterable((async () => {
      try {
        // This is where the "dumb" part comes in: We're not actually stream processing, 
        // instead we'll just build the DOM in memory and run the selectors.
        const text = await response.text()
        const document = new DOMParser().parseFromString(text, 'text/html');

        // After that, the hardest part is actually getting the order right.
        // First, we'll build a map of all elements that are "interesting", based on the registered handlers.
        // We take advantage of existing DOM APIs 
        const elemMap = new AppendMap<Element, (el: Element) => Awaitable<void>>();
        const textMap = new AppendMap<Text, (text: Text) => Awaitable<void>>();
        const commMap = new AppendMap<Comment, (comment: Comment) => Awaitable<void>>();

        for (const [selector, handlers] of this.#onMap) {
          for (const elem of document.querySelectorAll(selector)) {
            for (const handler of handlers) {
              if (handler.element) {
                elemMap.append(elem, handler.element.bind(handler));
              }

              // Non-element handlers are odd, in the sense that they run for _any_ children
              if (handler.text) {
                for (const text of findTextNodes(elem, document)) {
                  textMap.append(text, handler.text.bind(handler))
                }
              }

              if (handler.comments) {
                for (const comm of findCommentNodes(elem, document)) {
                  commMap.append(comm, handler.comments.bind(handler))
                }
              }
            }
          }
        }

        // We'll then walk the DOM and run the registered handlers each time we encounter an "interesting" node.
        // Because we've stored them in a hash map, this is now O(n)...
        const walker = document.createTreeWalker(document.documentElement, SHOW_ELEMENT + SHOW_TEXT + SHOW_COMMENT);

        let { currentNode: node } = walker;
        while (node) {
          if (isElement(node)) {
            const handlers = elemMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(prepElem(node));
            }
          }
          else if (isText(node)) {
            const handlers = textMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(prepText(node, false))
            }
            if (!isText(node.nextSibling)) {
              for (const handler of handlers) {
                handler(prepText(null, true))
              }
            }
          }
          else if (isComment(node)) {
            const handlers = commMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(prepComm(node))
            }
          }

          node = walker.nextNode();
        }

        return new TextEncoder().encode(document.toString());
      } catch (err) { console.error(err); throw err }
    })())), response);
  }
}

// /* Checks if this element or any of its parents matches a given `selector`. */
// function matchesAncestors(el: Element | null, selector: string): Element | null {
//   let curr = el;
//   while (curr != null) {
//     if (curr.matches(selector)) return curr;
//     curr = curr.parentElement;
//   }
//   return null;
// }
