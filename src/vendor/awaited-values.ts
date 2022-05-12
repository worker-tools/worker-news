import type { Awaitable } from './common-types.ts'

/** Force intellisense to expand the typing to hide merging typings */
type ExpandRecursively<T> = T extends Record<PropertyKey, unknown>
  ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
  : T;

/**
 * Takes a record `T` and for all its keys `K` turns the corresponding values into `Promise<T[K]>`.
//  * @deprecated Change name
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type PromisedIn<Type, In extends keyof Type = never> = ExpandRecursively<{
  [Property in keyof Type]: Property extends In ? Awaitable<Type[Property]> : Type[Property]
}>

export type PromisedEx<Type, Ex extends keyof Type = never> = ExpandRecursively<{
  [Property in keyof Type]: Property extends Ex ? Type[Property] : Awaitable<Type[Property]>
}>

/**
 * Inverse of `PromisedValues`. Takes a record `T` and for its keys `K` turns the corresponding values into `Awaited<T[K]>`
//  * @deprecated Change name
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type AwaitedValuesEx<Type, Ex extends keyof Type = never> = ExpandRecursively<{
  [Prop in keyof Type]: Prop extends Ex ? Type[Prop] : Awaited<Type[Prop]>
}>
export type AwaitedValuesIn<Type, In extends keyof Type = never> = ExpandRecursively<{
  [Prop in keyof Type]: Prop extends In ? Awaited<Type[Prop]> : Type[Prop];
}>

/**
 * Lifts all direct properties of `obj` that are promises to the parent. 
 * @deprecated Change name
 */
export async function liftAsync<Type, In extends keyof Type = never, Ex extends keyof Type = never>(
  obj: Type, opts: { include?: In[] },
): Promise<AwaitedValuesIn<Type, In>>;
export async function liftAsync<Type, In extends keyof Type = never, Ex extends keyof Type = never>(
  obj: Type, opts: { exclude?: Ex[] },
): Promise<AwaitedValuesEx<Type, Ex>>;
export async function liftAsync<Type, In extends keyof Type = never, Ex extends keyof Type = never>(
  obj: Type, { include, exclude }: { include?: In[], exclude?: Ex[] } = {}
): Promise<any> {
  if (exclude && include) throw TypeError('Can\'t be include and exclude keys at the same time');
  if (exclude) {
    const props = (<Ex[]>Object.keys(obj)).filter(x => !exclude.includes(x))
    const results = await Promise.all(props.map(async prop => [prop, await obj[prop]] as const))
    for (const [prop, awaited] of results) { obj[prop] = awaited }
  } else if (include) {
    const props = (<In[]>Object.keys(obj)).filter(x => include.includes(x))
    const results = await Promise.all(props.map(async prop => [prop, await obj[prop]] as const))
    for (const [prop, awaited] of results) { obj[prop] = awaited }
  }
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
