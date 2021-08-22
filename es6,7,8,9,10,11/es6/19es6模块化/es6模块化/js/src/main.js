// 解构赋值引入需要的变量
import {
	flag as flags,
	sum,
	a,
	fn2,
	Person
} from './a.js';
// 引入默认暴露
import defaultabc from './a.js';
import $ from 'jquery';
// 导入所有的变量,as用来起别名，在前面的对象中也可以使用
import * as obj from './a.js';
if (flags) {
	console.log(sum(20, 20));
	console.log(a);
	fn2();
	new Person('刘德华', 18).run();
	console.log(defaultabc);
	obj.fn2();
}
$('body').css('background-color', 'pink');
