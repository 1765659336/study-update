// 以前的静态引入，一股脑的引入，不管是不是现在立马要用都直接引入，影响性能
// import * as obj from './a.js';
// console.log(obj.a);

// 动态引入import函数执行之后返回一个promise对象
import('./a.js').then(module => {
	console.log(module.a);
})