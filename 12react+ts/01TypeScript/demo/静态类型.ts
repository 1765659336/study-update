// count必须是number类型
let count : number = 1;

// 报错
// count = 'tds';

// 定义规则
interface Xiaojiejie22 {
  uname: string,
  age: number
}

const xiaohong :Xiaojiejie22 = {
  uname: '小红',
  age: 18
}

console.log(xiaohong.uname);