const fs = require('fs');
// 回调地狱，读取文件，获取读取数据库中的数据有先后顺序时
// fs.readFile('./files/文件1.md',function(err1,data1){
// 	fs.readFile('./files/文件2.md',function(err2,data2){
// 		fs.readFile('./files/文件3.md',function(err3,data3){
// 			let result = data1 + data2 + data3;
// 			console.log(result);
// 		})
// 	})
// })

// 使用promise封装
const p = new Promise(function(resolve,reject){
	fs.readFile('./files/文件1.md',function(err,data){
		resolve(data);
	})
}).then(function(value){
	return new Promise(function(resolve,reject){
		fs.readFile('./files/文件2.md',function(err,data){
			resolve([value,data]);
		})
	})
}).then(function(value){
	return new Promise(function(resolve,reject){
		fs.readFile('./files/文件3.md',function(err,data){
			value.push(data);
			let result = value.join(';');
			console.log(result);
		})
	})
})