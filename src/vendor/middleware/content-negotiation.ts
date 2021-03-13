import { notAcceptable, unsupportedMediaType } from '@worker-tools/response-creators';
import negotiated from 'negotiated';

import { Awaitable } from '../common-types';
import { Base } from './index';

const weightSortFn = <X extends { weight: number }>(a: X, b: X) => a.weight >= b.weight ? a : b;

const ACCEPT = 'Accept';
const ACCEPT_ENCODING = 'Accept-Encoding';
const ACCEPT_LANGUAGE = 'Accept-Language';
const ACCEPT_CHARSET = 'Accept-Charset';

const CONTENT_TYPE = 'Content-Type';
const CONTENT_LANGUAGE = 'Content-Language';
const CONTENT_ENCODING = 'Content-Encoding';
const CHARSET = 'charset';

const VARY = 'Vary';

export interface ContentNegotiationOptions<
  CT extends readonly string[],
  CL extends readonly string[],
  CE extends readonly string[],
  CC extends readonly string[],
  AT extends readonly string[],
  AL extends readonly string[],
  AE extends readonly string[],
  AC extends readonly string[],
  > {
  /** The content types _provided_ by this endpoint. Not to be confused with `accepts`. */
  types?: CT,

  /** The languages _provided_ by this endpoint. Not to be confused with `acceptsLanguages`. */
  languages?: CL,

  /** The encodings _provided_ by this endpoint. Not to be confused with `acceptsEncodings`. */
  encodings?: CE,

  /** The character sets _provided_ by this endpoint. Not to be confused with `acceptsCharsets`.  */
  charsets?: CC,

  /** The body content types _acceptable_ to this endpoint. Not to be confused with `types`. */
  accepts?: AT,

  /** The languages (of the request body) _acceptable_ to this endpoint. Not to be confused with `languages`. */
  acceptsLanguages?: AL,

  /** The body encodings _acceptable_ to this endpoint. Not to be confused with `encodings`. */
  acceptsEncodings?: AE,

  /** The body charsets _acceptable_ to this endpoint. Not to be confused with `charsets`. */
  acceptsCharsets?: AC,
}

export interface ContentNegotiationResults<CT, CL, CE, CC, AT, AL, AE, AC> {
  /** The best content type _acceptable to the client_. */
  type: CT | null,

  /** The best language _acceptable to the client_. */
  language: CL | null,

  /** The best encoding _acceptable to the client_. */
  encoding: CE | null,

  /** The best charset _acceptable to the client_. */
  charset: CC | null,

  /** The request's `Content-Type` header if (and only if) accepted by this endpoint */
  accepted: AT | null,

  /** The request's `Language` header if (and only if) accepted by this endpoint */
  acceptedLanguage: AL | null,

  /** The request's `Encoding` header if (and only if) accepted by this endpoint */
  acceptedEncoding: AE | null,

  /** The request's `Charset` header if (and only if) accepted by this endpoint */
  acceptedCharset: AC | null,
}

/**
 * @example
 * withContentNegotiation({ 
 *   accepts: [mime.FORM, mime.FORM_DATA], 
 *   types: [mime.HTML, mime.JSON], 
 * })(async ({ request, type }) => {
 *   const data = await request.formData();
 *   if (type === mime.HTML) {
 *     return new HTMLResponse();
 *   }
 *   if (type === mime.JSON) {
 *     return new JSONResponse();
 *   }
 * }); 
 */
export const withContentNegotiation = <
  CT extends readonly string[],
  CL extends readonly string[],
  CE extends readonly string[],
  CC extends readonly string[],
  AT extends readonly string[],
  AL extends readonly string[],
  AE extends readonly string[],
  AC extends readonly string[],
  >(opts: ContentNegotiationOptions<CT, CL, CE, CC, AT, AL, AE, AC> = {}) =>
  <X extends Base>(handler: (ctx: X & ContentNegotiationResults<CT[number], CL[number], CE[number], CC[number], AT[number], AL[number], AE[number], AC[number]>) => Awaitable<Response>) =>
    async (ctx: X): Promise<Response> => {
      const headers = ctx.event.request.headers;

      const {
        types,
        languages,
        encodings,
        charsets,
        accepts,
        acceptsLanguages,
        acceptsEncodings,
        acceptsCharsets,
      } = opts;

      const { type: accepted, params } = [...negotiated.mediaTypes(headers.get(CONTENT_TYPE))]?.[0] ?? { type: '' };
      const { language: acceptedLanguage } = [...negotiated.languages(headers.get(CONTENT_LANGUAGE))]?.[0] ?? { language: '' };
      const { encoding: acceptedEncoding } = [...negotiated.encodings(headers.get(CONTENT_ENCODING))]?.[0] ?? { encoding: '' };
      const contentCharset = [...negotiated.parameters(params)].find(p => p.key === CHARSET)?.value ?? '';
      const { charset: acceptedCharset } = [...negotiated.charsets(contentCharset)]?.[0] ?? { charset: '' };

      if (accepts?.length && !accepts.includes(accepted)) return unsupportedMediaType();
      if (acceptsLanguages?.length && !acceptsLanguages.includes(acceptedLanguage)) return notAcceptable();
      if (acceptsEncodings?.length && !acceptsEncodings.includes(acceptedEncoding)) return notAcceptable();
      if (acceptsCharsets?.length && !acceptsCharsets.includes(acceptedCharset)) return notAcceptable();

      const neverT = { weight: -1, type: null as CT[number] | null };
      const neverL = { weight: -1, language: null as CL[number] | null };
      const neverE = { weight: -1, encoding: null as CE[number] | null };
      const neverC = { weight: -1, charset: null as CC[number] | null };

      const { type } = [...negotiated.mediaTypes(headers.get(ACCEPT))]
        .filter(t => !types || types.includes(t.type))
        .reduce(weightSortFn, neverT);

      const { language } = [...negotiated.languages(headers.get(ACCEPT_LANGUAGE))]
        .filter(l => !languages || languages.includes(l.language))
        .reduce(weightSortFn, neverL);

      const { encoding } = [...negotiated.encodings(headers.get(ACCEPT_ENCODING))]
        .filter(e => !encodings || encodings.includes(e.encoding))
        .reduce(weightSortFn, neverE);

      const { charset } = [...negotiated.charsets(headers.get(ACCEPT_CHARSET))]
        .filter(c => !charsets || charsets.includes(c.charset))
        .reduce(weightSortFn, neverC);

      if (headers.has(ACCEPT) && types && !type) return notAcceptable();
      if (headers.has(ACCEPT_LANGUAGE) && languages && !language) return notAcceptable();
      if (headers.has(ACCEPT_ENCODING) && encodings && !encoding) return notAcceptable();
      if (headers.has(ACCEPT_CHARSET) && charsets && !charset) return notAcceptable();

      const response = await handler({
        ...ctx,
        type,
        language,
        encoding,
        charset,
        accepted,
        acceptedLanguage,
        acceptedEncoding,
        acceptedCharset,
      });

      // If the server accepts more than 1 option, we set the vary header for correct caching
      if (types?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT);
      if (languages?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_LANGUAGE);
      if (encodings?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_ENCODING);
      if (charsets?.length ?? 0 > 1) response.headers.append(VARY, ACCEPT_CHARSET);

      return response;
    };

export { withContentNegotiation as withCN };
