import { notAcceptable, unsupportedMediaType } from '@worker-tools/response-creators';
import negotiated from 'negotiated';

import { Awaitable } from '../common-types';
import { Context } from './index'

// const weightSortFn = <X extends { weight: number }>(a: X, b: X) => a.weight >= b.weight ? a : b;
const weightSortFn = <X extends { weight: number }>(a: X, b: X) => a.weight >= b.weight ? a : b;

const ACCEPT = 'Accept';
const ACCEPT_ENCODING = 'Accept-Encoding';
const ACCEPT_LANGUAGE = 'Accept-Language';
// const ACCEPT_CHARSET = 'Accept-Charset';

const CONTENT_TYPE = 'Content-Type';
const CONTENT_LANGUAGE = 'Content-Language';
const CONTENT_ENCODING = 'Content-Encoding';
// const CHARSET = 'charset';

const VARY = 'Vary';

interface Options {
  /** Indicate if unacceptable content should throw a response */
  throws?: boolean,
}

export interface ContentNegotiationOptions<
  T extends string,
  A extends string,
  TS extends readonly T[],
  AS extends readonly A[],
> extends Options {
  /** The content types _provided_ by this endpoint. Not to be confused with `accepts`. */
  types?: TS,
  /** The body content types _acceptable_ to this endpoint. Not to be confused with `types`. */
  accepts?: AS,
}

export interface ContentNegotiationResults<T, AT> {
  /** The best content type _acceptable to the client_. */
  type: T | undefined,
  /** The request's `Content-Type` header iff acceptable to this endpoint */
  accepted: AT | undefined,
}

export interface LanguageNegotiationOptions<
  L extends string,
  A extends string,
  LS extends readonly L[],
  AS extends readonly A[],
> extends Options {
  /** The languages _provided_ by this endpoint. Not to be confused with `acceptsLanguages`. */
  languages?: LS,
  /** The languages (of the request body) _acceptable_ to this endpoint. Not to be confused with `languages`. */
  acceptsLanguages?: AS,
}

export interface LanguageNegotiationResults<L, AL> {
  /** The best language _acceptable to the client_. */
  language: L | undefined,
  /** The request's `Language` header if (and only if) accepted by this endpoint */
  acceptedLanguage: AL | undefined,
}

export interface EncodingNegotiationOptions<
  E extends string,
  A extends string,
  ES extends readonly E[],
  AS extends readonly A[],
> extends Options {
  /** The encodings _provided_ by this endpoint. Not to be confused with `acceptsEncodings`. */
  encodings?: ES,
  /** The body encodings _acceptable_ to this endpoint. Not to be confused with `encodings`. */
  acceptsEncodings?: AS,
}
export interface EncodingNegotiationResults<E, AE> {
  /** The best encoding _acceptable to the client_. */
  encoding: E | undefined,
  /** The request's `Encoding` header if (and only if) accepted by this endpoint */
  acceptedEncoding: AE | undefined,
}

export function contentNegotiation<
  T extends string,
  A extends string,
  TS extends readonly T[],
  AS extends readonly A[],
>(
  opts: ContentNegotiationOptions<T, A, TS, AS> = {}
): <X extends Context>(ax: Awaitable<X>) => Promise<X & ContentNegotiationResults<TS[number], AS[number]>> {
  return async ax => {
    const ctx = await ax;
    const headers = ctx.request.headers;
    const { types, accepts, throws } = opts;

    const resultA = [...negotiated.mediaTypes(headers.get(CONTENT_TYPE))];
    const accepted = resultA[0]?.type as AS[number];

    if (throws && accepts?.length && !accepts.includes(accepted)) throw unsupportedMediaType();

    const resultT = [...negotiated.mediaTypes(headers.get(ACCEPT))]
      .filter(t => !types || types.includes(t.type as TS[number]))
      .reduce(weightSortFn, { weight: -1 } as any)
      
    const type = resultT.type as TS[number]

    if (throws && headers.has(ACCEPT) && types && !type) throw notAcceptable();

    ctx.effects.push(response => {
      // If the server accepts more than 1 option, we set the vary header for correct caching
      if (types?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT);
      return response;
    })

    return Object.assign(ctx, { type, accepted })
  }
}

export function languageNegotiation<
  L extends string,
  A extends string,
  LS extends readonly L[],
  AS extends readonly A[],
