type Trim<S extends string> = Trim.TrimLeft<Trim.TrimRight<S>>;

type extrim1 = Trim<" str ">;
type exTrim2 = Trim<"str">;
type exTrim3 = Trim<" str">;
type exTrim4 = Trim<"     str">;
type exTrim5 = Trim<"str   ">;
type exTrim6 = Trim<"     str     ">;
type exTrim7 = Trim<"   \n\t foo bar \t">;
type exTrim8 = Trim<"">;
type exTrim9 = Trim<" \n\t ">;
