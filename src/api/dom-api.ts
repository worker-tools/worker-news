/**
 * A web scraping (DOM-based) implementation of the Hacker News API.
 */
import { ParamsURL } from '@worker-tools/json-fetch';
import { ResolvablePromise } from '@worker-tools/resolvable-promise';
import { unescape } from 'html-escaper';
import { AsyncQueue } from '../vendor/async-queue.ts';

import { AThing, APost, AComment, APollOpt, Quality, Stories, AUser, StoriesParams, StoriesData, ThreadsData } from './interface.ts';
import { aMap } from './iter.ts';
import { blockquotify } from './rewrite-content.ts';

const HN = 'https://news.ycombinator.com'

const storiesToPaths = {
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
const endToTagClose = (endTag: EndTag) => `</${endTag.name}>`;
const elToDate = (el: Element) => new Date(unescape(el.getAttribute('title') ?? '') + '.000+00:00')
const r2err = (body: Response) => { throw Error(`${body.status} ${body.statusText} ${body.url}`) }

export async function stories(params: StoriesParams, type = Stories.TOP) {
  const pathname = storiesToPaths[type];
  const url = new ParamsURL(pathname, params, HN);
  const body = await fetch(url.href)
  if (!body.ok) r2err(body)
  return storiesGenerator(body);
}

// function mkSource<T>(response: Response, rewriter: HTMLRewriter): UnderlyingSource<T> {
//   let reader: ReadableStreamDefaultReader;
//   return {
//     start() {
//       reader = rewriter.transform(response).body!.getReader()
//     },
//     async pull() {
//       const { value } = await reader.read()
//       console.log('pulled', value?.byteLength)
//     },
//   }
// }

function storiesGenerator(response: Response): Promise<StoriesData> {
  let post: Partial<APost>;

  const moreLink = new ResolvablePromise<string>();

  // const iter = new AsyncQueue<Partial<APost>>({
  //   underlyingSource: mkSource(response, new HTMLRewriter()
  //     .on('.athing[id]', {
  //       element(el) {
  //         if (post) iter.enqueue(post);

  //         const id = Number(el.getAttribute('id'));
  //         console.log('element!', id)
  //         post = { id, title: '', score: 0, by: '', descendants: 0, story: post?.story };
  //       }
  //     })
  //     .on('.athing[id] > .title > a.titlelink', {
  //       element(link) { post.url = unescape(link.getAttribute('href') ?? '') },
  //       text({ text }) { post.title += text },
  //     })
  //     // // FIXME: concatenate text before parseInt jtbs..
  //     .on('.subtext > .score', {
  //       text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
  //     })
  //     .on('.subtext > .hnuser', {
  //       text({ text }) { post.by += text }
  //     })
  //     .on('.subtext > .age[title]', {
  //       element(el) { post.time = elToDate(el) }
  //     })
  //     .on('.subtext > a[href^=item]', {
  //       text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
  //     })
  //     .on('.morelink[href]', {
  //       element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) }
  //     })
  //     .on('.yclinks', {
  //       element() {
  //         if (post) iter.enqueue(post)
  //         iter.close();
  //       }
  //     })
  //   ),
  // });

  // let reader!: ReadableStreamDefaultReader;
  // const iter = new AsyncQueue<Partial<APost>>({
  //   underlyingSource: {
  //     start(controller) {
  //       const rewriter = new HTMLRewriter()
  //         .on('.athing[id]', {
  //           element(el) {
  //             if (post) controller.enqueue(post);

  //             const id = Number(el.getAttribute('id'));
  //             console.log('element!', id)
  //             post = { id, title: '', score: 0, by: '', descendants: 0, story: post?.story };
  //           }
  //         })
  //         .on('.athing[id] > .title > a.titlelink', {
  //           element(link) { post.url = unescape(link.getAttribute('href') ?? '') },
  //           text({ text }) { post.title += text },
  //         })
  //         // // FIXME: concatenate text before parseInt jtbs..
  //         .on('.subtext > .score', {
  //           text({ text }) { if (text?.trimStart().match(/^\d/)) post.score = parseInt(text, 10) }
  //         })
  //         .on('.subtext > .hnuser', {
  //           text({ text }) { post.by += text }
  //         })
  //         .on('.subtext > .age[title]', {
  //           element(el) { post.time = elToDate(el) }
  //         })
  //         .on('.subtext > a[href^=item]', {
  //           text({ text }) { if (text?.trimStart().match(/^\d/)) post.descendants = parseInt(text, 10) }
  //         })
  //         .on('.morelink[href]', {
  //           element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) }
  //         })
  //         .on('.yclinks', {
  //           element() {
  //             if (post) controller.enqueue(post)
  //             controller.close();
  //           }
  //         })
  //       reader = rewriter.transform(response).body!.getReader()
  //     },
  //     async pull() {
  //       const { value } = await reader.read()
  //       console.log('pulled', value?.byteLength)
  //     },
  //   },
  // });

  const iter = new AsyncQueue<Partial<APost>>()
  const rewriter = new HTMLRewriter()
    .on('.athing[id]', {
      element(el) {
        if (post) iter.enqueue(post);

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
        if (post) iter.enqueue(post)
        iter.return();
      }
    })

  rewriter.transform(response).body!.pipeTo(new WritableStream())
    .then(() => iter.return())
    .then(() => moreLink.resolve(''))
    .catch(err => iter.throw(err));

  return Promise.resolve({
    items: aMap(iter, post => {
      console.log(response.url, iter.size)
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

function scrapeComments(rewriter: HTMLRewriter, iter: AsyncQueue<Partial<AComment>>, prefix = '') {
  let comment!: Partial<AComment>;

  return rewriter
    .on(`${prefix} .athing.comtr[id]`, {
      element(thing) {
        if (comment) iter.enqueue(comment);
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
        el.onEndTag(end => { comment.text += endToTagClose(end) })
      }
    })
    .on(`${prefix} .athing.comtr[id] .comment .reply`, {
      element(el) { el.remove() }
    })
    .on('.yclinks', {
      element() {
        if (comment) iter.enqueue(comment)
        iter.return()
      }
    })
}

async function commentsGenerator(response: Response) {
  const post: Partial<APost> = { title: '', score: 0, by: '', descendants: 0, text: '', storyTitle: '', dead: true };
  let pollOpt: Partial<APollOpt>;

  const comm = new AsyncQueue<Partial<AComment>>();
  const opts = new AsyncQueue<Partial<APollOpt>>();

  const postPromise = new ResolvablePromise<Partial<APost>>();
  const moreLink = new ResolvablePromise<string>();

  // console.log(response.status, response.url, ...response.headers, (await response.clone().arrayBuffer()).byteLength)

  const rewriter = new HTMLRewriter()
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
        el.onEndTag(end => { post.text += endToTagClose(end) });
      }
    })
    // Poll: item?id=30210378
    .on('.fatitem > tr:nth-child(6) tr.athing[id]', {
      element(el) {
        post.type = 'poll';

        if (pollOpt) opts.enqueue(pollOpt)
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
        el.onEndTag(end => { post.text += endToTagClose(end) })
      }
    })
    .on('.comment-tree', {
      element() { postPromise.resolve(post) },
    })
    .on('a.morelink[href][rel="next"]', {
      element(el) {
        moreLink.resolve(unescape(el.getAttribute('href') ?? ''))
      },
    })

  scrapeComments(rewriter, comm, '.comment-tree');

  rewriter.transform(response).body!.pipeTo(new WritableStream())
    .then(() => (comm.return(), opts.return()))
    .then(() => moreLink.resolve(''))
    .catch(err => (comm.throw(err), opts.throw(err)));

  // wait for `post` to be populated
  await postPromise;

  if (post.text?.trim()) {
    post.text = await blockquotify('<p>' + post.text)
  } else delete post.text

  post.parts = aMap(opts, pollOpt => {
    pollOpt.poll = post.id!;
    pollOpt.by = post.by!;
    pollOpt.dead = post.dead;
    return fixPollOpt(pollOpt);
  })

  post.kids = aMap(comm, comment => {
    comment.story = post.id;
    comment.dead = post.dead;
    return fixComment(comment)
  });

  post.moreLink = moreLink;

  // console.log(post)

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
  const comm = new AsyncQueue<Partial<AComment>>();

  const moreLink = new ResolvablePromise<string>();
  const rewriter = new HTMLRewriter()
    .on('a.morelink[href][rel="next"]', {
      element(el) { moreLink.resolve(unescape(el.getAttribute('href') ?? '')) }
    });

  scrapeComments(rewriter, comm, '');

  rewriter.transform(response).body!.pipeTo(new WritableStream())
    .then(() => comm.return())
    .then(() => moreLink.resolve(''))
    .catch(e => comm.throw(e));

  return Promise.resolve({
    items: aMap(comm, comment => {
      return fixComment(comment)
    }),
    moreLink,
  })
};

export async function user(id: string): Promise<AUser> {
  const url = new ParamsURL('user', { id }, HN);
  const response = await fetch(url.href);
  if (!response.ok) r2err(response);

  const user: Partial<AUser> = { id, about: '', submitted: [] };

  const rewriter = new HTMLRewriter()
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
        el.onEndTag(end => { user.about += endToTagClose(end) })
      }
    })

  await rewriter.transform(response).body!.pipeTo(new WritableStream())

  if (user.about?.trim()) user.about = '<p>' + user.about.trim();

  return user as AUser;
}
