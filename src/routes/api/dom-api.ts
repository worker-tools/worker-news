/**
 * A web scraping (DOM-based) implementation of the Hacker News API.
 */
import { ParamsURL, urlWithParams } from '@worker-tools/json-fetch';
import { eventTargetToAsyncIter } from 'event-target-to-async-iter';
import { unescape } from 'html-escaper';

// Sadly, `ParseHTMLRewriter` is necessary until Cloudflare's native `HTMLRewriter` supports the `innerHTML` handler.
// Without this, it is (nearly?) impossible to get the `innerHTML` content of an element.
// import { ParsedHTMLRewriter as HTMLRewriter, ParsedElementHandler } from '@worker-tools/parsed-html-rewriter';
import { HTMLRewriter as HR, ElementHandlers, Element, TextChunk } from 'html-rewriter-wasm';

import { APost, AComment, Quality, Stories, AUser } from './interface';
import { aMap } from './iter';
import { blockquotify, consume } from './util';
import { resolvablePromise } from 'src/vendor/resolvable-promise';

const h2r = (htmlRewriter: HTMLRewriter) => htmlRewriter as unknown as HR;
const r2h = (hTMLRewriter: HR) => hTMLRewriter as unknown as HTMLRewriter;

const API = 'https://news.ycombinator.com'

const x = {
  [Stories.TOP]: '/news',
  [Stories.NEW]: '/newest',
  [Stories.BEST]: '/best',
  [Stories.SHOW]: '/show',
  [Stories.SHOW_NEW]: '/shownew',
  [Stories.ASK]: '/ask',
  [Stories.JOB]: '/jobs',
  [Stories.USER]: '/submitted',
  [Stories.CLASSIC]: '/classic',
};

const extractId = (href: string | null) => Number(/item\?id=(\d+)/.exec(href ?? '')?.[1]);
const elToTagOpen = (el: Element) => `<${el.tagName} ${[...el.attributes].map(x => `${x[0]}="${x[1]}"`).join(' ')}>`;
const elToDate = (el: Element) => new Date(unescape(el.getAttribute('title') ?? '') + '.000+00:00')
const r2err = (body: Response) => { throw Error(`${body.status} ${body.statusText} ${body.url}`) }

type StoriesParams = RequireAtLeastOne<{ p?: number, n?: number, next?: number, id?: string }, 'p' | 'n' | 'id'>;

export async function* stories({ p, n, next, id }: StoriesParams, type = Stories.TOP) {
  const pathname = x[type];
  const url = new ParamsURL(pathname, { 
    ...p ? { p } : {}, 
    ...n ? { n } : {},
    ...next ? { next } : {}, 
    ...id ? { id } : {},
  }, API);
  const body = await fetch(url.href)
  if (!body.ok) r2err(body)
  yield* storiesGenerator(body);
}

function newCustomEvent<T>(event: string, detail?: T) {
  return new CustomEvent<T>(event, { detail });
}

async function* storiesGenerator(response: Response) {
  let post: Partial<APost>;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<APost>>(data, 'data', { returnEvent: 'return' });

  const moreLink = resolvablePromise<string>();
  const rewriter = h2r(new HTMLRewriter())
    .on('.athing[id]', {
      element(el) {
        if (post) data.dispatchEvent(newCustomEvent('data', post));

        const id = Number(el.getAttribute('id'));
        post = { id, title: '', score: 0, by: '', descendants: 0, story: post?.story };
      }
    })
    .on('.athing[id] > .title > a.titlelink', {
      element(link) { post.url = unescape(link.getAttribute('href') ?? '') },
      text({ text }) { post.title += text },
    })
    // // FIXME: concatenate text before parseInt jtbs..
    .on('.subtext > .score', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
    })
    .on('.subtext > .hnuser', {
      text({ text }) { post.by += text }
    })
    .on('.subtext > .age[title]', { 
      element(el) { post.time = elToDate(el) }
    })
    .on('.subtext > a[href^=item]', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
    })
    .on('.morelink[href]', {
      element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) }
    })
    .on('.yclinks', {
      element() { 
        if (post) data.dispatchEvent(newCustomEvent('data', post)) 
        data.dispatchEvent(newCustomEvent('return'))
      }
    })

  consume(r2h(rewriter).transform(response).body!)
    .then(() => iter.return())
    .catch(err => iter.throw(err));

  for await (const { detail: post } of iter) {
    post.type = post.type || 'story';
    if (!post.by) { // No users post this = job ads
      post.type = 'job';
    }
    yield post as APost;
  }

  // Prevent lock...
  moreLink.resolve('');
  
  yield await moreLink;
}

