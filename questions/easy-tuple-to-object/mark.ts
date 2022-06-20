const arr = [1,2,3]
arr.push(4)

const tupleArr = [1,2,3] as const
tupleArr.push(4)
tupleArr[0] = 1.0

type tupleArrType = typeof tupleArr

const tat:tupleArrType = [1,2,3]
tat[0] = 1.0
/**
 * as const
 * 将数组变成了readonly
 * typeof此数组为一只读的元组类型,即字面量类型
 */

function genericsConstrains<T extends tupleArrType>(a:T) {
    console.log(a);
}


genericsConstrains([])