namespace Trim {
  export type Spaces = " " | "\n" | "\t";

  export type TrimLeft<S extends string> =
    S extends `${infer first}${infer rest}`
      ? first extends Spaces
        ? TrimLeft<rest>
        : S
      : "";

  type exTrimLeft = TrimLeft<"  str   ">;

  export type TrimRight<S extends string> = S extends `${infer first}${Spaces}`
    ? TrimRight<first>
    : S;

  type exTrimRight = TrimRight<"   str   ">;
}
