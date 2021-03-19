import { parseHTML } from 'linkedom'
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

// function* ancestors(el: Node) {
//   while (el.parentElement) {
//     yield el.parentElement
//     el = el.parentElement
//   }
// }

// function root(el: Node): globalThis.HTMLElement | undefined {
//   const ancs = [...ancestors(el)]
//   return ancs[ancs.length - 1];
// }

function enumerable(value: boolean = true) {
  return function (_: any, __: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

type Content = string;

/** Fragment form string function that works with linkedom. */
function fragmentFromString(document: HTMLDocument, html: string) {
  const temp = document.createElement('template');
  temp.innerHTML = html;
  return temp.content;
}

abstract class DumbHTMLRewriterNode {
  #node: Element | Text | Comment | null;
  #doc: HTMLDocument;
  constructor(node: Element | Text | Comment | null, document: HTMLDocument) {
    this.#node = node;
    this.#doc = document;
  }

  @enumerable() get removed() { return !this.#doc.contains(this.#node) }

  #replace = (node: Element | Text | Comment | null, content: string, opts?: ContentOptions) => {
    node?.replaceWith(...opts?.html
      ? fragmentFromString(this.#doc, content).childNodes
      : [content]);
  }

  before(content: Content, opts?: ContentOptions): this {
    const before = this.#doc.createComment('');
    this.#node?.parentElement?.insertBefore(before, this.#node)
    this.#replace(before, content, opts);
    return this;
  }

  after(content: Content, opts?: ContentOptions): this {
    const after = this.#doc.createComment('');
    this.#node?.parentElement?.insertBefore(after, this.#node.nextSibling)
    this.#replace(after, content, opts);
    return this;
  }

  replace(content: Content, opts?: ContentOptions): this {
    this.#replace(this.#node, content, opts);
    return this;
  }

  remove(): this {
    this.#node?.remove()
    return this;
  }
}

// function prepElem(node: Element, document: HTMLDocument) {
//   const attributes = node.getAttributeNames().map(k => [k, node.getAttribute(k)] as [string, string]);
//   return new DumbHTMLRewriterElement(node, document)
//   return {
//     tagName: node.tagName.toLowerCase(),
//     attributes: attributes,
//     namespaceURI: node.namespaceURI,
//     removed: !document.contains(node), // TODO: improve perf!
//   } as any;
// }

class DumbHTMLRewriterElement extends DumbHTMLRewriterNode {
  #node: Element;
  #attributes: [string, string][];
  constructor(node: Element, document: HTMLDocument) {
    super(node, document)
    this.#node = node;
    this.#attributes = node.getAttributeNames().map(k => [k, node.getAttribute(k)] as [string, string]);
  }
  @enumerable() get tagName() { return this.#node.tagName.toLowerCase() }
  @enumerable() get attributes() { return [...this.#attributes] }
  @enumerable() get namespaceURI() { return this.#node.namespaceURI } 

  getAttribute(name: string) {
    return this.#node.getAttribute(name); 
  }

  hasAttribute(name: string) {
    return this.#node.hasAttribute(name);
  }

  setAttribute(name: string, value: string): this {
    this.#node.setAttribute(name, value); 
    return this; 
  }

  removeAttribute(name: string): this {
    this.#node.removeAttribute(name); 
    return this; 
  }

  prepend(content: Content, opts?: ContentOptions):this {
    return this.before(content, opts);
  }

  append(content: Content, opts?: ContentOptions): this {
    return this.after(content, opts);
  }

  setInnerContent(content: Content, opts?: ContentOptions): this {
    this.#node[opts?.html ? 'innerHTML' : 'textContent'] = content;
    return this;
  }

  removeAndKeepContent(): this {
    this.#node?.replaceWith(...this.#node.childNodes);
    return this;
  }
}

class DumbHTMLRewriterText extends DumbHTMLRewriterNode {
  #text: Text | null;
  #done: boolean;

  constructor(text: Text | null, document: HTMLDocument, lastInTextNode = false) {
    super(text, document);
    this.#text = text;
    this.#done = lastInTextNode;
  }
  @enumerable() get text() { return this.#text?.textContent ?? '' }
  @enumerable() get lastInTextNode() { return this.#done }
}

class DumbHTMLRewriterComment extends DumbHTMLRewriterNode {
  #comm: Comment;
  constructor(comm: Comment, document: HTMLDocument) {
    super(comm, document);
    this.#comm = comm;
  }
  @enumerable() get text() { return this.#comm?.nodeValue ?? '' }
}

class AppendMap<K, V> extends Map<K, V[]> {
  append(k: K, v: V) {
    const list = this.get(k) ?? [];
    list.push(v);
    this.set(k, list);
  }
}

type Awaitable<T> = T | Promise<T>;

export type ExtElementHandler =  ElementHandler & {
  innerHTML?(html: string): void | Promise<void>;
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
 * - document callback
 */
export class DumbHTMLRewriter implements HTMLRewriter {
  #onMap = new AppendMap<string, ExtElementHandler>();
  // #onDocument = new Array<DocumentHandler>();

  public on(selector: string, handlers: ExtElementHandler): HTMLRewriter {
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
        const htmlText = await response.text();
        const { document }  = parseHTML(htmlText);
        // const document = new DOMParser().parseFromString(htmlText, 'text/html')

        // After that, the hardest part is actually getting the order right.
        // First, we'll build a map of all elements that are "interesting", based on the registered handlers.
        // We take advantage of existing DOM APIs 
        const elemMap = new AppendMap<Element, (el: Element) => Awaitable<void>>();
        const htmlMap = new AppendMap<Element, (html: string) => Awaitable<void>>();
        const textMap = new AppendMap<Text, (text: Text) => Awaitable<void>>();
        const commMap = new AppendMap<Comment, (comment: Comment) => Awaitable<void>>();

        for (const [selector, handlers] of this.#onMap) {
          for (const elem of document.querySelectorAll(selector)) {
            for (const handler of handlers) {
              if (handler.element) {
                elemMap.append(elem, handler.element.bind(handler));
              }

              if (handler.innerHTML) {
                htmlMap.append(elem, handler.innerHTML.bind(handler));
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

        // We need to walk the entire tree ahead of time, otherwise we'll lose elements that have been deleted..
        const nodes = [...treeWalkerToIter(walker)];

        for (const node of nodes) {
          if (isElement(node)) {
            const handlers = elemMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(new DumbHTMLRewriterElement(node, document) as unknown as Element);
            }
            for (const handler of htmlMap.get(node) ?? []) {
              // Not using .innerHTML here due to a bug in linkedom: 
              // https://github.com/WebReflection/linkedom/issues/45
              handler((<any>node.childNodes).join(''));
            }
          }
          else if (isText(node)) {
            const handlers = textMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(new DumbHTMLRewriterText(node, document) as unknown as Text);
            }
            if (!isText(node.nextSibling)) {
              for (const handler of handlers) {
                handler(new DumbHTMLRewriterText(null, document, true) as unknown as Text);
              }
            }
          }
          else if (isComment(node)) {
            const handlers = commMap.get(node) ?? [];
            for (const handler of handlers) {
              handler(new DumbHTMLRewriterComment(node, document) as unknown as Text);
            }
          }
        }

        return new TextEncoder().encode(document.toString());
      } catch (err) { console.error(err); throw err }
    })())), response);
  }
}

function* treeWalkerToIter(walker: TreeWalker): IterableIterator<Node> {
  let { currentNode: node } = walker;
  while (node) {
    yield node;
    // @ts-ignore
    node = walker.nextNode();
  }
}

// function* zip<X, Y>(xs: Iterable<X>, ys: Iterable<Y>): IterableIterator<[X, Y]> {
//   const xit = xs[Symbol.iterator]();
//   const yit = ys[Symbol.iterator]();
//   while (true) {
//     const [xr, yr] = [xit.next(), yit.next()];
//     if (xr.done || yr.done) break;
//     yield [xr.value, yr.value];
//   }
// }

// /* Checks if this element or any of its parents matches a given `selector`. */
// function matchesAncestors(el: Element | null, selector: string): Element | null {
//   let curr = el;
//   while (curr != null) {
//     if (curr.matches(selector)) return curr;
//     curr = curr.parentElement;
//   }
//   return null;
// }
