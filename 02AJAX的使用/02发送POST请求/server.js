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

app.listen(80,()=>{
	console.log('服务器启动成功');
});