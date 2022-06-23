## keyof关键字

keyof操作符作用于interface , type。效果有：

取出所有key的类型，满足：

​    当interface type为索引类型时，返回key所指定的类型

```typescript
interface myIndexedType = {
    [x:string]: number
    [y:number]: string
}

// 以上会报错 因为：
//// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象

//改为
interface myIndexedType {
  [x: string]: number | string;
  [y: number]: string;
}

const myIndexedTypeImp: keyof myIndexedType = ''
//keyof myIndexedType = string | number
```

否则返回所有key的字面量类型的联合类型

```typescript
interface myType {
  name: string;
  age: number
}

const myTypeImp: keyof myType =   
      // keyof myType = 'name' | 'age'
```



## extends关键字

1.约束类型

```typescript
type myType = string | number | boolean;

function myConstrains<T extends myType>(a: T) {
  console.log(a);
}

myConstrains('')
myConstrains(false)
myConstrains(true)
myConstrains([]) //error
myConstrains({}) //error
```

2.用于类型运算中的条件运算

```typescript
type res = 1 extends 2 ? true : false;
//res = false
```

## infer

类型推导 仅在类型的条件判断 extends下才可使用

```typescript
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;
//first of array
```



## as const

作用于值，将值变为不可修改，其类型为值的字面量类型

```typescript
//as const
const arr = [1, 2, 3];
arr.push(4);

const tupleArr = [1, 2, 3] as const;
// tupleArr.push(4);  // 不可修改
// tupleArr[0] = 1.0; //不可修改

type tupleArrType = typeof tupleArr;

const tat: tupleArrType = [1, 2, 3];
tat[0] = 1.0; //不可修改
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

```

## typeof

作用于值，返回其类型，满足：

1.基本类型 返回其字面量类型

2.复合类型 返回复合类型, 满足：

​    2.1   typeof   obj   返回与obj结构相同的interface  或 type

```ty
//  easy-tuple-to-object/marks

//string类型  -> 字面量类型
const str1 = "1";

const str1_1: typeof str1 = "1";

//number 类型 -> 字面量类型
const num1 = 1;

const num1_1: typeof num1 = 1;

//boolean 类型  -> 字面量类型
const boolean1 = false;

const boolean1_1: typeof boolean1 = false;

//array类型 -> array

const arr1 = [1, 2, 3];

const arr1_1: typeof arr1 = [];

// obj类型 -> interface / type
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
```

