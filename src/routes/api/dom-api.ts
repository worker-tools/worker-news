import { ParamsURL } from '@worker-tools/json-fetch';
import { asynciterify } from 'src/vendor/asynciterify';
import { Post, Comment, Quality } from './interface';

class DataEvent<T = any> extends Event {
  data: T; 
  constructor(data: T) { 
    super('data'); 
    this.data = data;
  }
}

async function consume(r: Response) {
  const reader = r.body!.getReader()
  while (!(await reader.read()).done);
}

const API = 'https://news.ycombinator.com'

async function* getStories(p = 1) {
  try {
    const url = new ParamsURL('/news', { p }, API).href;
    const body = await fetch(url);
    yield* stories(body);
  } catch (err) {
    console.error(err)
    throw err;
  }
}

export { getStories as stories }

class AsyncIterableArray<T> extends Array<T> {
  async *[Symbol.asyncIterator]() {
    for (const x of this) yield x;
  }
}

function parseAttrs(el: Element) {
  return [...(<any>el).attributes].map(([n, v]) => `${n}="${v}"`).join(' ');
}

async function* stories(response: Response) {
  let post!: Partial<Post>;

  const et = new EventTarget();
  const it = asynciterify<DataEvent<Post>>(et, 'data')

  consume(new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        const id = Number(el.getAttribute('id'))
        if (post) et.dispatchEvent(new DataEvent(post as Post))
        post = { id, title: '', score: 0, by: '', timeAgo: '', descendants: 0 }
      }
    })
    .on('.athing[id] .title a.storylink', {
      element(link) {
        post.url = link?.getAttribute('href') || undefined;
      },
      text({ text }) { post.title += text },
    })
    // // FIXME: concatenate text before parseInt jtbs..
    .on('.subtext > .score', { text({ text }) { if (text?.match(/^\d/)) post.score = parseInt(text, 10) } })
    .on('.subtext > .hnuser', { text({ text }) { post.by += text } })
    .on('.subtext > .age', { text({ text }) { post.timeAgo += text } })
    .on('.subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) post.descendants = parseInt(text, 10) } })
    .transform(response)).then(() => {
      // Dispatch last post
      et.dispatchEvent(new DataEvent(post as Post))
      // Tell async iterable to stop
      it.return();
    });

  for await (const { data: post } of it) {
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

  const et = new EventTarget();
  const it = asynciterify<DataEvent<Post>>(et, 'data')

  await consume(new HTMLRewriter()
    .on('.fatitem .athing[id]', {
      element(el) {
        post.id = Number(el.getAttribute('id'))
      },
    })
    .on('.fatitem .title a.storylink', {
      element(link) { post.url = link?.getAttribute('href') || undefined; },
      text({ text }) { post.title += text },
    })
    // FIXME: concatenate text before parseInt jtbs..
    .on('.fatitem .subtext > .score', { text({ text }) { if (text?.match(/^\d/)) post.score = parseInt(text, 10) } })
    .on('.fatitem .subtext > .hnuser', { text({ text }) { post.by += text } })
    .on('.fatitem .subtext > .age', { text({ text }) { post.timeAgo += text } })
    .on('.fatitem .subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) post.descendants = parseInt(text, 10) } })
    .transform(response.clone())
  );

  // Comment tree
  let comment!: Partial<Comment> & _Stack;
  consume(new HTMLRewriter()
    .on('.comment-tree .athing.comtr[id]', {
      element(thing) {
        delete comment?._stack;
        if (comment) et.dispatchEvent(new DataEvent(comment as Comment))
        const id = Number(thing.getAttribute('id'))
        comment = {
          type: 'comment',
          id,
          by: '',
          timeAgo: '',
          text: '<p>',
          _stack: ['p'],
        };
      },
    })
    .on('.comment-tree .athing.comtr[id] img[src*="s.gif"][width]', {
      element(el) { comment.level = Number(el.getAttribute('width')) / 40 }
    })
    .on('.comment-tree .athing.comtr[id] .hnuser', {
      text({ text }) { comment.by += text }
    })
    .on('.comment-tree .athing.comtr[id] .age', {
      text({ text }) { comment.timeAgo += text }
    })
    .on('.comment-tree .athing.comtr[id] .commtext *', {
      element(el: Element) {
        const attrs = parseAttrs(el)
        comment.text += `<${el.tagName}${attrs ? ' ' + attrs : ''}>`;
        comment._stack?.unshift(el.tagName)
      },
      text({ lastInTextNode }) {
        let pop: string | undefined; if (lastInTextNode && (pop = comment._stack?.shift())) {
          comment.text += `</${pop}>`;
        }
      }
    })
    .on('.comment-tree .athing.comtr[id] .commtext', {
      text({ text }) {
        comment.text += text;
      },
      element(el) {
        comment.quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality;
      },
    })
    .transform(response)).then(() => {
      delete comment._stack;
      et.dispatchEvent(new DataEvent(comment as Comment))
      it.return();
    });

  // FIXME
  post.kids = aMap(asynciterify<DataEvent<Comment>>(et, 'data'), e => e.data);

  return post as Post;
};

async function* aMap<A, B>(as: AsyncIterable<A>, f: (a: A) => B) {
  for await (const a of as) yield f(a)
}

function stackComments(comments: AsyncIterableArray<Comment>): AsyncIterableArray<Comment> {
  for (const [i, comment] of comments.entries()) {
    const { level } = comment;

    if (level > 0) {
      let index = i, parentComment: Comment;
      do {
        parentComment = comments[--index];
      } while (parentComment.level >= level);
      (parentComment.kids as AsyncIterableArray<Comment>).push(comment);
    }
  }
  return comments.filter(comment => comment.level === 0) as AsyncIterableArray<Comment>;
}
