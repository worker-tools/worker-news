export class AppendOnlyList<T> {
  #arr: T[];
  constructor() {
    this.#arr = [];
  }
  toString(): string {
    return this.#arr.toString();
  }
  toLocaleString(): string {
    return this.#arr.toLocaleString();
  }
  push(...items: T[]): number {
    return this.#arr.push(...items);
  }
  indexOf(searchElement: T, fromIndex?: number): number {
    return this.#arr.indexOf(searchElement, fromIndex);
  }
  lastIndexOf(searchElement: T, fromIndex?: number): number {
    return this.#arr.lastIndexOf(searchElement, fromIndex);
  }
  every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
  every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  every(predicate: any, thisArg?: any): boolean {
    return this.#arr.every(predicate, thisArg);
  }
  some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    return this.#arr.some(predicate, thisArg);
  }
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    this.#arr.forEach(callbackfn, thisArg);
  }
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
  reduce<U>(callbackfn: any, initialValue?: any): T | U {
    return this.#arr.reduce(callbackfn, initialValue)
  }
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
  reduceRight<U>(callbackfn: any, initialValue?: any): T | U {
    return this.#arr.reduceRight(callbackfn, initialValue)
  }
  find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
  find<S extends T>(predicate: any, thisArg?: any): T | S | undefined {
    return this.#arr.find(predicate, thisArg)
  }
  findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    return this.#arr.findIndex(predicate, thisArg)
  }
  entries(): IterableIterator<[number, T]> {
    return this.#arr.entries()
  }
  keys(): IterableIterator<number> {
    return this.#arr.keys()
  }
  values(): IterableIterator<T> {
    return this.#arr.values()
  }
  includes(searchElement: T, fromIndex?: number): boolean {
    return this.#arr.includes(searchElement, fromIndex);
  }
  [Symbol.iterator](): IterableIterator<T> {
    return this.#arr[Symbol.iterator]();
  }
  [Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; } {
    throw new Error('Method not implemented.');
  }
}
