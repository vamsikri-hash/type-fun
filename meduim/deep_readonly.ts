// can't think of this part 🤯  - (keyof T[K] extends never)
// something related - https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};

type deepObj = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type exDeepReadonly = DeepReadonly<deepObj>;
