type Last<T extends any[]> = T extends [...infer first, infer last]
  ? last
  : never;

type exLast = Last<[1, 2, 4]>;
