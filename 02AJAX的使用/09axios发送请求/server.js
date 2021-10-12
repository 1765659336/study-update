const express = require('express');

const app = express();

app.get('/server', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应体
	res.send('Hello Ajax GET ');
});

app.post('/server', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应体
	res.send('Hello Ajax POST ');
})

// 不管是什么请求都可以响应
app.all('/server-json', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	let person = {
		name: 'liujie',
		age: 18
	}

	person = JSON.stringify(person);
	// 设置响应体
	res.send(person);
})

// ie缓存
app.all('/server-ie', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	let person = {
		name: 'liujie',
		age: 19
	}

	person = JSON.stringify(person);
	// 设置响应体
	res.send(person);
})

// 网络延迟-手动取消请求-节流
app.all('/delay', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应体
	setTimeout(function() {
		res.send('网络延迟');
	},3000);
})

// ajax发送请求
app.all('/ajax', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {mag:'请求成功'}
	res.send(JSON.stringify(message));
})

// axios发送请求
app.all('/axios', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {mag:'请求成功'}
	res.send(JSON.stringify(message));
})

app.listen(80, () => {
	console.log('服务器启动成功');
});
