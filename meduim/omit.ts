type MyOmit<T, K extends keyof T> = {
  [R in keyof T as Exclude<R, K>]: T[R];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type exMyOmit = MyOmit<Todo, "title">;
