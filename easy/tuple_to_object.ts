type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type ex = TupleToObject<typeof tuple>;