export async function comments(id: number, p?: number): Promise<APost> {
  const url = new ParamsURL('/item', { id, ...p ? { p } : {} }, API).href;
  const body = await fetch(url)
  if (body.ok) return commentsGenerator(body);
  return await r2err(body);
}

export async function* threads(id: string, next?: number) {
  const url = new ParamsURL('/threads', { id, ...next ? { next } : {} }, API).href;
  const body = await fetch(url)
  if (!body.ok) await r2err(body);
  yield* threadsGenerator(body)
}

function scrapeComments(rewriter: HR, data: EventTarget, prefix = '') {
  let comment!: Partial<AComment>;

  return rewriter
    .on(`${prefix} .athing.comtr[id]`, {
      element(thing) {
        if (comment) data.dispatchEvent(newCustomEvent('data', comment));
        const id = Number(thing.getAttribute('id'))
        comment = { id, type: 'comment', by: '', text: '', storyTitle: '' };
      },
    })
    .on(`${prefix} .athing.comtr[id] .ind[indent]`, {
      element(el) { comment.level = Number(el.getAttribute('indent')) }
    })
    .on(`${prefix} .athing.comtr[id] .hnuser`, {
      text({ text }) { comment.by += text }
    })
    .on(`${prefix} .athing.comtr[id] .age[title]`, { 
      element(el) { comment.time = elToDate(el) }
    })
    .on(`${prefix} .athing.comtr[id] a.togg[id][n]`, { 
      element(el) { comment.descendants = Number(el.getAttribute('n')) - 1 }
    })
    .on(`${prefix} .athing.comtr[id] .onstory > a[href]`, {
      element(a) { comment.story = extractId(a.getAttribute('href')) },
      text({ text }) { comment.storyTitle += text }
    })
    .on(`${prefix} .athing.comtr[id] .commtext`, {
      element(el) { comment.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality },
      text(chunk) { comment.text += chunk.text },
    })
    .on(`${prefix} .athing.comtr[id] .commtext *`, {
      element(el) { 
        comment.text += elToTagOpen(el);
        el.onEndTag(endTag => { comment.text += `</${endTag.name}>`})
      }
    })
    .on(`${prefix} .athing.comtr[id] .comment .reply`, { 
      element(el) { el.remove() }
    })
    .on('.yclinks', {
      element() { 
        if (comment) data.dispatchEvent(newCustomEvent('data', comment)) 
        data.dispatchEvent(newCustomEvent('return'))
      }
    })
}

