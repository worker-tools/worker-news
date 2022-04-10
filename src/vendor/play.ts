// const foo = <
//   K extends PropertyKey,
//   V extends number | string,
//   T extends Record<K, V>
// >(a: T) => a

const fn = <T>(
  arg: {
    a: (a_arg: number) => T;
    b: <U extends T>(b_arg: U) => void
  }
) => null;

fn({
  a: (arg1) => ({ num: 0 }),
  b: (arg2 /** unknown */) => {
    arg2.num;
  }, // Error
});


class Store<T> {
  itemCreator<U>(
    generate: <P = Omit<T, keyof U>>(item: P) => U
  ):
    (item: Omit<T, keyof U>) => Omit<T, keyof U> & U 
  {
    return item => ({...item, ...generate(item)});
  }
}

type Person = {
  id: string;
  name: string;
  email: string;
  age?: number;
};

const create = new Store<Person>()
  .itemCreator((a) => ({id: 'ID', extra: 42}));

const person = create({name: 'John', email: 'john.doe@foo.com'});
interface MyInterface<T> {
    retrieveGeneric: (parameter: string) => T,
    operateWithGeneric: <U extends T>(generic: U) => string
}

// https://github.com/microsoft/TypeScript/issues/25092
const inferTypeFn = <T>(generic: MyInterface<T>) => generic;

// inferred type for myGeneric = MyInterface<{}>, `generic.toFixed()` marked as error (as {} doesn't have .toFixed())
// const myGeneric = inferTypeFn({
//     retrieveGeneric: parameter => 5,
//     operateWithGeneric: generic => generic.toFixed()
// });

// inferred type for myGeneric = MyInterface<number>, everything OK
const myWorkingGeneric = inferTypeFn({
    retrieveGeneric: (parameter: string) => 5,
    operateWithGeneric: generic => generic.toFixed()
});

declare function f<T>(obj: { 
  get: (p: number) => T, 
  set: <U extends T>(v: U) => void 
}): T;
const res0 = f({ get: p => 0, set: v => {} });
const res0N: number = res0; // Error

const res1 = f({ get: () => 0, set: v => {} });
const res1N: number = res1; // Works

const res2 = f({ get: p => 0, set: () => {} });
const res2N: number = res2; // Works



