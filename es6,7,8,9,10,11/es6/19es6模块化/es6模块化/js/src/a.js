let name = 'xiaoming';
let flag = true;
function sum(num1,num2){
	return num1+num2
}

let b = 1;
let c = 2;

if(flag){
	console.log(sum(10,20));
}

// 单独暴露
// 导出方式1
export {
	flag,sum
}

// 导出方式2
export let a = 1;

// 导出函数
export function fn2(){
	console.log('我是函数2');
}

// 导出类
export class Person {
	constructor(name,age) {
	    this.name = name;
		this.age = age;
	}
	// 行走
	run(){
		console.log(this.name + '在走路');
	}
}
// default导出的方式,可以让引入者自己命名,只能有一个default,要想导出多个变量，可以使用对象的形式
const abc = 'abc';
export default abc