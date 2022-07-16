type Unshift<T extends any[], U> = [U, ...T];

type exUnshift = Unshift<[], 1>;
type exUnshif2t = Unshift<["string"], 1>;
