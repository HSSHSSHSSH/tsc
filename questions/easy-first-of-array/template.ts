//1
// type First<T extends any[]> = T extends [] ? never : T[0];

//extends 用于类型运算的条件判断

//2
//  type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// 获取 tuple的length属性

//3 Tuple[number] 便利元组中的元素  返回一union类型

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

//4 infer  类型推导  仅在类型的条件判断 extends下才可使用

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;
