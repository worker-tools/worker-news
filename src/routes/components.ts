import { html, HTMLContent } from "@worker-tools/html";

export const headerEl = () => html`
  <tr>
    <td id="header" bgcolor="#ff6600">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
        <tbody>
          <tr>
            <td style="width:18px;padding-right:4px"><a href="/"><img
                  src="https://news.ycombinator.com/y18.gif" width="18" height="18"
                  style="border:1px white solid;"></a></td>
            <td style="line-height:12pt; height:10px;"><span class="pagetop"><b class="hnname"><a
                    href="news">Edge HN</a></b>
                ${/*<!-- <a href="newest">new</a>
                | <a href="threads?id=USER">threads</a>
                | <a href="front">past</a>
                | <a href="newcomments">comments</a>
                | <a href="ask">ask</a>
                | <a href="show">show</a>
                | <a href="jobs">jobs</a>
                | <a href="submit">submit</a> -->*/''}
              </span></td>
            <td style="text-align:right;padding-right:4px;"><span class="pagetop">
                ${/*<!-- <a id="me" href="user?id=USER">USER</a> (15) |
                <a id="logout"
                  href="logout?auth=9de03ab6010662d3c466871fadfcf5cf261698cc&amp;goto=news">logout</a> -->*/''}
            </span></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
`;

export const footerEl = () => html`
  <tr>
    <td><img src="https://news.ycombinator.com/s.gif" height="10" width="0">
      <table width="100%" cellspacing="0" cellpadding="1">
        <tbody>
          <tr>
            <td id="border" bgcolor="#ff6600"></td>
          </tr>
        </tbody>
      </table><br>
      <center>Made by <a href="https://qwtel.com/">@qwtel</a> with <a
          href="https://worker-tools.github.io/">Worker Tools</a> and <a
          href="https://workers.cloudflare.com">Cloudflare Workers</a>.</center><br>
      <center><span class="yclinks"><a href="newsguidelines.html">Guidelines</a>
          | <a href="newsfaq.html">FAQ</a>
          | <a href="lists">Lists</a>
          | <a href="https://github.com/HackerNews/API">API</a>
          | <a href="security.html">Security</a>
          | <a href="https://www.ycombinator.com/legal/">Legal</a>
          | <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          | <a href="mailto:hn@ycombinator.com">Contact</a></span><br><br>
        <form method="get" action="//hn.algolia.com/">Search:
          <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off"
            autocomplete="false">
        </form>
      </center>
    </td>
  </tr>`;

export const page = ({ title, op }: { title?: string, op: string }) => (content: HTMLContent) => html`
  <html lang="en" op="${op}">
  <head>
    <meta name="referrer" content="origin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="news.css">
    <link rel="shortcut icon" href="https://news.ycombinator.com/favicon.ico">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="rss">
    <title>${title ? `${title} | Edge HN` : 'Edge HN'}</title>
  </head>
  <body>
    <center>
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          ${headerEl()}
          ${content}
          ${footerEl()}
        </tbody>
      </table>
    </center>
    <script type="text/javascript" src="https://news.ycombinator.com/hn.js"></script>
  </body>
  </html>`;