const CONCAT_SEQ = ', ';

const XE = /(Mon|Tue|Wed|Thu|Fri|Sat|Sun), /;
const XR = '$1,�';
const YE = /(Mon|Tue|Wed|Thu|Fri|Sat|Sun),�/;
const YR = '$1, '

/** 
 * Fixes the iteration of the `Headers` class with respect to `set-cookie` header:
 * 
 * By default, multiple `set-cookie` headers will be concatenated by the `Headers` class implementation.
 * However, the HTTP protocol/browsers expect multiple `Set-Cookie` headers,
 * and do not recognize concatenated `Set-Cookie` headers.
 * 
 * This helper function fixes this behavior, yielding multiple `set-cookie` key-value tuples,
 * provided that no cookie value contains the concatenation sequence `', '` (comma empty-space).
 */
export function iterHeadersSetCookieFix(headers: Headers): [string, string][] {
  return [...headers].flatMap(([h, v]) => h === 'set-cookie'
    ? v.replace(new RegExp(XE, 'g'), XR)
      .split(CONCAT_SEQ)
      .map(x => [h, x.replace(new RegExp(YE, 'g'), YR)] as [string, string])
    : [[h, v] as [string, string]])
}

export { iterHeadersSetCookieFix as headersSetCookieFix }