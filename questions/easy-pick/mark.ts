type myTypes = {
    name: string,
    age: number
}

type myExtends = keyof myTypes  //union类型

const myExtendsImp: myExtends = 'age' 