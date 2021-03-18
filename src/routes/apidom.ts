import { ParamsURL } from '@worker-tools/json-fetch';
import { parseHTML, DOMParser } from 'linkedom';

const from = Array.from.bind(Array);

export function* stories(body: string) {
  if (!/[<>]/.test(body)) {
    throw new Error('Not HTML content');
  } else {
    const { document } = parseHTML(body);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // const posts = [];
    const nodeList = has($$('td table'), 'td.title')[0]?.querySelectorAll('tr');
    const rows = from(nodeList).filter(r => r.querySelector('td.title, td.subtext'));

    for (let i = 0, l = rows.length; i < l; i += 2) {
      const row1 = rows[i];
      const row2 = rows[i + 1];
      if (!row2.children) break;

      const voteLink = row1.querySelector('td a[id^=up]');
      let id = (voteLink ? (voteLink.getAttribute('id')?.match(/\d+/) || [])[0] : null);

      const cell1 = row1.querySelector('td.title');
      const link = cell1?.querySelector<HTMLAnchorElement>('a:first-of-type');
      const title = link?.textContent?.trim();
      const url = link?.getAttribute('href');
      const domain = url && tryURL(url)?.origin;

      const cell2 = row2.querySelector('td.subtext');
      const points = Number(cell2?.querySelector('span[id^=score]')?.textContent);
      const userLink = cell2?.querySelector('a[href^=user]');
      const user = userLink?.textContent || null;
      const postLinks = cell2?.querySelectorAll('a[href^=item]');
      const timeAgoLink = postLinks?.[0];
      let time_ago = timeAgoLink?.textContent?.trim();
      const commentsCountLink = postLinks?.[1];
      const comments_count = commentsCountLink && /\d/.test(commentsCountLink.textContent || '')
        ? Number(commentsCountLink.textContent)
        : 0;

      let type = 'link';
      if (url?.match(/^item/i)) type = 'ask';
      if (!user) { // No users post this = job ads
        type = 'job';
        id = (url?.match(/\d+/) || [])[0];
        time_ago = cell2?.innerHTML.trim();
      }

      yield { id, title, url, domain, points, user, time_ago, comments_count, type }
    }
  }
}

