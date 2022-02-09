import { css, HTMLResponse } from "@worker-tools/html";
import { router } from "../router";

router.get('/news.css', () => {
  const response = new HTMLResponse(css`
    :root {
      --font: Verdana, Geneva, sans-serif;
      --blue-h: 227;
      --blue-s: 10%;

      --black: #000;
      --dark-grey: #222;
      --light-grey: #828282;
      --lightest-grey: #b8b8b8;
      --white: #fff;
      --orange: #f38020;
      --beige: #f6f6ef;

      --darkest-blue: hsl(var(--blue-h), var(--blue-s), 7%);
      --dark-blue:hsl(var(--blue-h), var(--blue-s), 12%);
      --blue:hsl(var(--blue-h), var(--blue-s), 20%);
      --light-blue:hsl(var(--blue-h), var(--blue-s), 51%);

      --page-background: var(--white);
      --accent: var(--orange);
      --text: var(--light-grey);
      --text-strong: var(--black);
      --border: var(--dark-grey);
      --background: var(--beige);
      --input-background: var(--white);
      --input-border: var(--lightest-grey);

      --c5a: #5a5a5a;
      --c73: #737373;
      --c88: #888888;
      --c9c: #9c9c9c;
      --cae: #aeaeae;
      --cbe: #bebebe;
      --cce: #cecece;
      --cdd: #dddddd;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --page-background: var(--darkest-blue);
        --accent: var(--blue);
        --text: var(--light-blue);
        --text-strong: var(--lightest-grey);
        --border: var(--light-blue);
        --background: var(--dark-blue);
        --input-border: var(--dark-blue);
        --input-background: var(--darkest-blue);
        --input-border: var(--accent);

        --c5a: hsl(var(--blue-h), var(--blue-s), 61%);
        --c73: hsl(var(--blue-h), var(--blue-s), 56%);
        --c88: hsl(var(--blue-h), var(--blue-s), 46%);
        --c9c: hsl(var(--blue-h), var(--blue-s), 41%);
        --cae: hsl(var(--blue-h), var(--blue-s), 36%);
        --cbe: hsl(var(--blue-h), var(--blue-s), 31%);
        --cce: hsl(var(--blue-h), var(--blue-s), 26%);
        --cdd: hsl(var(--blue-h), var(--blue-s), 21%);
      }

      :root input[type="text"],
      :root input[type='number'],
      :root textarea {
        background-color: var(--input-background);
        border: 1px solid var(--input-border);
      }
    }

    html  { background-color: var(--page-background);}
    body  { font-family:var(--font); font-size:10pt; color:var(--text); }
    td    { font-family:var(--font); font-size:10pt; color:var(--text); }
    hr    { margin: 9pt 0 }

    .admin td   { font-family:var(--font); font-size:8.5pt; color:var(--text-strong); }
    .subtext td { font-family:var(--font); font-size:  7pt; color:var(--text); }
    
    input    { font-family:monospace; font-size:10pt; }
    input[type=\\"submit\\"] { font-family:var(--font); }
    textarea { font-family:monospace; font-size:10pt; }
    blockquote { border-left: 4px solid var(--input-border); margin: 0; color: var(--text); margin-left: 1px; padding-left: 9px; }
    
    a:link    { color:var(--text-strong); text-decoration:none; }
    a:visited { color:var(--text); text-decoration:none; }

    #hnmain  { background-color: var(--background);}
    #header  { background-color: var(--accent);}
    #border  { background-color: var(--accent);}
    
    .default { font-family:var(--font); font-size: 10pt; color:var(--text); }
    .admin   { font-family:var(--font); font-size:8.5pt; color:var(--text-strong); }
    .title   { font-family:var(--font); font-size: 10pt; color:var(--text); overflow:hidden; }
    .subtext { font-family:var(--font); font-size:  7pt; color:var(--text); }
    .yclinks { font-family:var(--font); font-size:  8pt; color:var(--text); }
    .pagetop { font-family:var(--font); font-size: 10pt; color:var(--border); line-height:12px; }
    .comhead { font-family:var(--font); font-size:  8pt; color:var(--text); }
    .comment { font-family:var(--font); font-size:  9pt; }
    .hnname  { margin-right: 5px; }
    
    .comment a:link, .comment a:visited { text-decoration: underline; }
    .noshow { display: none; }
    .nosee { visibility: hidden; pointer-events: none; cursor: default }
    
    .c00, .c00 a:link { color:var(--text-strong); }
    .c5a, .c5a a:link, .c5a a:visited { color:var(--c5a); }
    .c73, .c73 a:link, .c73 a:visited { color:var(--c73); }
    .c82, .c82 a:link, .c82 a:visited { color:var(--text); }
    .c88, .c88 a:link, .c88 a:visited { color:var(--c88); }
    .c9c, .c9c a:link, .c9c a:visited { color:var(--c9c); }
    .cae, .cae a:link, .cae a:visited { color:var(--cae); }
    .cbe, .cbe a:link, .cbe a:visited { color:var(--cbe); }
    .cce, .cce a:link, .cce a:visited { color:var(--cce); }
    .cdd, .cdd a:link, .cdd a:visited { color:var(--cdd); }
    
    .pagetop a:visited { color:var(--text-strong);}
    .topsel a:link, .topsel a:visited { color:#ffffff; }
    
    .subtext a:link, .subtext a:visited { color:var(--text); }
    .subtext a:hover { text-decoration:underline; }
    
    .comhead a:link, .subtext a:visited { color:var(--text); }
    .comhead a:hover { text-decoration:underline; }
    
    .hnmore a:link, a:visited { color:var(--text); }
    .hnmore { text-decoration:underline; }

    .default p, .default li, .default blockquote { margin-top: 8px; margin-bottom: 0px; }
    .commtext > :first-child { margin-top: 0 };

    .pagebreak {page-break-before:always}
    
    pre { overflow: auto; padding: 2px; white-space: pre-wrap; word-wrap: break-word; }
    pre:hover { overflow:auto }
    
    .votearrow {
      width:      10px;
      height:     10px;
      border:     0px;
      margin:     3px 2px 6px;
      background: url("grayarrow.gif")
      no-repeat;
    }

    @media (prefers-color-scheme: dark) {
      .votearrow {
        background-image: url("https://jgthms.com/hacker-news-dark-mode/images/darkbluearrow.png");
      }
    }
    
    .votelinks.nosee div.votearrow.rotate180 {
      display: none;
    }
    
    table.padtab td { padding:0px 10px }
    
    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
      .votearrow { background-size: 10px; background-image: url("grayarrow2x.gif"); }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2) and (prefers-color-scheme: dark), only screen and (min-device-pixel-ratio: 2) and (prefers-color-scheme: dark) {
      :root .votearrow { background-image: url("https://jgthms.com/hacker-news-dark-mode/images/darkbluearrow2x.png"); }
    }
    
    .rotate180 {
      -webkit-transform: rotate(180deg);  /* Chrome and other webkit browsers */
      -moz-transform:    rotate(180deg);  /* FF */
      -o-transform:      rotate(180deg);  /* Opera */
      -ms-transform:     rotate(180deg);  /* IE9 */
      transform:         rotate(180deg);  /* W3C complaint browsers */
    
      /* IE8 and below */
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=0, M21=0, M22=-1, DX=0, DY=0, SizingMethod='auto expand')";
    }
    
    /* mobile device */
    @media only screen
    and (min-width : 300px)
    and (max-width : 750px) {
      #hnmain { width: 100%; min-width: 0; }
      body { padding: 0; margin: 0; width: 100%; -webkit-text-size-adjust: none; }
      td { height: inherit !important; }
      .title, .comment { font-size: inherit;  }
      span.pagetop { display: block; margin: 3px 5px; font-size: 12px; line-height: normal }
      span.pagetop b { display: block; font-size: 15px; }
      table.comment-tree .comment a { display: inline-block; max-width: 200px; overflow: hidden; white-space: nowrap;
        text-overflow: ellipsis; vertical-align:top; }
      img[src='s.gif'][width='40'] { width: 12px; }
      img[src='s.gif'][width='80'] { width: 24px; }
      img[src='s.gif'][width='120'] { width: 36px; }
      img[src='s.gif'][width='160'] { width: 48px; }
      img[src='s.gif'][width='200'] { width: 60px; }
      img[src='s.gif'][width='240'] { width: 72px; }
      img[src='s.gif'][width='280'] { width: 84px; }
      img[src='s.gif'][width='320'] { width: 96px; }
      img[src='s.gif'][width='360'] { width: 108px; }
      img[src='s.gif'][width='400'] { width: 120px; }
      img[src='s.gif'][width='440'] { width: 132px; }
      img[src='s.gif'][width='480'] { width: 144px; }
      img[src='s.gif'][width='520'] { width: 156px; }
      img[src='s.gif'][width='560'] { width: 168px; }
      img[src='s.gif'][width='600'] { width: 180px; }
      img[src='s.gif'][width='640'] { width: 192px; }
      img[src='s.gif'][width='680'] { width: 204px; }
      img[src='s.gif'][width='720'] { width: 216px; }
      img[src='s.gif'][width='760'] { width: 228px; }
      img[src='s.gif'][width='800'] { width: 240px; }
      img[src='s.gif'][width='840'] { width: 252px; }
      .title { font-size: 11pt; line-height: 14pt;  }
      .subtext { font-size: 9pt; }
      .itemlist { padding-right: 5px;}
      .votearrow { transform: scale(1.3,1.3); margin-right: 6px; }
      .votearrow.rotate180 {
        -webkit-transform: rotate(180deg) scale(1.3,1.3);  /* Chrome and other webkit browsers */
        -moz-transform:    rotate(180deg) scale(1.3,1.3);  /* FF */
        -o-transform:      rotate(180deg) scale(1.3,1.3);  /* Opera */
        -ms-transform:     rotate(180deg) scale(1.3,1.3);  /* IE9 */
        transform:         rotate(180deg) scale(1.3,1.3);  /* W3C complaint browsers */
      }
      .votelinks { min-width: 18px; }
      .votelinks a { display: block; margin-bottom: 9px; }
      input[type='text'], input[type='number'], textarea { font-size: 16px; width: 90%; }
    }
    
    .comment { max-width: 1215px; overflow: hidden }
    
    @media only screen and (min-width : 300px) and (max-width : 389px) {
      .comment { max-width: 270px; overflow: hidden }
    }
    @media only screen and (min-width : 390px) and (max-width : 509px) {
      .comment { max-width: 350px; overflow: hidden }
    }
    @media only screen and (min-width : 510px) and (max-width : 599px) {
      .comment { max-width: 460px; overflow: hidden }
    }
    @media only screen and (min-width : 600px) and (max-width : 689px) {
      .comment { max-width: 540px; overflow: hidden }
    }
    @media only screen and (min-width : 690px) and (max-width : 809px) {
      .comment { max-width: 620px; overflow: hidden }
    }
    @media only screen and (min-width : 810px) and (max-width : 899px) {
      .comment { max-width: 730px; overflow: hidden }
    }
    @media only screen and (min-width : 900px) and (max-width : 1079px) {
      .comment { max-width: 810px; overflow: hidden }
    }
    @media only screen and (min-width : 1080px) and (max-width : 1169px) {
      .comment { max-width: 970px; overflow: hidden }
    }
    @media only screen and (min-width : 1170px) and (max-width : 1259px) {
      .comment { max-width: 1050px; overflow: hidden }
    }
    @media only screen and (min-width : 1260px) and (max-width : 1349px) {
      .comment { max-width: 1130px; overflow: hidden }
    }
    
  `);
  // FIXME: better solution?
  response.headers.set('content-type', 'text/css');
  return response;
})