// this is failing few test cases, but not sure why this didn't works

type Includes<T extends readonly any[], U> = T extends [
  infer first,
  ...infer rest
]
  ? U extends first
    ? first extends U
      ? true
      : Includes<rest, U>
    : Includes<rest, U>
  : false;

