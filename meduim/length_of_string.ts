type Len<
  S extends string,
  N extends any[]
> = S extends `${infer first}${infer rest}`
  ? Len<rest, [...N, first]>
  : N["length"];

type LengthOfString<S extends string> = Len<S, []>;

type exLenOfS = LengthOfString<"abc">;
