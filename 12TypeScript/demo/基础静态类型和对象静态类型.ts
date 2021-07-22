// 基础静态类型number/string/null/undefined/void/boolean/symbol
let nub: number = 918;
let myName: string = 'lj';

// 对象静态类型
// 基础的对象类型
let xiaohong2222 :{
  uname:String,
  age:Number
} = {
  uname:'小红',
  age:18
}

// 数组对象类型
let Xiaojiejies : String [] = ['小红','小雅','王刚'];

// 类对象类型
class Person{}
let liujie :Person = new Person();

// 函数对象类型
let fun :() => String = () => 'string';

console.log(fun());