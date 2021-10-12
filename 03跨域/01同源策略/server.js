const express = require('express');

const app = express();

app.get('/home',(req,res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/data',(req,res) => {
	res.send('数据');
})

app.listen(80,() => {
	console.log('服务器已经启动');
})