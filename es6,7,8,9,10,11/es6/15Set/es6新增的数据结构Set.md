ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值，是一个集合对象。
Set本身是一个构造函数,用来生成Set数据结构。
		const a = new Set();
Set函数可以接受一个数组作为参数,来初始化。
		const a = new Set([1,2,2,3]);
		console.log(a);//{1,2,3}
		

支持for of 支持扩展运算符
size属性是集合的大小
方法：
add(value)添加值 返回Set本身
delete(value)删除值 返回布尔值
has() 判断是否有值，返回布尔值
clear() 清空Set,没有返回值
forEach(value => console.log(value);) 遍历Set