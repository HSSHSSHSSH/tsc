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

