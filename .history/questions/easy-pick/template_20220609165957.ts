type MyPick<T, K> = {};

function myPick(target, keys) {
  const obj = {};
  for (let key of keys) {
    obj[key] = target[key];
  }
  return obj;
}
