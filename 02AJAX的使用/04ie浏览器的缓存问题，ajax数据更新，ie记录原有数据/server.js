const express = require('express');

const app = express();

app.get('/server',(req,res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin','*');
	// 设置响应体
	res.send('Hello Ajax GET ');
});

app.post('/server',(req,res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin','*');
	// 设置响应体
	res.send('Hello Ajax POST ');
})

// 不管是什么请求都可以响应
app.all('/server-json',(req,res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin','*');
	let person = {
		name:'liujie',
		age: 18
	}
	
	person = JSON.stringify(person);
	// 设置响应体
	res.send(person);
})

// ie缓存
app.all('/server-ie',(req,res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin','*');
	let person = {
		name:'liujie',
		age: 19
	}
	
	person = JSON.stringify(person);
	// 设置响应体
	res.send(person);
})

app.listen(80,()=>{
	console.log('服务器启动成功');
});