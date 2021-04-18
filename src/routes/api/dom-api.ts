/**
 * A web scraping (DOM-based) implementation of the Hacker News API.
 */
import { ParamsURL } from '@worker-tools/json-fetch';
import { eventTargetToAsyncIter } from 'event-target-to-async-iter';

// Sadly, `ParseHTMLRewriter` is necessary until Cloudflare's native `HTMLRewriter` supports the `innerHTML` handler.
// Without this, it is (nearly?) impossible to get the `innerHTML` content of an element.
import { ParsedHTMLRewriter as HTMLRewriter, ParsedElementHandler } from '@worker-tools/parsed-html-rewriter';

import { APost, AComment, Quality, Stories, AUser } from './interface';
import { aMap } from './iter';
import { blockquotify, consume } from './util';
import { resolvablePromise } from 'src/vendor/resolvable-promise';

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
};

export async function* stories({ p, next, id }: { p?: number, next?: number, id?: string }, type = Stories.TOP) {
  const pathname = x[type];
  const url = new ParamsURL(pathname, { 
    ...p ? { p } : {}, 
    ...next ? { next } : {}, 
    ...id ? { id } : {},
  }, API);
  yield* storiesGenerator(await fetch(url.href));
}

async function* storiesGenerator(response: Response) {
  let post!: Partial<APost>;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<APost>>(data, 'data');

  const moreLink = resolvablePromise<string>();
  const rewriter = new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        if (post) data.dispatchEvent(new CustomEvent('data', { detail: post }));

        const id = Number(el.getAttribute('id'));
        post = { id, title: '', score: 0, by: '', timeAgo: '', descendants: 0 };
      }
    })
    .on('.athing[id] .title a.storylink', {
      element(link) { post.url = link.getAttribute('href') || undefined },
      text({ text }) { post.title += text },
    })
    // // FIXME: concatenate text before parseInt jtbs..
    .on('.subtext > .score', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
    })
    .on('.subtext > .hnuser', {
      text({ text }) { post.by += text }
    })
    .on('.subtext > .age', {
      text({ text }) { post.timeAgo += text }
    })
    .on('.subtext > a[href^=item]', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
    })
    .on('.morelink[href]', {
      element(el) { moreLink.resolve(el.getAttribute('href')!) }
    })

  consume(rewriter.transform(response)).then(() => {
    if (post) data.dispatchEvent(new CustomEvent('data', { detail: post }));
    iter.return();
  });

  for await (const { detail: post } of iter) {
    post.type = post.type || 'story';
    if (!post.by) { // No users post this = job ads
      post.type = 'job';
    }
    yield post as APost;
  }

  moreLink.resolve('')
  
  yield await moreLink;
}

export async function comments(id: number): Promise<APost> {
  const url = new ParamsURL('/item', { id }, API).href;
  const body = await fetch(url)
  return commentsGenerator(body);
}

const extractId = (href: string | null) => Number(/item\?id=(\d+)/.exec(href ?? '')?.[1]);

async function commentsGenerator(response: Response) {
  const post: Partial<APost> = { title: '', score: 0, by: '', timeAgo: '', descendants: 0, text: '', storyTitle: '' };
  let comment!: Partial<AComment>;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(data, 'data');

  let first = true;
  const rewriter = new HTMLRewriter()
    .on('#pagespace', { 
      element(el) { post.title = el.getAttribute('title') as string }
    })
    .on('.fatitem .athing[id]', {
      element(el) { post.id = Number(el.getAttribute('id')) },
    })
    .on('.fatitem .title a.storylink', {
      element(link) { post.url = link.getAttribute('href') || undefined; },
    })
    // FIXME: concatenate text before parseInt jtbs..
    .on('.fatitem .subtext > .score', { 
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
    })
    .on('.fatitem .subtext > .hnuser', { 
      text({ text }) { post.by += text }
    })
    .on('.fatitem .subtext > .age', { 
      text({ text }) { post.timeAgo += text }
    })
    .on('.fatitem .subtext > a[href^=item]', { 
      text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
    })
    .on('.fatitem tr:nth-child(4) > td:nth-child(2)', <ParsedElementHandler>{ 
      innerHTML(html) { if (!html?.trimStart().startsWith('<form')) post.text += html }
    })
    .on('.fatitem .comhead > .hnuser', {
      text({ text }) { post.by += text }
    })
    .on('.fatitem .comhead > .age', {
      text({ text }) { post.timeAgo += text }
    })
    .on('.fatitem .comhead > .par > a[href]', {
      element(a) { post.parent = extractId(a.getAttribute('href')) }
    })
    .on('.fatitem .comhead > .storyon > a[href]', {
      element(a) { post.story = extractId(a.getAttribute('href')) },
      text({ text }) { (<string>post.storyTitle) += text }
    })
    .on('.fatitem .commtext', <ParsedElementHandler>{
      element(el) { 
        post.type = 'comment'; 
        post.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality; 
      },
      innerHTML(html) { post.text += html }
    })
    .on('.comment-tree .athing.comtr[id]', {
      element(thing) {
        if (first) data.dispatchEvent(new CustomEvent('data', { detail: post }))
        first = false;

        if (comment) data.dispatchEvent(new CustomEvent('data', { detail: comment }));
        const id = Number(thing.getAttribute('id'))
        comment = { id, type: 'comment', by: '', timeAgo: '', text: '' };
      },
    })
    .on('.comment-tree .athing.comtr[id] .ind > img[src="s.gif"][width]', {
      element(el) { comment.level = Number(el.getAttribute('width')) / 40 }
    })
    .on('.comment-tree .athing.comtr[id] .hnuser', {
      text({ text }) { comment.by += text }
    })
    .on('.comment-tree .athing.comtr[id] .age', {
      text({ text }) { comment.timeAgo += text }
    })
    .on('.comment-tree .athing.comtr[id] .commtext', <ParsedElementHandler>{
      element(el) { comment.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality },
      innerHTML(html) { comment.text += html }
    })
    .on('.comment-tree .athing.comtr[id] .comment .reply', { 
      element(el) { el.remove() }
    });
    
  consume(rewriter.transform(response)).then(() => {
    if (comment) data.dispatchEvent(new CustomEvent('data', { detail: comment }));
    iter.return();
  });

  // wait for `post` to be populated
  await iter.next();

  if (post.text) {
    post.text = blockquotify('<p>' + post.text)
  }

  post.kids = aMap(iter, ({ detail: comment }) => {
    if (comment.text) {
      comment.text = blockquotify('<p>' + comment.text)
    } else {
      // ??
      comment.deleted = true;
      comment.text = ' [flagged] ';
    }
    return comment;
  });

  return post as APost;
};

export async function user(id: string): Promise<AUser> {
  const url = new ParamsURL('user', { id }, API);
  const response = await fetch(url.href);

  let user: Partial<AUser> = { id, about: '', submitted: [] };

  const rewriter = new HTMLRewriter()
    .on('tr.athing td[timestamp]', {
      element(el) { user.created = Number(el.getAttribute('timestamp')) }
    })
    .on('tr > td > table[border=0] > tr:nth-child(3) > td:nth-child(2)', {
      text({ text }) { if (text?.trimStart().match(/^\d/)) user.karma = parseInt(text, 10) }
    })
    .on('tr > td > table[border=0] > tr:nth-child(4) > td:nth-child(2)', <ParsedElementHandler>{
      innerHTML(html) { if (html.trim() !== '') user.about = '<p>' + html.trim() }
    })

  await consume(rewriter.transform(response));

  return user as AUser;
}
