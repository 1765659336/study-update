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
	}, 3000);
})

// ajax发送请求
app.all('/ajax', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {
		mag: '请求成功'
	}
	res.send(JSON.stringify(message));
})

// axios发送请求
app.all('/axios', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {
		mag: '请求成功'
	}
	res.send(JSON.stringify(message));
})

// fetch发送请求
app.all('/fetch', (req, res) => {
	// 设置响应头,允许跨域
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置响应头，可以自定义头部信息
	res.setHeader('Access-Control-Allow-Headers', '*');
	// 设置响应体
	let message = {
		mag: '请求成功'
	}
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

// check-jsonp发送请求
app.all('/check-jsonp', (req, res) => {
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
		data: "数据",
		msg: "用户名已经存在"
	};
	let str = JSON.stringify(data);
	// 在服务器端给客户端响应js代码，从而调用执行客户端的函数
	res.end(`handle(${str})`);
})

// jquery-jsonp发送请求
app.all('/jquery-jsonp', (req, res) => {
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
		data: "数据",
		city: ['北京', 'shanhai', 'shenzhen']
	};
	let str = JSON.stringify(data);
	// 接收callback参数,get的请求参数通过query获取，将函数名设置为jQuery为我们默认设置的callback的函数，可以直接调用
	let cb = req.query.callback;
	// 在服务器端给客户端响应js代码，从而调用执行客户端的函数
	res.end(`${cb}(${str})`);
})

// CORS
app.all('/cors', (req, res) => {
	// 在进行这个测试时，将80端口改成了8000端口了，因为80端口和8848端口好像没有跨域问题
	//设置响应头,允许跨域*代表全部页面
	res.setHeader('Access-Control-Allow-Origin', '*');
	// 设置某一个端口
	// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	// 设置限定的请求方式*全部请求方式
	// res.setHeader('Access-Control-Allow-Method', '*');
	res.send('success');
})

app.listen(8000, () => {
	console.log('服务器启动成功');
});
