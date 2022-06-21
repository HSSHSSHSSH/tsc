type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P; //1.
};

/**
 * 1.在ts循环一个数组类型,
 * 2.typeof的使用
 * 2.as const使用
 */
