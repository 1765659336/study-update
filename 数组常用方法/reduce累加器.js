const arr = [
  { name: "zhangsan", age: 18 },
  { name: "lisi", age: 30 },
  { name: "wangwu", age: 20 }
];

const result = arr.reduce((total, item) => {
  item.age <= 20 && total++
  // 将这一次循环的值return给下一次循环初始值，一般用来累加、统计数组
  return total
}, 0);

console.log(result);