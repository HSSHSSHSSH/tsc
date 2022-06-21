//keyof关键字

// interface myIndexedType {
//   [x: string]: boolean | string;
//   [y: number]: string;
// }

// // TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象

// const myIndexedTypeImp: keyof myIndexedType = "";

// interface myType {
//   name: string;
//   age: number;
// }

// const myTypeImp: keyof myType = "age";

//extends类型约束

type myType = string | number | boolean;

function myConstrains<T extends myType>(a: T) {
  console.log(a);
}

myConstrains("");
myConstrains(false);
myConstrains(true);
// myConstrains([]);
// myConstrains({});
