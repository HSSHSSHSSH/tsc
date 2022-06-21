type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};



/**
 *
 */

/**
 * 需求：
 * 1.筛选出特定的类型
 * 2.不可超出指定所包含的类型
 */

/**s
 * 知识点
 * 1.union类型与其循环
 * 2.keyof关键字
 * 3.extends的一种用法(约束范型)
 */
