type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

/**
 * 循环interface的key
 * 在key之前加上readonly关键字
 */

/**
 * 知识点
 * keyof关键字
 * union类型的循环语法
 */