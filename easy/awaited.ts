type MyAwaited<T extends Promise<any>> = T extends Promise<infer x>
  ? x extends Promise<any>
    ? MyAwaited<x>
    : x
  : T;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;

type aw1 = MyAwaited<X>;
type aw2 = MyAwaited<Y>;
type aw3 = MyAwaited<Z>;
type aw4 = MyAwaited<Z1>;

type awError = MyAwaited<number>;
