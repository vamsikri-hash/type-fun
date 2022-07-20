type Chainable<T extends {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (T[K] extends V ? never : K) : K,
    value: V
  ): Chainable<
    { [k in keyof T as k extends K ? never : k]: T[k] } & { [k in K]: V }
  >;
  get(): T;
};

declare const a: Chainable<{}>;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

type exChainable = typeof result1;
