type TupleToUnion<T> = T extends [infer first, ...infer rest]
  ? first | TupleToUnion<rest>
  : never;

// alternate (possibly the best :)) - type TupleToUnion<T extends any[]> = T[number]

type exTupleToUnion = TupleToUnion<[1, true, { test: 10 }]>;
