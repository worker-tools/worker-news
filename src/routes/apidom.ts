import { ParamsURL } from '@worker-tools/json-fetch';
import { parseHTML, DOMParser } from 'linkedom';

const from = Array.from.bind(Array);

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

async function getStories(p = 1): Promise<Post[]> {
  try {
    const url = new ParamsURL('/news', { p }, API).href;
    const body = await fetch(url);
    return stories(body);
  } catch (err) {
    console.error(err)
    throw err;
  }
}

export { getStories as stories }

async function stories(response: Response) {
  const posts: Partial<Post>[] = [];

  await consume(new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        const id = Number(el.getAttribute('id'))
        console.log(id)
        posts.unshift({ id, title: '', user: '', time_ago: '' });
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
    .on('.subtext > .score', { text({ text }) { posts[0].points ||= parseInt(text, 10) } })
    .on('.subtext > .hnuser', { text({ text }) { posts[0].user += text } })
    .on('.subtext > .age', { text({ text }) { posts[0].time_ago += text } })
    .on('.subtext > a[href^=item]', { text({ text }) { posts[0].comments_count ||= parseInt(text, 10) } })
    .transform(response));

  const postsX = posts.map(post => {
    post.type = 'story';
    if (post.url?.match(/^item/i)) post.type = 'ask';
    if (!post.user) { // No users post this = job ads
      post.type = 'job';
    }
    return post as Post;
  })

  return postsX;
}

export interface Comment {
  id: number,
  level: number,
  user: string,
  time_ago: string,
  content: string,
  quality: string,
  comments: Comment[]
  _stack: string[]
}

export interface Poll {
  item: string | undefined,
  points: number,
}

async function getComments(id: number | string): Promise<Post> {
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

async function comments(response: Response) {
  const post: Partial<Post> = { title: '', user: '', time_ago: '' }
  const comments: Partial<Comment>[] = []

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
    .on('.fatitem .subtext > .score', { text({ text }) { post.points ||= parseInt(text, 10) } })
    .on('.fatitem .subtext > .hnuser', { text({ text }) { post.user += text } })
    .on('.fatitem .subtext > .age', { text({ text }) { post.time_ago += text } })
    .on('.fatitem .subtext > a[href^=item]', { text({ text }) { post.comments_count ||= parseInt(text, 10) } })
    .on('.comment-tree .athing.comtr[id]', {
      element(thing) {
        const id = Number(thing.getAttribute('id'))
        delete comments[0]?._stack;
        comments.unshift({ id, user: '', time_ago: '', content: '<p>', _stack: ['p'], comments: [] });
      },
    })
    .on('.comment-tree .athing.comtr[id] img[src*="s.gif"][width]', {
      element(el) { comments[0].level = Number(el.getAttribute('width')) / 40 }
    })
    .on('.comment-tree .athing.comtr[id] .hnuser', {
      text({ text }) { comments[0].user += text }
    })
    .on('.comment-tree .athing.comtr[id] .age', {
      text({ text }) { comments[0].time_ago += text }
    })
    .on('.comment-tree .athing.comtr[id] .commtext', {
      text({ text }) {
        comments[0].content += text;
      },
      element(el) {
        comments[0].quality = el.getAttribute('class')?.substr('commtext '.length);
      },
    })
    .on('.comment-tree .athing.comtr[id] .commtext *', {
      text({ lastInTextNode }: Text) {
        let pop; if (lastInTextNode && (pop = comments[0]._stack?.pop())) {
          comments[0].content += `</${pop}>`;
        }
      },
      element(el: Element) {
        const attrs = [...(<any>el.attributes)].map(([n, v]) => `${n}="${v}"`).join(' ');
        comments[0].content += `<${el.tagName}${attrs ? ' ' + attrs : ''}>`;
        comments[0]._stack?.push(el.tagName)
      },
    })
    .transform(response));

  delete comments[0]?._stack;

  const commentsR = comments.reverse() as Comment[];

  for (const [i, comment] of commentsR.entries()) {
    const { level } = comment;

    if (level > 0) {
      let index = i, parentComment: Comment;
      do {
        parentComment = commentsR[--index];
      } while (parentComment.level >= level);
      parentComment.comments.push(comment);
    }
  }

  // After that, remove the non-nested ones
  post.comments = commentsR.filter(comment => comment.level === 0);

  return post as Post;
};

export interface Post {
  id: number | null,
  title: string,
  url: string
  domain: string | null,
  points: number | null,
  user: string | null,
  time_ago: string | null,
  comments_count: number | null,
  content: string | null
  poll?: Poll[] | null,
  type: string,
  comments: Comment[],
  more_comments_id?: string | null;
}

// export function moreComments(body: string) {
//   if (!/[<>]/.test(body)) {
//     if (/expired/i.test(body)) {
//       throw new Error('Content expired');
//     } else {
//       throw new Error('Not HTML content');
//     }
//   } else {
//     const { document } = parseHTML(body);
//     const $ = document.querySelector.bind(document);
//     const $$ = document.querySelectorAll.bind(document);

//     const post: Post = {
//       comments: [],
//       more_comments_id: null,
//     };

//     const commentRows = $$('table:not(:has(table)):has(.comment)');
//     post.comments = processComments(from(commentRows));

//     // Check for 'More' comments (Rare case)
//     const more = $('td.title a[href^="/x?"]');
//     // Whatever 'fnid' means
//     let fnidM = more?.getAttribute('href')?.match(/fnid=(\w+)/);
//     if (fnidM) {
//       const fnid = fnidM[1];
//       post.more_comments_id = fnid;
//     }

//     return post;
//   }
// };

// export function newComments(body: string) {
//   if (!/[<>]/.test(body)) {
//     throw new Error('Not HTML content');
//   } else {
//     const { document } = parseHTML(body);
//     const $ = document.querySelector.bind(document);
//     const $$ = document.querySelectorAll.bind(document);

//     const commentRows = $$('tr:nth-child(3) tr:has(.comment)');
//     return processComments(from(commentRows));
//   }
// };

// export function user(body: string) {
//   if (!/[<>]/.test(body)) {
//     throw new Error('Not HTML content');
//   } else {
//     const { document } = parseHTML(body);
//     const $ = document.querySelector.bind(document);
//     const $$ = document.querySelectorAll.bind(document);

//     const cells = $$('form tr td:odd');
//     const id = cells[0].textContent;
//     const created = cells[1].textContent;
//     const karma = Number(cells[2].textContent);
//     const avg = Number(cells[3].textContent);
//     const about = cleanContent(cells[4].innerHTML);

//     return { id, created, karma, avg, about };
//   }
// }
