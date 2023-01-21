import type { Awaitable } from './common-types.ts'

/** Force intellisense to expand the typing to hide merging typings */
export type ExpandRecursively<T> = T extends Record<PropertyKey, unknown>
  ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
  : T;

/**
 * Takes a record `T` and for all its keys `K` turns the corresponding values into `Promise<T[K]>`.
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type PromisedIn<T, Incl extends keyof T = never> = ExpandRecursively<{
  [Property in keyof T]: Property extends Incl ? Awaitable<T[Property]> : T[Property]
}>

export type PromisedEx<T, Excl extends keyof T = never> = ExpandRecursively<{
  [Property in keyof T]: Property extends Excl ? T[Property] : Awaitable<T[Property]>
}>

/**
 * Inverse of `PromisedValues`. Takes a record `T` and for its keys `K` turns the corresponding values into `Awaited<T[K]>`
 */
// FIXME: better way to retain readonly and optional modifiers!???
export type AwaitedValuesEx<T, Excl extends keyof T = never> = ExpandRecursively<{
  [Prop in keyof T]: Prop extends Excl ? T[Prop] : Awaited<T[Prop]>
}>
export type AwaitedValuesIn<T, Incl extends keyof T = never> = ExpandRecursively<{
  [Prop in keyof T]: Prop extends Incl ? Awaited<T[Prop]> : T[Prop];
}>

type Rec = Record<string, unknown>;

/**
 * Lifts all direct properties of `obj` that are promises to the parent. 
 * E.g. 
 * ```
 * { foo: Promise<"bar"> } => Promise<{ foo: "bar" }>
 * ```
 * @deprecated Change name
 */
export async function liftAsync<
  T extends Rec,
  Incl extends keyof T = never, 
  Excl extends keyof T = never
>(
  obj: T, 
  opts: { include?: Incl[] }
): Promise<AwaitedValuesIn<T, Incl>>;

export async function liftAsync<
  T extends Rec, 
  Incl extends keyof T = never, 
  Excl extends keyof T = never
>(
  obj: T,
  opts: { exclude?: Excl[] },
): Promise<AwaitedValuesEx<T, Excl>>;

export async function liftAsync<
  T extends Rec, 
  Incl extends keyof T = never, 
  Excl extends keyof T = never
>(
  obj: T,
  { include, exclude }: { include?: Incl[], exclude?: Excl[] } = {}
): Promise<any> {
  if (exclude && include)
    throw TypeError('Can\'t be include and exclude keys at the same time');

  if (exclude) {
    const props = (<Excl[]>Object.keys(obj)).filter(x => !exclude.includes(x))
    const results = await Promise.all(props.map(async prop => [prop, await obj[prop]] as const))
    for (const [prop, awaited] of results) { obj[prop] = awaited }
  }

  else if (include) {
    const props = (<Incl[]>Object.keys(obj)).filter(x => include.includes(x))
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
