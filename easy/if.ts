type If<C, T, F> = C extends true ? T : F;


type OnlyString = If<true,string,number>;

type OnlyNumber = If<false,string,number>;