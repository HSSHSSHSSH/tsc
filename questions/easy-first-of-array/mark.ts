//extends的一种用法

//用作条件判断

type res = 0 extends 1 ? true : false;

const resImp: res = false;

const arr = [1, 1];

// tuple[number]  返回union类型

type tupleTypeImp = [1, "1"];

const tupleNumberImp: tupleTypeImp[number] = 1;

//infer  仅条件类型的 "extends" 子句中才允许 "infer" 声明
const a = 1;

// const aa: infer a = "a"; error
