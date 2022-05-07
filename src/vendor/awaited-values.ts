import type { Awaitable } from './common-types'

/** Force intellisense to expand the typing to hide merging typings */
type ExpandRecursively<T> = T extends Record<PropertyKey, unknown>
  ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
  : T;

/**
 * Takes a record `T` and for all its keys `K` turns the corresponding values into `Promise<T[K]>`.
//  * @deprecated Change name
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type PromisedValues<Type, Exclude extends keyof Type = never> = ExpandRecursively<{
  [Property in keyof Type]: Property extends Exclude ? Type[Property] : Awaitable<Type[Property]>
}>

/**
 * Inverse of `PromisedValues`. Takes a record `T` and for its keys `K` turns the corresponding values into `Awaited<T[K]>`
//  * @deprecated Change name
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type AwaitedValues<Type, Exclude extends keyof Type = never> = ExpandRecursively<{
  [Property in keyof Type]: Property extends Exclude ? Type[Property] : Awaited<Type[Property]>
}>

/**
 * Lifts all direct properties of `obj` that are promises to the parent. 
 * @deprecated Change name
 */
export async function liftPromises<Type, Exclude extends keyof Type = never>(
  obj: Type, exclude: Exclude[] = []
): Promise<AwaitedValues<Type, Exclude>> {
  const props = (<Exclude[]>Object.keys(obj)).filter(x => !exclude.includes(x))
  const results = await Promise.all(props.map(async prop => [prop, await obj[prop]] as const))
  for (const [prop, awaited] of results) { obj[prop] = awaited }
  return obj as any
}

// type Getters<Type> = {
//   [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// };

// interface Person {
//   readonly name: string;
//   age: number;
//   location?: string;
//   __x: any
// }

// type LazyPerson = Getters<Person>;
// type AwaitedPerson = AsPromised<Person, '__x'>;

// type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
// type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
// type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;


// type RetainOptional<T, U = T> = T extends undefined ? U | undefined : U
