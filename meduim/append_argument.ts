type AppendArgument<Fn, A> = Fn extends (...args: infer a) => infer Return
  ? (...args: [...a, A]) => Return
  : never;

type exAppendArgument = AppendArgument<
  (a: number, b: string) => number,
  boolean
>;
