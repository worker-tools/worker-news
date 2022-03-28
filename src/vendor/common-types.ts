export type Repeatable<T> = T | T[];
export type Awaitable<T> = T | PromiseLike<T>;
export type Callable<T> = T | (() => T);
export type Primitive = null | undefined | boolean | number | string | bigint | symbol;
export type ToString = { toString(...args: any[]): string }

// /** See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm */
// export type StructuredCloneable = Omit<Primitive, symbol>
//   | Date 
//   | RegExp 
//   | Blob 
//   | File 
//   | FileList 
//   | ArrayBuffer 
//   | ArrayBufferView 
//   | ImageBitmap 
//   | ImageData 
//   | StructuredCloneable[] 
//   | Map<StructuredCloneable, StructuredCloneable>
//   | Set<StructuredCloneable>
