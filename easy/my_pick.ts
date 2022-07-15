type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type Person = {
    name: string;
    age: number;
    phno: string;
}

type SubPerson = MyPick<Person, "name" | "age">
