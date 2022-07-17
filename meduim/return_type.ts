type MyReturnType<T> = T extends (...args: any[]) => infer returnType
  ? returnType
  : never;

type exMyReturnType = MyReturnType<() => number>;

type MPerson = {
  name: string;
  age: number;
};

type exMyReturnType2 = MyReturnType<() => MPerson>;
