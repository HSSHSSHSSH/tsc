function readonly(obj) {
    const readonlyObj = {}
    for(let key in obj) {
        readonlyObj[`readonly${key}`] = obj[key]
    }
    return readonlyObj
}

const obj = {
    name: 'name',
    age: 'age'
}

const readonlyObj = readonly(obj)

console.log(readonlyObj);

/**
 * 循环对象属性在其key前加上obj关键字
 */