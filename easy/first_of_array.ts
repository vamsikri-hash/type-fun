type First<T extends any[]> = T extends [infer f, ...infer rest] ? f : never;

type one = First<[1, "h"]>;
