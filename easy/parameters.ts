type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer x
) => any
  ? x
  : never;

const bar = (arg1: boolean, arg2: { a: "A" }): void => {};

/*
This should output - [boolean,{a: "A"}]
*/
type exMyParameters = MyParameters<typeof bar>;
