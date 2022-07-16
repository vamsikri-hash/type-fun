type Concat<T extends any[], U extends any[]> = [...T, ...U];

type exConact = Concat<[], ["1", 23, false]>;
