class AggregateErrorPolyfill extends Error {
  errors: readonly any[];
	constructor(errors: Iterable<any>, message = '') {
		super(message);
		this.errors = [...errors];
    this.name = 'AggregateError';
	}
}

export const AggregateError: typeof AggregateErrorPolyfill = 'AggregateError' in globalThis 
  // @ts-ignore
  ? globalThis.AggregateError 
  : AggregateErrorPolyfill