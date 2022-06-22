

function firstOfArray (arr) {
  if (!Array.isArray(arr)) throw Error
  if (arr.length > 0) {
    return arr[0]
  } else {
    return 'never'
  }
}

console.log(firstOfArray([3, 2, 1]))

console.log(firstOfArray([() => 123, { a: 'string' }]))

console.log(firstOfArray([]))

console.log(firstOfArray([undefined]))

/**
 * 判断参数是否为数组
 * 判断数组长度
 */