async function commentsGenerator(response: Response) {
  const post: Partial<APost> = { title: '', score: 0, by: '', descendants: 0, text: '', storyTitle: '' };

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(data, 'data', { returnEvent: 'return' });

  const moreLink = resolvablePromise<string>();

  // console.log(response.status, response.url, ...response.headers, (await response.clone().arrayBuffer()).byteLength)

  const rewriter = h2r(new HTMLRewriter())
    .on('.fatitem .athing[id]', {
      element(el) { post.id = Number(el.getAttribute('id')) },
    })
    .on('.fatitem .athing[id] > .title > a.titlelink', { 
      element(link) { post.url = unescape(link.getAttribute('href') ?? '') },
      text({ text }) { post.title += text }
    })
    // FIXME: concatenate text before parseInt jtbs..
    .on('.fatitem .subtext > .score', { 
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
    })
    .on('.fatitem .subtext > .hnuser', { 
      text({ text }) { post.by += text }
    })
    .on('.fatitem .subtext > .age[title]', { 
      element(el) { post.time = elToDate(el) }
    })
    .on('.fatitem .subtext > a[href^=item]', { 
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
    })
    .on('.fatitem tr:nth-child(4) > td:nth-child(2)', { 
      text({ text }) { post.text += text }
    })
    .on('.fatitem tr:nth-child(4) > td:nth-child(2) *:not(form) *', { 
      element(el) {
        post.text += elToTagOpen(el);
        el.onEndTag(endTag => { post.text += `</${endTag.name}>`})
      }
    })
    .on('.fatitem .comhead > .hnuser', {
      text({ text }) { post.by += text }
    })
    .on('.fatitem .comhead > .age[title]', {
      element(el) { post.time = elToDate(el) }
    })
    .on('.fatitem .comhead > .navs > a[href^="item"]', {
      element(a) { post.parent = extractId(a.getAttribute('href')) }
    })
    .on('.fatitem .comhead > .onstory > a[href]', {
      element(a) { post.story = extractId(a.getAttribute('href')) },
      text({ text }) { (<string>post.storyTitle) += text }
    })
    .on('.fatitem .commtext', {
      element(el) { 
        post.type = 'comment'; 
        post.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality; 
      },
      text(chunk) { post.text += chunk.text }
    })
    .on('.fatitem .commtext *', {
      element(el) { 
        post.text += elToTagOpen(el);
        el.onEndTag(endTag => { post.text += `</${endTag.name}>`})
      }
    })
    .on('.comment-tree', {
      element() { data.dispatchEvent(newCustomEvent('data', post)) },
    })
    .on('a.morelink[href][rel="next"]', { 
      element(el) { 
        moreLink.resolve(unescape(el.getAttribute('href') ?? '')) 
      }, 
    })

  scrapeComments(rewriter, data, '.comment-tree');
    
  const x = consume(r2h(rewriter).transform(response).body!)
    .then(() => iter.return())
    .catch(err => iter.throw(err));

  // wait for `post` to be populated
  await iter.next();

  if (post.text?.trim()) {
    post.text = blockquotify('<p>' + post.text)
  } else delete post.text

  post.kids = aMap(iter, ({ detail: comment }) => {
    comment.story = post.id;
    return fixComment(comment)
  });

  post.moreLink = Promise.race([moreLink, x.then(() => '')]);

  return post as APost;
};

function fixComment(comment: Partial<AComment>) {
  if (comment.text?.trim()) {
    comment.text = blockquotify('<p>' + comment.text)
  } else {
    // FIXME?
    comment.deleted = true;
    comment.text = ' [flagged] ';
  }
  return comment as AComment;
}

async function* threadsGenerator(response: Response) {
  const target = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(target, 'data', { returnEvent: 'return' });

  const moreLink = resolvablePromise<string>();
  const rewriter = h2r(new HTMLRewriter())
    .on('a.morelink[href][rel="next"]', { 
      element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) } 
    });

  scrapeComments(rewriter, target, '');

  consume(r2h(rewriter).transform(response).body!)
    .then(() => iter.return())
    .catch(err => iter.throw(err));

  for await (const { detail: comment } of iter) {
    yield fixComment(comment);
  }

  // Prevent lock... FIXME: better solution?
  moreLink.resolve('');

  yield await moreLink;
};

export async function user(id: string): Promise<AUser> {
  const url = new ParamsURL('user', { id }, API);
  const response = await fetch(url.href);
  if (!response.ok) await r2err(response);

  let user: Partial<AUser> = { id, about: '', submitted: [] };

  const rewriter = h2r(new HTMLRewriter())
    .on('tr.athing td[timestamp]', {
      element(el) { 
        user.created = Number(el.getAttribute('timestamp')) 
      }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(3) > td:nth-child(2)', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) user.karma = parseInt(text, 10) }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(4) > td:nth-child(2)', {
      text(chunk) { user.about += chunk.text }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(4) > td:nth-child(2) *', {
      element(el) { 
        user.about += elToTagOpen(el);
        el.onEndTag(endTag => { user.about += `</${endTag.name}>`})
      }
    })

  await consume(r2h(rewriter).transform(response).body!);

  if (user.about?.trim()) user.about = '<p>' + user.about.trim();

  return user as AUser;
}
