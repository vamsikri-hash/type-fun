type PromiseAll<P> = P extends [infer first, ...infer rest]
  ? [first extends Promise<infer V> ? V : first, ...PromiseAll<rest>]
  : P;

declare function PromiseAll<P extends any[]>(
  values: readonly [...P]
): Promise<PromiseAll<P>>;

const promiseAllTest1 = PromiseAll([1, 2, 3]);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
