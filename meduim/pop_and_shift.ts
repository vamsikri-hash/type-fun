type Pop<T extends any[]> = T extends [...infer first, infer last]
  ? first
  : never;

type exPop = Pop<[1, 2, 3]>;

/*
Push - /easy/push.ts
unshift - /east/unshift.ts
*/

type Shift<T extends any[]> = T extends [infer first, ...infer last]
  ? last
  : never;

type exShift = Shift<[1, 2, 3]>;
