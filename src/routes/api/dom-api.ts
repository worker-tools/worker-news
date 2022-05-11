/**
 * A web scraping (DOM-based) implementation of the Hacker News API.
 */
import { ParamsURL } from '@worker-tools/json-fetch';
import { ResolvablePromise } from '@worker-tools/resolvable-promise';
import { eventTargetToAsyncIter } from 'event-target-to-async-iter';
import { unescape } from 'html-escaper';

// import type { HTMLRewriter } from '@worker-tools/html-rewriter'
// import type { HTMLRewriter as HR, Element } from 'html-rewriter-wasm';
import type { Element, HTMLRewriter as IHTMLRewriter } from '@worker-tools/html-rewriter'

import { AThing, APost, AComment, APollOpt, Quality, Stories, AUser, StoriesParams, StoriesData, ThreadsData } from './interface.ts';
import { aMap } from './iter.ts';
import { blockquotify, consume } from './rewrite-content.ts';

// const h2r = (htmlRewriter: HR | HTMLRewriter) => htmlRewriter as unknown as HR;
// const r2h = (hTMLRewriter: HR | HTMLRewriter) => hTMLRewriter as unknown as HTMLRewriter;

const HN = 'https://news.ycombinator.com'

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
  [Stories.FROM]: '/from',
  [Stories.OFFLINE]: 'never',
};

const extractId = (href: string | null) => Number(/item\?id=(\d+)/.exec(href ?? '')?.[1]);
const elToTagOpen = (el: Element) => `<${el.tagName}${[...el.attributes].map(x => ` ${x[0]}="${x[1]}"`).join('')}>`;
const elToDate = (el: Element) => new Date(unescape(el.getAttribute('title') ?? '') + '.000+00:00')
const r2err = (body: Response) => { throw Error(`${body.status} ${body.statusText} ${body.url}`) }

export async function stories(params: StoriesParams, type = Stories.TOP) {
  const pathname = x[type];
  const url = new ParamsURL(pathname, params, HN);
  const body = await fetch(url.href)
  if (!body.ok) r2err(body)
  return storiesGenerator(body);
}

function newCustomEvent<T>(event: string, detail?: T) {
  return new CustomEvent<T>(event, { detail });
}

function storiesGenerator(response: Response): Promise<StoriesData> {
  let post: Partial<APost>;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<APost>>(data, 'data', { returnEvent: 'return' });

  const moreLink = new ResolvablePromise<string>();
  const rewriter = new self.HTMLRewriter()
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

  consume(rewriter.transform(response).body!)
    .then(() => iter.return())
    .then(() => moreLink.resolve(''))
    .catch(err => iter.throw(err));

  return Promise.resolve({
    items: aMap(iter, ({ detail: post }) => {
      post.type = post.type || 'story';
      if (!post.by) { // No users post this = job ads
        post.type = 'job';
      }
      return post as APost;
    }),
    moreLink,
  })
}

export async function comments(id: number, p?: number): Promise<APost> {
  const url = new ParamsURL('/item', { id, ...p ? { p } : {} }, HN).href;
  const body = await fetch(url)
  if (body.ok) return commentsGenerator(body);
  return r2err(body);
}

export async function threads(id: string, next?: number) {
  const url = new ParamsURL('/threads', { id, ...next ? { next } : {} }, HN).href;
  const body = await fetch(url)
  if (!body.ok) r2err(body);
  return threadsGenerator(body)
}