>(
  opts: LanguageNegotiationOptions<L, A, LS, AS> = {}
): <X extends Context>(ax: Awaitable<X>) => Promise<X & LanguageNegotiationResults<LS[number], AS[number]>> {
  return async ax => {
    const ctx = await ax;
    const headers = ctx.request.headers;
    const { languages, acceptsLanguages, throws } = opts;

    const resultA = [...negotiated.languages(headers.get(CONTENT_LANGUAGE))]
    const acceptedLanguage = resultA[0]?.language as AS[number];

    // TODO: make configurable??
    if (throws && acceptsLanguages?.length && !acceptsLanguages.includes(acceptedLanguage)) throw notAcceptable();

    const resultL = [...negotiated.languages(headers.get(ACCEPT_LANGUAGE))]
      .filter(l => !languages || languages.includes(l.language as LS[number]))
      .reduce(weightSortFn, { weight: -1 } as any);

    const language = resultL.language as LS[number];

    // TODO: how to handle status errors in middleware??
    if (throws && headers.has(ACCEPT_LANGUAGE) && languages && !language) throw notAcceptable();

    ctx.effects.push(response => {
      if (languages?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_LANGUAGE);
      return response
    })

    return Object.assign(ctx, { language, acceptedLanguage });
  }
}

export function encodingNegotiation<
  E extends string,
  A extends string,
  ES extends readonly E[],
  AS extends readonly A[],
>(
  opts: EncodingNegotiationOptions<E, A, ES, AS>
): <X extends Context>(ax: Awaitable<X>) => Promise<X & EncodingNegotiationResults<ES[number], AS[number]>> {
  return async ax => {
    const ctx = await ax;
    const headers = ctx.request.headers;
    const { encodings, acceptsEncodings, throws } = opts;

    const resultA = [...negotiated.encodings(headers.get(CONTENT_ENCODING))];
    const acceptedEncoding = resultA[0]?.encoding as AS[number];

    // TODO: make configurable??
    if (throws && acceptsEncodings?.length && !acceptsEncodings.includes(acceptedEncoding)) throw notAcceptable();

    const resultL = [...negotiated.encodings(headers.get(ACCEPT_ENCODING))]
      .filter(e => !encodings || encodings.includes(e.encoding as ES[number]))
      .reduce(weightSortFn, { weight: -1 } as any);

    const encoding = resultL.encoding as ES[number];

    // TODO: how to handle status errors in middleware??
    if (throws && headers.has(ACCEPT_ENCODING) && encodings && !encoding) throw notAcceptable();

    ctx.effects.push(response => {
      if (encodings?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_ENCODING);
      return response
    })

    return Object.assign(ctx, { encoding, acceptedEncoding });
  }
}

// export interface ContentNegotiationOptions<
//   CT extends readonly string[],
//   CL extends readonly string[],
//   CE extends readonly string[],
//   CC extends readonly string[],
//   AT extends readonly string[],
//   AL extends readonly string[],
//   AE extends readonly string[],
//   AC extends readonly string[],
//   > {
//   /** The content types _provided_ by this endpoint. Not to be confused with `accepts`. */
//   types?: CT,

//   /** The languages _provided_ by this endpoint. Not to be confused with `acceptsLanguages`. */
//   languages?: CL,

//   /** The encodings _provided_ by this endpoint. Not to be confused with `acceptsEncodings`. */
//   encodings?: CE,

//   /** The character sets _provided_ by this endpoint. Not to be confused with `acceptsCharsets`.  */
//   charsets?: CC,

//   /** The body content types _acceptable_ to this endpoint. Not to be confused with `types`. */
//   accepts?: AT,

//   /** The languages (of the request body) _acceptable_ to this endpoint. Not to be confused with `languages`. */
//   acceptsLanguages?: AL,

//   /** The body encodings _acceptable_ to this endpoint. Not to be confused with `encodings`. */
//   acceptsEncodings?: AE,

//   /** The body charsets _acceptable_ to this endpoint. Not to be confused with `charsets`. */
//   acceptsCharsets?: AC,
// }

// export interface ContentNegotiationResults<CT, CL, CE, CC, AT, AL, AE, AC> {
//   /** The best content type _acceptable to the client_. */
//   type: CT | null,

//   /** The best language _acceptable to the client_. */
//   language: CL | null,

//   /** The best encoding _acceptable to the client_. */
//   encoding: CE | null,

//   /** The best charset _acceptable to the client_. */
//   charset: CC | null,

//   /** The request's `Content-Type` header if (and only if) accepted by this endpoint */
//   accepted: AT | null,

//   /** The request's `Language` header if (and only if) accepted by this endpoint */
//   acceptedLanguage: AL | null,

