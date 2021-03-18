import { ParamsURL } from '@worker-tools/json-fetch';
import { Post, Comment, Quality } from './interface';
// import { parseHTML, DOMParser } from 'linkedom';

// const from = Array.from.bind(Array);

const tryURL = (url: string): URL | null => {
  try {
    return new URL(url);
  } catch {
    return null;
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
    yield* await stories(body);
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

// async function* listToAsyncIter<T>(xs: T[]): AsyncIterableIterator<T> {
//   for (const x of xs) yield x;
// }

// async function* G<T>(): AsyncGenerator<T | undefined, void, T> {
//   let x: T | undefined;
//   do {
//     x = yield x;
//   } while(x)
// }

function parseAttrs(el: Element) {
  return [...(<any>el).attributes].map(([n, v]) => `${n}="${v}"`).join(' ');
}

async function stories(response: Response) {
  const posts = new AsyncIterableArray<Partial<Post>>();

  // const et = new EventTarget();

  await consume(new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        const id = Number(el.getAttribute('id'))
        // et.dispatchEvent(new CustomEvent('post++', { detail: posts[0] }))
        posts.unshift({ id, title: '', score: 0, by: '', timeAgo: '', descendants: 0 });
      }
    })
    .on('.athing[id] .title a.storylink', {
      element(link) {
        const url = posts[0].url = link?.getAttribute('href') || undefined;
        posts[0].domain = url && tryURL(url)?.hostname;
      },
      text({ text }) { posts[0].title += text },
    })
    // // FIXME: concatenate text before parseInt jtbs..
    .on('.subtext > .score', { text({ text }) { if (text?.match(/^\d/)) posts[0].score = parseInt(text, 10) } })
    .on('.subtext > .hnuser', { text({ text }) { posts[0].by += text } })
    .on('.subtext > .age', { text({ text }) { posts[0].timeAgo += text } })
    .on('.subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) posts[0].descendants = parseInt(text, 10) } })
    .transform(response));

  const postsX = posts.reverse().map(post => {
    post.type = 'story';
    // if (post.url?.match(/^item/i)) post.type = 'ask';
    if (!post.by) { // No users post this = job ads
      post.type = 'job';
    }
    return post as Post;
  }) as AsyncIterableArray<Post>

  // et.addEventListener('post++')

  return postsX;
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
  const comments = new AsyncIterableArray<Partial<Comment> & _Stack>();

  await consume(new HTMLRewriter()
    .on('.fatitem .athing[id]', {
      element(el) {
        post.id = Number(el.getAttribute('id'))
      },
    })
    .on('.fatitem .title a.storylink', {
      element(link) {
        const url = post.url = link?.getAttribute('href') || undefined;
        post.domain = url && tryURL(url)?.hostname;
      },
      text({ text }) { post.title += text },
    })
    // FIXME: concatenate text before parseInt jtbs..
    .on('.fatitem .subtext > .score', { text({ text }) { if (text?.match(/^\d/)) post.score = parseInt(text, 10) } })
    .on('.fatitem .subtext > .hnuser', { text({ text }) { post.by += text } })
    .on('.fatitem .subtext > .age', { text({ text }) { post.timeAgo += text } })
    .on('.fatitem .subtext > a[href^=item]', { text({ text }) { if (text?.match(/^\d/)) post.descendants = parseInt(text, 10) } })
    // Comment tree
    .on('.comment-tree .athing.comtr[id]', {
      element(thing) {
        const id = Number(thing.getAttribute('id'))
        delete comments[0]?._stack;
        comments.unshift({ 
          type: 'comment', 
          id, 
          by: '', 
          timeAgo: '', 
          text: '<p>', 
          _stack: ['p'], 
          kids: new AsyncIterableArray(),
        });
      },
    })
    .on('.comment-tree .athing.comtr[id] img[src*="s.gif"][width]', {
      element(el) { comments[0].level = Number(el.getAttribute('width')) / 40 }
    })
    .on('.comment-tree .athing.comtr[id] .hnuser', {
      text({ text }) { comments[0].by += text }
    })
    .on('.comment-tree .athing.comtr[id] .age', {
      text({ text }) { comments[0].timeAgo += text }
    })
    .on('.comment-tree .athing.comtr[id] .commtext *', {
      element(el: Element) {
        const attrs = parseAttrs(el)
        comments[0].text += `<${el.tagName}${attrs ? ' ' + attrs : ''}>`;
        comments[0]._stack?.unshift(el.tagName)
      },
      text({ lastInTextNode }) {
        let pop: string | undefined; if (lastInTextNode && (pop = comments[0]._stack?.shift())) {
          comments[0].text += `</${pop}>`;
        }
      }
    })
    .on('.comment-tree .athing.comtr[id] .commtext', {
      text({ text }) {
        comments[0].text += text;
      },
      element(el) {
        comments[0].quality = el.getAttribute('class')?.substr('commtext '.length).trim() as Quality;
      },
    })
    .transform(response));

  delete comments[0]?._stack;

  post.kids = stackComments(comments.reverse() as AsyncIterableArray<Comment>)

  return post as Post;
};

export function stackComments(comments: AsyncIterableArray<Comment>): AsyncIterableArray<Comment> {
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
