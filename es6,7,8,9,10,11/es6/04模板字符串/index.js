// 定义
let str = `我是字符串`
console.log(str + typeof(str));

// 可以识别空格换行
let div = `
		<h1>11</h1>
		<h2>22</h2>
`
console.log(div);

// 可以解析变量
let name = 'liujie';
let who = `${name}最帅`
console.log(who);