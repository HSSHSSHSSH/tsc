/**
 * 接受一个数组，数组中的类型不唯一,不能是数组或对象
 * 返回一个对象满足：对象的key与value的值与类型相同
 */


function tupleToObj(tuple) {
    const obj = {}
    tuple.forEach(e => {
        if(Array.isArray(e)) throw Error
        if(typeof e === 'object') throw Error
        obj[e] = e
    })
    return obj
}

const tuple = [1,2,3,'4']
const res = tupleToObj(tuple)

console.log(res);