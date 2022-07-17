// second argument should be optional, if not passed, it will consider all keys of first type
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T]: T[P];
} & {
  [P in keyof T as Exclude<P, K>]: T[P];
};

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

type exMyReadOnly2 = MyReadonly2<Todo1>;

type exMyReadOnly22 = MyReadonly2<Todo1, "title">;