function scrapeComments(rewriter: IHTMLRewriter, data: EventTarget, prefix = '') {
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
  const post: Partial<APost> = { title: '', score: 0, by: '', descendants: 0, text: '', storyTitle: '', dead: true };

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(data, 'data', { returnEvent: 'return' });
  const opts = eventTargetToAsyncIter<CustomEvent<APollOpt>>(data, 'pollopt', { returnEvent: 'return' });
  let hasParts = undefined;

  const moreLink = new ResolvablePromise<string>();

  // console.log(response.status, response.url, ...response.headers, (await response.clone().arrayBuffer()).byteLength)
  let pollOpt: Partial<APollOpt>;

  const rewriter = new self.HTMLRewriter()
    .on('.fatitem > .athing[id]', {
      element(el) { post.id = Number(el.getAttribute('id')) },
    })
    .on('.fatitem > .athing[id] > .title > a.titlelink', { 
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
    .on('.fatitem > tr:nth-child(4) > td:nth-child(2)', { 
      text({ text }) { post.text += text }
    })
    .on('.fatitem form, .comment-tree .reply a[href]', {
      element() { post.dead = false }
    })
    // HACK: there's no good way to distinguish link and story submissions.
    // When it's a link, the reply form is in the same spot as the text is for a story submission, 
    // so we just ignore all the form elements...
    .on('.fatitem > tr:nth-child(4) > td:nth-child(2) *:not(form):not(input):not(textarea):not(br)', {  // HACK
      element(el) {
        post.text += elToTagOpen(el);
        el.onEndTag(endTag => { post.text += `</${endTag.name}>`});
      }
    })
    // Poll: item?id=30210378
    .on('.fatitem > tr:nth-child(6) tr.athing[id]', {
      element(el) {
        hasParts = true;
        post.type = 'poll';

        if (pollOpt) data.dispatchEvent(newCustomEvent('pollopt', pollOpt))
        const id = Number(el.getAttribute('id'));
        pollOpt = { id, text: '', score: 0 };
      }
    })
    .on('.fatitem > tr:nth-child(6) tr.athing[id] > .comment > div', {
      text({ text }) { pollOpt.text += text; }
    })
    .on('.fatitem > tr:nth-child(6) tr .comhead > .score ', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) pollOpt.score = parseInt(text, 10) }
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
      text({ text }) { post.text += text }
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
    
  consume(rewriter.transform(response).body!)
    .then(() => iter.return())
    .then(() => moreLink.resolve(''))
    .catch(err => iter.throw(err));

  // wait for `post` to be populated
  await iter.next();

  if (post.text?.trim()) {
    post.text = await blockquotify('<p>' + post.text)
  } else delete post.text

  post.parts = hasParts && aMap(opts, ({ detail: pollOpt }) => {
    pollOpt.poll = post.id!;
    pollOpt.by = post.by!;
    pollOpt.dead = post.dead;
    return fixPollOpt(pollOpt);
  })

  post.kids = aMap(iter, ({ detail: comment }) => {
    comment.story = post.id;
    comment.dead = post.dead;
    return fixComment(comment)
  });

  post.moreLink = moreLink;

  console.log(post)

  return post as APost;
};

async function fixComment(comment: Partial<AComment>) {
  if (comment.text?.trim()) {
    comment.text = await blockquotify('<p>' + comment.text)
  } else {
    // FIXME: is this how it works??
    // comment.deleted = true;
    // comment.text = ' [deleted] ';
  }
  return comment as AComment;
}

function fixPollOpt(pollOpt: Partial<APollOpt>) {
  if (pollOpt.text) pollOpt.text = pollOpt.text.trim(); else delete pollOpt.text;
  return pollOpt as APollOpt;
}

function threadsGenerator(response: Response): Promise<ThreadsData> {
  const target = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(target, 'data', { returnEvent: 'return' });

  const moreLink = new ResolvablePromise<string>();
  const rewriter = new self.HTMLRewriter()
    .on('a.morelink[href][rel="next"]', { 
      element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) } 
    });

  scrapeComments(rewriter, target, '');

  consume(rewriter.transform(response).body!)
    .then(() => iter.return())
    .then(() => moreLink.resolve(''))
    .catch(e => iter.throw(e));

  return Promise.resolve({
    items: aMap(iter, ({ detail: comment }) => {
      return fixComment(comment)
    }),
    moreLink,
  })
};

export async function user(id: string): Promise<AUser> {
  const url = new ParamsURL('user', { id }, HN);
  const response = await fetch(url.href);
  if (!response.ok) r2err(response);

  let user: Partial<AUser> = { id, about: '', submitted: [] };

  const rewriter = new self.HTMLRewriter()
    .on('tr.athing td[timestamp]', {
      element(el) { 
        user.created = Number(el.getAttribute('timestamp')) 
      }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(3) > td:nth-child(2)', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) user.karma = parseInt(text, 10) }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(4) > td:nth-child(2)', {
      text({ text }) { user.about += text }
    })
    .on('tr > td > table[border="0"] > tr:nth-child(4) > td:nth-child(2) *', {
      element(el) { 
        user.about += elToTagOpen(el);
        el.onEndTag(endTag => { user.about += `</${endTag.name}>`})
      }
    })

  await consume(rewriter.transform(response).body!);

  if (user.about?.trim()) user.about = '<p>' + user.about.trim();

  return user as AUser;
}
