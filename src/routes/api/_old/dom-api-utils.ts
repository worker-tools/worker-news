// class AsyncIterableArray<T> extends Array<T> {
//   async *[Symbol.asyncIterator]() {
//     for (const x of this) yield x;
//   }
// }

// function stackComments(comments: AsyncIterableArray<AComment>): AsyncIterableArray<AComment> {
//   for (const [i, comment] of comments.entries()) {
//     const { level } = comment;

//     if (level > 0) {
//       let index = i, parentComment: AComment;
//       do {
//         parentComment = comments[--index];
//       } while (parentComment.level >= level);
//       (parentComment.kids as AsyncIterableArray<AComment>).push(comment);
//     }
//   }
//   return comments.filter(comment => comment.level === 0) as AsyncIterableArray<AComment>;
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
