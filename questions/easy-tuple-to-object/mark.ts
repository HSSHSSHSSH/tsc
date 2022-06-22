import type { Equal, Expect } from "@type-challenges/utils";
//as const
const arr = [1, 2, 3];
arr.push(4);

const tupleArr = [1, 2, 3] as const;
// tupleArr.push(4);  // 不可修改
// tupleArr[0] = 1.0; //不可修改

type tupleArrType = typeof tupleArr;

const tat: tupleArrType = [1, 2, 3];
// tat[0] = 1.0; //不可修改
/**
 * as const
 * 将数组变成了readonly
 * typeof此数组为一只读的元组类型,即字面量类型
 */

function genericsConstrains<T extends tupleArrType>(a: T) {
  console.log(a);
}

genericsConstrains([1, 2, 3]);
//obj
const objAsConst = {
  name: "hsh",
  age: 25,
} as const;

const objAsConst1: typeof objAsConst = {
  name: "hsh",
  age: 25,
};

// objAsConst.name = '132'   //error
// objAsConst1.name = '132'  //error

//boolean

const boolAsConst = false as const;

const boolAsConst1: typeof boolAsConst = false;

//typeof使用

//string类型  -> 字面量类型
const str1 = "1";

const str1_1: typeof str1 = "1";

//number 类型 -> 字面量类型
const num1 = 1;

const num1_1: typeof num1 = 1;

//boolean 类型  -> 字面量类型
const boolean1 = false;

const boolean1_1: typeof boolean1 = false;

//array -> array

const arr1 = [1, 2, 3];

const arr1_1: typeof arr1 = [];
// arr1_1.concat

// obj -> interface / type
const obj1 = {
  name: "hsh",
  age: 25,
};
const obj1_1: typeof obj1 = {
  name: "hsh",
  age: 25,
};

interface objInterface {
  name: string;
  age: number;
}

type objType = {
  name: string;
  age: number;
};

const obj2: objInterface = {
  name: "hsh",
  age: 10,
};

const obj3: objType = {
  name: "hsh",
  age: 10,
};
type cases1_3 = [Expect<Equal<typeof obj1, typeof obj2>>];
type cases1_2 = [Expect<Equal<typeof obj1, typeof obj3>>];
type cases2_3 = [Expect<Equal<typeof obj2, typeof obj3>>];
