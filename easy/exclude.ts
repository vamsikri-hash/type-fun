type MyExclude<T, U> = T extends U ? never : T

type onlyAandB = MyExclude<"a" | "b" | "c", "c">;
