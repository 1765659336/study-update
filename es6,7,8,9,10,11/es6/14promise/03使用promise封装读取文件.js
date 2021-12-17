const fs = require('fs');

// 不使用promise封装
// fs.readFile('./files/文件1.md',function(err,data){
// 	if(err) throw err;
// 	// buffer转字符
// 	console.log(data.toString());
// })

// 使用promise封装
const p = new Promise(function(resolve,reject){
	fs.readFile('./files/文件1.md',function(err,data){
		// reject和resolve方法都有终止代码向下执行的功能
		if(err) reject(err);
		resolve(data)
	})
})

p.then(function(value){
	console.log(value.toString());
},function(reason){
	console.log(reason);
})