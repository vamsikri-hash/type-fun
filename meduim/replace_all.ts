type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer first}${From extends "" ? never : From}${infer rest}`
  ? `${first}${To}${ReplaceAll<rest, From, To>}`
  : S;

type exReplaceAll = ReplaceAll<"foobarbar", "bar", "foo">;
