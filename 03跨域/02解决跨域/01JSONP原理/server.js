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

// jquery发送请求
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

// fetch发送请求
app.all('/fetch', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {mag:'请求成功'}
	res.send(JSON.stringify(message));
})

// jsonp发送请求
app.all('/jsonp', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	// 1、报错，script接受的不是js代码
	// res.send('请求成功');
	// 2、发送js代码
	// res.send('console.log("js代码")');
	// 3、jsonp原理
	const data = {
		data: "数据"
	};
	let str = JSON.stringify(data);
	// 在服务器端给客户端响应js代码，从而调用执行客户端的函数
	res.end(`handle(${str})`);
})

app.listen(80, () => {
	console.log('服务器启动成功');
});
