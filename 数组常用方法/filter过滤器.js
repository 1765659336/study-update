const arr = [
  { name: "zhangsan", age: 18 },
  { name: "lisi", age: 30 },
  { name: "wangwu", age: 20 }
];

const newArr = arr.filter(
  item => {
    // return 后面接筛选条件，为true的留下，false的筛去，返回一个新数组
    return item.age < 25
  }
);

console.log(newArr);