//   /** The request's `Encoding` header if (and only if) accepted by this endpoint */
//   acceptedEncoding: AE | null,

//   /** The request's `Charset` header if (and only if) accepted by this endpoint */
//   acceptedCharset: AC | null,
// }

// export function addContentNegotiation<
//   CT extends readonly string[],
//   CL extends readonly string[],
//   CE extends readonly string[],
//   CC extends readonly string[],
//   AT extends readonly string[],
//   AL extends readonly string[],
//   AE extends readonly string[],
//   AC extends readonly string[],
//   >(
//     opts: ContentNegotiationOptions<CT, CL, CE, CC, AT, AL, AE, AC> = {}
//   ): <X extends Context>(ax: Awaitable<X>) => Promise<X & ContentNegotiationResults<
//     CT[number],
//     CL[number],
//     CE[number],
//     CC[number],
//     AT[number],
//     AL[number],
//     AE[number],
//     AC[number]
//     >
//   > {
//   // console.log(opts.accepts)
//   return async ax => {
//     const x = await ax;
//     const headers = x.request.headers;

//     const {
//       types,
//       languages,
//       encodings,
//       charsets,
//       accepts,
//       acceptsLanguages,
//       acceptsEncodings,
//       acceptsCharsets,
//     } = opts;

//     const { type: accepted, params } = [...negotiated.mediaTypes(headers.get(CONTENT_TYPE))]?.[0] ?? { type: '' };
//     const { language: acceptedLanguage } = [...negotiated.languages(headers.get(CONTENT_LANGUAGE))]?.[0] ?? { language: '' };
//     const { encoding: acceptedEncoding } = [...negotiated.encodings(headers.get(CONTENT_ENCODING))]?.[0] ?? { encoding: '' };
//     const contentCharset = [...negotiated.parameters(params)].find(p => p.key === CHARSET)?.value ?? '';
//     const { charset: acceptedCharset } = [...negotiated.charsets(contentCharset)]?.[0] ?? { charset: '' };

//     // TODO: how to handle status errors in middleware??
//     if (accepts?.length && !accepts.includes(accepted)) throw unsupportedMediaType();
//     if (acceptsLanguages?.length && !acceptsLanguages.includes(acceptedLanguage)) throw notAcceptable();
//     if (acceptsEncodings?.length && !acceptsEncodings.includes(acceptedEncoding)) throw notAcceptable();
//     if (acceptsCharsets?.length && !acceptsCharsets.includes(acceptedCharset)) throw notAcceptable();

//     const neverT = { weight: -1, type: null as CT[number] | null };
//     const neverL = { weight: -1, language: null as CL[number] | null };
//     const neverE = { weight: -1, encoding: null as CE[number] | null };
//     const neverC = { weight: -1, charset: null as CC[number] | null };

//     const { type } = [...negotiated.mediaTypes(headers.get(ACCEPT))]
//       .filter(t => !types || types.includes(t.type))
//       .reduce(weightSortFn, neverT);

//     const { language } = [...negotiated.languages(headers.get(ACCEPT_LANGUAGE))]
//       .filter(l => !languages || languages.includes(l.language))
//       .reduce(weightSortFn, neverL);

//     const { encoding } = [...negotiated.encodings(headers.get(ACCEPT_ENCODING))]
//       .filter(e => !encodings || encodings.includes(e.encoding))
//       .reduce(weightSortFn, neverE);

//     const { charset } = [...negotiated.charsets(headers.get(ACCEPT_CHARSET))]
//       .filter(c => !charsets || charsets.includes(c.charset))
//       .reduce(weightSortFn, neverC);

//     // TODO: how to handle status errors in middleware??
//     if (headers.has(ACCEPT) && types && !type) throw notAcceptable();
//     if (headers.has(ACCEPT_LANGUAGE) && languages && !language) throw notAcceptable();
//     if (headers.has(ACCEPT_ENCODING) && encodings && !encoding) throw notAcceptable();
//     if (headers.has(ACCEPT_CHARSET) && charsets && !charset) throw notAcceptable();

//     x.effects.push(response => {
//       // If the server accepts more than 1 option, we set the vary header for correct caching
//       if (types?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT);
//       if (languages?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_LANGUAGE);
//       if (encodings?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_ENCODING);
//       if (charsets?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_CHARSET);
//       return response;
//     })

//     return Object.assign(x, {
//       type,
//       language,
//       encoding,
//       charset,
//       accepted,
//       acceptedLanguage,
//       acceptedEncoding,
//       acceptedCharset,
//     });
//   };
// }

