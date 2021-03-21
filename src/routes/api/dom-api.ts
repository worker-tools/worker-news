/**
 * A web scraping (DOM-based) implementation of the Hacker News API.
 */
import { ParamsURL } from '@worker-tools/json-fetch';
import { eventTargetToAsyncIter } from 'event-target-to-async-iter';

// Sadly, `ParseHTMLRewriter` is necessary until Cloudflare's native `HTMLRewriter` supports the `innerHTML` handler.
// Without this, it is (nearly?) impossible to get the `innerHTML` content of an element.
import { ParsedHTMLRewriter as HTMLRewriter, ParsedElementHandler } from '@worker-tools/parsed-html-rewriter';

import { Post, AComment, Quality } from './interface';
import { aMap } from './iter';

const API = 'https://news.ycombinator.com'

async function* getStories(p = 1) {
  try {
    const url = new ParamsURL('/news', { p }, API).href;
    yield* stories(await fetch(url));
  } catch (err) {
    console.error(err)
    throw err;
  }
}

export { getStories as stories }

async function* stories(response: Response) {
  let post!: Partial<Post>;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<Post>>(data, 'data');

  consume(new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        if (post) data.dispatchEvent(new CustomEvent('data', { detail: post }));

        const id = Number(el.getAttribute('id'));
        post = { id, title: '', score: 0, by: '', timeAgo: '', descendants: 0 };
      }
    })
    .on('.athing[id] .title a.storylink', {
      element(link) { post.url = link.getAttribute('href') || undefined; },
      text({ text }) { post.title += text },
    })
    // // FIXME: concatenate text before parseInt jtbs..
    .on('.subtext > .score', { text({ text }) { if (text?.match(/^\d/)) post.score = parseInt(text, 10) } })
    .on('.subtext > .hnuser', { text({ text }) { post.by += text } })
    .on('.subtext > .age', { text({ text }) { post.timeAgo += text } })
    .on('.subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) post.descendants = parseInt(text, 10) } })
    .transform(response)).then(() => {
      data.dispatchEvent(new CustomEvent('data', { detail: post }))
      iter.return();
    });

  for await (const { detail: post } of iter) {
    post.type = 'story';
    if (!post.by) { // No users post this = job ads
      post.type = 'job';
    }
    yield post as Post;
  }
}

async function getComments(id: number): Promise<Post> {
  try {
    const url = new ParamsURL('/item', { id }, API).href;
    const body = await fetch(url)
    return comments(body);
  } catch (err) {
    console.error(err)
    throw err;
  }
}

export { getComments as comments }

type _Stack = { _stack?: string[] };

