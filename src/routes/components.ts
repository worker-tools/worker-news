import { html, HTMLContent } from "@worker-tools/html";
import { formatDistanceToNowStrict } from 'date-fns';

import { Stories } from "../api/interface.ts";
import { location } from '../location.ts';

export const isSafari = (ua?: string | null) => !!ua && /Safari\/\d+/.test(ua) && !/(Chrome|Chromium)\/\d+/.test(ua)

const topSel = (wrap: boolean, content: HTMLContent) => wrap
  ? html`<span class="topsel">${content}</span>`
  : content

export const favicon = (url?: { hostname?: string } | null) => {
  const img = url?.hostname && url.hostname !== location.hostname ? `favicon/${url.hostname}.ico` : `darky18.png`
  return html`<img class="favicon" src="${img}" alt="" width="11" height="11" loading="lazy" />`
}

export const identicon = (by: string, size = 11) => {
  const img = by === 'dang' ? 'y18.gif' : `identicon/${by}.svg`;
  return html`<img class="identicon" src="${img}" alt="" width="${size}" height="${size}" loading="lazy" />`
}

export const cachedWarning = ({ fromCacheDate }: { fromCacheDate?: Date | null }, request: Request) => {
  if (fromCacheDate) {
    const forceUrl = new URL(request.url)
    forceUrl.searchParams.set('force', 'fetch')
    const timeAgo = formatDistanceToNowStrict(fromCacheDate, { addSuffix: true })
    return html`<tr style="height:6px"></tr><tr><td colspan="2"></td><td>Reading offline page. Last updated ${
      timeAgo}. <a href="${forceUrl.href}">Force Refresh</a>.</td></tr><tr style="height:14px"></tr>`
  }
}

export const del = (content: HTMLContent) => navigator.onLine ? content : html`<del>${content}</del>`

export const headerEl = ({ op, id }: { 
  op: Stories | 'item' | 'user' | 'threads', 
  id?: string,  
}) => html`
  <tr>
    <td id="header" bgcolor="#ee9b33">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
        <tbody>
          <tr>
            ${false ? html`<td style="width:80px;padding-right:10px"><span class="pagetop btns">
              <button onclick="window.history.back();this.disabled=true">←</button>
              <button onclick="window.history.forward();this.disabled=true">→</button>
            </span></td>` : null}
            <td style="width:18px;padding-right:4px"><a href="https://workers.tools"><picture style="display:block;height:20px"><source 
                  srcset="darky18.png" media="(prefers-color-scheme: dark)"><img
                  src="y18.png" width="18" height="18"
                  style="border:1px transparent solid;"></picture></a></td>
            <td style="line-height:12pt; height:10px;"><span class="pagetop"><b class="hnname"><a
                    href="news">Worker News</a></b>
                ${topSel(op === Stories.NEW, html`<a href="newest">new</a>`)}
                <!-- | <a href="threads?id=USER">threads</a> -->
                <!-- | <a href="front">past</a> -->
                <!-- | <a href="newcomments">comments</a> -->
                | ${topSel(op === Stories.ASK, html`<a href="ask">ask</a>`)}
                | ${topSel(op === Stories.SHOW, html`<a href="show">show</a>`)}
                | ${topSel(op === Stories.JOB, html`<a href="jobs">jobs</a>`)}
                | ${topSel(op === Stories.BEST, html`<a href="best">best</a>`)}
                ${SW && topSel(op === Stories.OFFLINE, html`| <a href="offline">offline</a>`)}
                | <a onclick="popitup(this,event,850,380)" href="https://news.ycombinator.com/submit">submit</a>
                ${op === Stories.SHOW_NEW
                    ? html`| <font color="#ffffff">${op}</font>` 
                    : ''}
                ${op === Stories.USER
                    ? html`| <font color="#ffffff">${id}'s submissions</font>` 
                    : ''}
                ${op === 'threads'
                    ? html`| <font color="#ffffff">${id}'s comments</font>` 
                    : ''}
                ${op === 'from'
                    ? html`| <font color="#ffffff">from</font>` 
                    : ''}
              </span></td>
            <td style="text-align:right;padding-right:4px;"><span class="pagetop">
                ${/*session?.user 
                  ? html`<a id="me" href="user?id=${session.user}">${session.user}</a> 
                      ${apiUser(session.user).then(x => `(${x.karma})`)}
                      | <a id="logout" href="logout?goto=news">logout</a>`
                  : html`<a id="login" href="login">login</a>`*/null}
            </span></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
`;

export const footerEl = () => html`
  <tr>
    <td id="footer"><img src="s.gif" height="10" width="0">
      <table width="100%" cellspacing="0" cellpadding="1">
        <tbody>
          <tr>
            <td id="border" bgcolor="#ee9b33"></td>
          </tr>
        </tbody>
      </table><br/>
      <center>Made by <a href="/user?id=qwtel">${identicon('qwtel', 12)} qwtel</a> with <a
          href="https://workers.tools">Worker&nbsp;Tools</a> and <a
          href="https://deno.com">Deno&nbsp;Deploy</a>.</center><br/>
      <center><span class="yclinks">YC: 
            <a href="newsguidelines.html">Guidelines</a>
          | <a href="newsfaq.html">FAQ</a>
          <!-- | <a href="lists">Lists</a> -->
          | <a href="https://github.com/HackerNews/API">API</a>
          | <a href="security.html">Security</a>
          | <a href="https://www.ycombinator.com/legal/">Legal</a>
          | <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          | <a href="mailto:hn@ycombinator.com">Contact YC</a></span><br/><br/>
        <form method="get" action="//hn.algolia.com/">Search:
          <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off"
            autocomplete="false">
        </form>
      </center>
    </td>
  </tr>`;

export const pageLayout = ({ title, op, id, headers }: { 
  title?: string, 
  op: Stories | 'item' | 'user' | 'threads', 
  id?: string,
  headers?: Headers,
}) => (content: HTMLContent) => html`
  <!DOCTYPE html>
  <html lang="en" op="${op}">
  <head>
    <meta charset="UTF-8">
    <meta name="referrer" content="origin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="${headers?.get('Sec-CH-Prefers-Color-Scheme') === 'dark' ? '#101114' : '#fff'}">
    <script>
      var meta = document.head.querySelector('meta[name=theme-color]');
      var media = window.matchMedia('(prefers-color-scheme:dark)');
      meta.content = media.matches ? '#101114' : '#fff';
      media.onchange = function(e) { meta.content = e.matches ? '#101114' : '#fff'; }
    </script>
    <link rel="stylesheet" type="text/css" href="news.css?v=21">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="manifest" href="app.webmanifest">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="rss">
    <title>${title ? `${title} | Worker News` : 'Worker News'}</title>
    <script type="module">(async () => {
      if ('serviceWorker' in navigator) {
        try {
          const regis = await navigator.serviceWorker.register('/sw.js')
          regis.addEventListener('updatefound', () => { console.log('update found')})
        } catch (err) {
          console.error(err)
        }
        // for (const reg of await navigator.serviceWorker.getRegistrations()) reg.unregister()
      }
    })()</script>
  </head>
  <body>
    <center>
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          ${headerEl({ op, id })}
          ${content}
          ${footerEl()}
        </tbody>
      </table>
    </center>
    <script type="text/javascript" src="hn.js"></script>
    ${location.hostname === 'news.workers.tools' 
      ? html`<script defer data-domain="news.workers.tools" src="https://plausible.io/js/plausible.js"></script>` 
      : ''}
  </body>
  </html>`;