function cleanContent(html: string) {
  // yea yea regex to clean HTML is lame yada yada
  html = html.replace(/">-+<\/font/ig, '"></font'); // remove weird invisible dashes at the end of comments
  html = html.replace(/<\/?font[^<>]*>/ig, ''); // remove font tags
  html = html.replace(/<\/p>/ig, ''); // remove trailing </p>s
  if (!html.match(/^<p>/i)) html = '<p>' + html; // prepend <p>
  return html;
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

function processComments(rows: Element[]) {
  let comments: Comment[] = [];

  // Create flat array of comments
  for (let i = 0, l = rows.length; i < l; i++) {
    const row = rows[i];
    let level = 0;
    const levelRow = row.querySelector('img[src*="s.gif"]');
    const metadata = from(row.querySelectorAll('.comhead')).filter(c => c.querySelector('a'))[0] as Element | null;
    let user = '';
    let time_ago = '';
    let id = '';
    let quality = '';
    let content = '[deleted]';

    if (levelRow?.hasAttribute('width')) {
      level = Number(levelRow.getAttribute('width')) / 40;
    }

    if (metadata) {
      const userLink = metadata.querySelector('.hnuser');
      user = userLink?.textContent || '';
      time_ago = userLink?.nextElementSibling?.textContent?.replace('|', '').trim() || '';
      id = (metadata?.querySelector('a[href^=item]')?.getAttribute('href')?.match(/\d+/) || [])[0];
      const commentEl = row.querySelector('.comment');
      const replyLink = commentEl?.querySelector('a[href^=reply]');

      // Sometimes the markup becomes nice, and 'reply' link is not part of the comments
      // Remove 'reply' link
      if (replyLink?.parentElement?.tagName === 'U') {
        replyLink.parentElement?.remove();
      } else {
        replyLink?.remove();
      }

      const commtextEl = commentEl?.querySelector('.commtext');
      const classList = commtextEl?.classList;
      classList?.remove('commtext')
      quality = classList?.value || '';
      content = commtextEl?.innerHTML || '[deleted]'
      content = '<p>' + content;

      // const doc = new DOMParser().parseFromString(content, 'text/html')
      // for (const p of from(doc.querySelectorAll('p')) as HTMLParagraphElement[]) {
      //   if (p.textContent?.startsWith('>')) {
      //     const bq = doc.createElement('blockquote')
      //     bq.textContent = p.innerHTML.substr(2);
      //     p.outerHTML = bq.outerHTML;
      //   }
      // }
      // content = doc.toString();
    }

    comments.push({ id, level, user, time_ago, content, quality, comments: [] });
  }

  // Comments are not nested yet, this 2nd loop will nest 'em up
  for (let i = 0, l = comments.length; i < l; i++) {
    let comment = comments[i];
    let level = comment.level;

    if (level > 0) {
      let index = i, parentComment;
      do {
        parentComment = comments[--index];
      } while (parentComment.level >= level);
      parentComment.comments.push(comment);
    }
  }

  // After that, remove the non-nested ones
  // Q: WHAT?
  comments = comments.filter((comment) => comment.level === 0);

  return comments;
};

export interface Poll {
  item: string | undefined,
  points: number,
}

function nextAll(initialEl?: Element | null, selectors?: string) {
  const res: Element[] = [];
  let el = initialEl?.nextElementSibling;
  while (el) {
    if (!selectors) res.push(el)
    else if (el.matches(selectors)) res.push(el)
    el = el.nextElementSibling
  }
  return res;
}

function has(els: Element[] | NodeListOf<Element> | null, selectors: string) {
  return els ? from(els).filter(el => !!el.querySelector(selectors)) : []
}

function notHas(els: Element[] | NodeListOf<Element>, selectors: string) {
  return from(els).filter(el => !el.querySelector(selectors))
}

function first(els?: Element[] | NodeListOf<Element>) {
  return els && els[0];
}
function last(els?: Element[] | NodeListOf<Element>) {
  return els && els[els.length - 1];
}

const API = 'https://news.ycombinator.com'
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

const tryURL = (url: string): URL | null => {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

// class TextCon {
//   obj: { [k: string]: string };
//   prop: string;
//   value = '';
//   constructor(obj: { [k: string]: string }, prop: string) {
//     this.obj = obj;
//     this.prop = prop;
//   }
//   text({ text, lastInTextNode }: { text: string, lastInTextNode: boolean }) {
//     this.value += text;
//     if (lastInTextNode) this.obj[this.prop] = this.value;
//   }
// }

async function consume(r: Response) {
  const reader = r.body!.getReader()
  while (!(await reader.read()).done);
}

async function comments(response: Response) {
  const post: Partial<Post> = { title: '', user: '', time_ago: '' }
  const comments: Partial<Comment>[] = []

  await consume(new HTMLRewriter()
    .on('.fatitem .athing[id]', {
      element(voteLink) {
        post.id = (voteLink.getAttribute('id')?.match(/\d+/) || [])[0] || null;
      },
    })
    .on('.fatitem .title a.storylink', {
      element(link) {
        const url = post.url = link?.getAttribute('href');
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

  try {
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
    // Q: WHAT?
    post.comments = commentsR.filter(comment => comment.level === 0);

    return post as Post;
  } catch (e) { console.error(e.message); throw e }
};

export interface Post {
  id?: string | null,
  title?: string,
  url?: string | null
  domain?: string | null,
  points?: number | null,
  user?: string | null,
  time_ago?: string | null,
  comments_count?: number | null,
  content?: string | null
  poll?: Poll[] | null,
  type?: string,
  comments: Comment[],
  more_comments_id: string | null;
}

export function moreComments(body: string) {
  if (!/[<>]/.test(body)) {
    if (/expired/i.test(body)) {
      throw new Error('Content expired');
    } else {
      throw new Error('Not HTML content');
    }
  } else {
    const { document } = parseHTML(body);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const post: Post = {
      comments: [],
      more_comments_id: null,
    };

    const commentRows = $$('table:not(:has(table)):has(.comment)');
    post.comments = processComments(from(commentRows));

    // Check for 'More' comments (Rare case)
    const more = $('td.title a[href^="/x?"]');
    // Whatever 'fnid' means
    let fnidM = more?.getAttribute('href')?.match(/fnid=(\w+)/);
    if (fnidM) {
      const fnid = fnidM[1];
      post.more_comments_id = fnid;
    }

    return post;
  }
};

export function newComments(body: string) {
  if (!/[<>]/.test(body)) {
    throw new Error('Not HTML content');
  } else {
    const { document } = parseHTML(body);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const commentRows = $$('tr:nth-child(3) tr:has(.comment)');
    return processComments(from(commentRows));
  }
};

export function user(body: string) {
  if (!/[<>]/.test(body)) {
    throw new Error('Not HTML content');
  } else {
    const { document } = parseHTML(body);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const cells = $$('form tr td:odd');
    const id = cells[0].textContent;
    const created = cells[1].textContent;
    const karma = Number(cells[2].textContent);
    const avg = Number(cells[3].textContent);
    const about = cleanContent(cells[4].innerHTML);

    return { id, created, karma, avg, about };
  }
}