async function comments(response: Response) {
  const post: Partial<Post> = { title: '', score: 0, by: '', timeAgo: '', descendants: 0 }

  await consume(new HTMLRewriter()
    .on('.fatitem .athing[id]', {
      element(el) { post.id = Number(el.getAttribute('id')) },
    })
    .on('.fatitem .title a.storylink', {
      element(link) { post.url = link.getAttribute('href') || undefined; },
      text({ text }) { post.title += text },
    })
    // FIXME: concatenate text before parseInt jtbs..
    .on('.fatitem .subtext > .score', { text({ text }) { if (text?.match(/^\d/)) post.score = parseInt(text, 10) } })
    .on('.fatitem .subtext > .hnuser', { text({ text }) { post.by += text } })
    .on('.fatitem .subtext > .age', { text({ text }) { post.timeAgo += text } })
    .on('.fatitem .subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) post.descendants = parseInt(text, 10) } })
    .transform(response.clone())
  );

  // Crawl comment tree (well, technically it's just table rows...)
  let comment!: Partial<AComment> & _Stack;

  const data = new EventTarget();
  const iter = eventTargetToAsyncIter<CustomEvent<AComment>>(data, 'data');

  // No `await` here, b/c we're yielding data as it streams in (via event target).
  consume(new HTMLRewriter()
    .on('.comment-tree .athing.comtr[id]', {
      element(thing) {
        if (comment) {
          delete comment._stack;
          data.dispatchEvent(new CustomEvent('data', { detail: comment }))
        }

        const id = Number(thing.getAttribute('id'))
        comment = { id, type: 'comment', by: '', timeAgo: '', text: '<p>', _stack: ['p'] };
      },
    })
    .on('.comment-tree .athing.comtr[id] .ind > img[src="s.gif"][width]', {
      element(el) { 
        comment.level = Number(el.getAttribute('width')) / 40 
      }
    })
    .on('.comment-tree .athing.comtr[id] .hnuser', {
      text({ text }) { comment.by += text }
    })
    .on('.comment-tree .athing.comtr[id] .age', {
      text({ text }) { comment.timeAgo += text }
    })
    .on('.comment-tree .athing.comtr[id] .commtext', <ParsedElementHandler>{
      element(el) { comment.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality; },
      innerHTML(text) { comment.text += text }
    })
    .on('.comment-tree .athing.comtr[id] .comment .reply', { element(el) { el.remove() }})
    .transform(response)).then(() => {
      if (comment) {
        delete comment._stack;
        data.dispatchEvent(new CustomEvent('data', { detail: comment }))
      }
      iter.return();
    })
    // .on('.comment-tree .athing.comtr[id] .commtext *', {
    //   element(el: Element) {
    //     const attrs = [...(<any>el).attributes].map(([n, v]) => `${n}="${v}"`).join(' ');
    //     comment.text += `<${el.tagName}${attrs ? ' ' + attrs : ''}>`;
    //     comment._stack?.unshift(el.tagName)
    //   },
    //   text({ lastInTextNode }) {
    //     let pop: string | undefined; if (lastInTextNode && (pop = comment._stack?.shift())) {
    //       comment.text += `</${pop}>`;
    //     }
    //   }
    // })

  post.kids = aMap(iter, e => {
    const comment = e.detail;
    if (comment.text === '<p>') {
      comment.deleted = true;
      comment.text = ' [flagged] ';
    }
    return comment;
  });

  return post as Post;
};

/** Consumes a `Response` body while discarding all chunks. 
 *  Useful for pulling data into `HTMLRewriter`. */
async function consume(r: Response) {
  const reader = r.body!.getReader()
  while (!(await reader.read()).done);
}

// class AsyncIterableArray<T> extends Array<T> {
//   async *[Symbol.asyncIterator]() {
//     for (const x of this) yield x;
//   }
// }

// function stackComments(comments: AsyncIterableArray<Comment>): AsyncIterableArray<Comment> {
//   for (const [i, comment] of comments.entries()) {
//     const { level } = comment;

//     if (level > 0) {
//       let index = i, parentComment: Comment;
//       do {
//         parentComment = comments[--index];
//       } while (parentComment.level >= level);
//       (parentComment.kids as AsyncIterableArray<Comment>).push(comment);
//     }
//   }
//   return comments.filter(comment => comment.level === 0) as AsyncIterableArray<Comment>;
// }

// class LoggingHTMLRewriter extends HTMLRewriter {
//   on(x: string, h: ElementHandler) {
//     return super.on(x, {
//       text(n) { 
//         if (h.text) {
//           const textS = n.text?.substr(0, 80).trim()
//           console.log(`#Text { ${textS.length >= 77 ? (textS + '...') : textS } } lastInTextNode=${n.lastInTextNode}`)
//           h.text(n);
//         } 
//       },
//       element(n) { 
//         if (h.element) {
//           // const attributes = [...n.attributes as any];
//           // const attrS = [attributes as any].map(([k, v]) => `${k}="${v}"`).join(' ')
//           console.log(`<${n.tagName}${/*attrS ? (' ' + attrS) : ''*/''}>`)
//           h.element(n as any) 
//         }
//       },
//       comments(arg) { h.comments?.(arg) },
//     });
//   }
// }