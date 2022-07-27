type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer first}${From extends "" ? never : From}${infer rest}`
  ? `${first}${To}${rest}`
  : S;

type exReplace = Replace<"foobar", "foo", "bar">;

type exReplace2 = Replace<"foobar", "", "some">;
