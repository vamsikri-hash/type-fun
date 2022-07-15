type Push<T, U> = T extends any[] ? [...T, U] : never;

type three = Push<[1, 2], 3>;
type throwsNever = Push<number,4>;
