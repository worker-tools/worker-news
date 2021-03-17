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
  id: string,
  level: number,
  user: any,
  time_ago: string,
  content: string,
  quality: string,
  comments: Comment[]
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
    const body = await fetch(url).then(x => x.text());
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

function comments(body: string) {
  if (!/[<>]/.test(body)) {
    throw new Error('Not HTML content');
  } else {
    const { document } = parseHTML(body);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const table1 = has($$('td table'), 'td.title,textarea')[0];
    const voteLink = table1?.querySelector('td a[id^=up]');
    let id = (voteLink?.getAttribute('id')?.match(/\d+/) || [])[0] || null;
    const cell1 = from(table1?.querySelectorAll('td.title') ?? []).filter(c => c.querySelector('a'))[0] as Element | undefined;

    let link, title, url, domain, points, user, time_ago, comments_count;
    let content: string | null = null;
    let poll: Poll[] | null = null;
    let type = 'link';

    if (cell1) {
      link = cell1.querySelector('a')
      title = link?.textContent?.trim();
      url = link?.getAttribute('href');
      // domain = (cell1?.querySelector('.comhead')?.textContent?.match(/\(\s?([^()]+)\s?\)/i) || [, null])[1];
      domain = url && tryURL(url)?.origin;

      const cell2 = table1?.querySelector('td.subtext');
      points = parseInt(cell2?.querySelector('.score')?.textContent ?? '', 10);
      const userLink = cell2?.querySelector('.hnuser');
      user = userLink?.textContent || null;
      time_ago = userLink?.nextElementSibling?.textContent?.replace('|', '').trim() || '';
      comments_count = parseInt(last(cell2?.querySelectorAll('a[href^=item]'))?.textContent ?? '', 10) || 0;

      const nextContentRows = notHas(nextAll(cell2?.parentElement, 'tr:not(:empty)'), 'textarea');
      // var questionCell = nextContentRows.eq(0).children('td:not(:empty)');
      const questionCell = nextContentRows[0]?.querySelector('td:not(:empty)');
      let pollCell: Element | null;

      // The content could be question+poll, question or poll.
      if (questionCell && !questionCell.querySelector('td.comment')) {
        content = cleanContent(questionCell.innerHTML);
        pollCell = has(nextContentRows[1]?.querySelectorAll('td:not(:empty)'), 'td.comment')[0];
      } else {
        pollCell = has(nextContentRows[0]?.querySelectorAll('td:not(:empty)'), 'td.comment')[0];
      }

      if (pollCell) {
        poll = from(pollCell.querySelectorAll('td.comment'))?.map(el => ({
          item: el.textContent?.trim(),
          points: Number(el.parentElement?.nextElementSibling?.querySelector('.comhead span')?.textContent)
        }));
      }

      if (url?.match(/^item/i)) type = 'ask';
      if (!user) { // No users post this = job ads
        type = 'job';
        id = (url?.match(/\d+/) || [])[0];
        time_ago = cell2?.textContent?.trim();
      }
    } else {
      const cell = table1?.querySelector('td.default');
      if (cell) {
        const userLink = cell.querySelector('a[href^=user]');
        user = userLink?.textContent,
          time_ago = userLink?.children[0]?.nextSibling?.textContent?.replace('|', '').trim() || '';
        id = (cell?.querySelector('a[href^=item]')?.getAttribute('href')?.match(/\d+/) || [])[0],
          content = cleanContent(table1?.querySelector('.comment')?.innerHTML ?? '');
        type = 'comment';
      }
    }

    const post: Post = {
      id,
      title,
      url,
      domain,
      points,
      user,
      time_ago,
      comments_count,
      content,
      poll,
      type,
      comments: [],
      more_comments_id: null,
    };

    const table2 = nextAll(table1, 'table')[0];

    // If there are comments for a post
    if (table2) {
      const commentRows = table2.querySelectorAll('tr table');
      post.comments = processComments(from(commentRows));

      // Check for 'More' comments (Rare case)
      const more = $('td.title a[href^="/x?"]');
      // Whatever 'fnid' means
      const fnidM = more?.getAttribute('href')?.match(/fnid=(\w+)/);
      if (fnidM) {
        const fnid = fnidM[1];
        post.more_comments_id = fnid;
      }
    }

    return post;
  }
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