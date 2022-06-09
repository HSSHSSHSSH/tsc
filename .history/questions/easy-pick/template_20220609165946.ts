type MyPick<T, K> = any;

function myPick(target, keys) {
  const obj = {};
  for (let key of keys) {
    obj[key] = target[key];
  }
  return obj;
}
