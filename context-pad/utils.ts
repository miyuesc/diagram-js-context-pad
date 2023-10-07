export type ArrayCollection<T> = Array<T>;
export type StringKeyValueCollection<T> = { [key: string]: T };
export type NumberKeyValueCollection<T> = { [key: number]: T };
export type KeyValueCollection<T> = StringKeyValueCollection<T> | NumberKeyValueCollection<T>;
export type Collection<T> = KeyValueCollection<T> | ArrayCollection<T>;

/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
export function forEach<T>(collection: Collection<T>, iterator: (item: T, convertKey: any) => boolean | void): T {
  let val, result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (const key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

export function isUndefined(obj: any): boolean {
  return obj === undefined;
}

export function isArray(obj: any): boolean {
  return nativeToString.call(obj) === '[object Array]';
}

export function identity<T>(arg: T): T {
  return arg;
}
export function toNum(arg: any): number {
  return Number(arg);
}
export function has<T extends Object | Array<any>>(target: T, key: string | number): boolean {
  return nativeHasOwnProperty.call(target, key);
}
