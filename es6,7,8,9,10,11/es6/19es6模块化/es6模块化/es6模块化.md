## 创建package.json文件

```javascript
{
	"name": "es6_babel-browserify",
	"version": "1.0.0"
}
```

## 安装babel-cli,babel-preset-se2015和browserify

npm install babel-cli browserify -g
npm install babel-preset-es2015 --save-dev
babel-cli commed line interface 命令行接口
browserify 浏览器识别require等命令
babel-preset-es2015 es6转es5的所有工具打包成的包，因为babel还有很多其它的包

## 配置babel配置文件没有后缀名，用的是JSON语法但不是JSON文件

.babelrc   babel run control

```javascript
{
	"presets": ["es2015"]
}
```

## 编译

使用babel将es6转换为es5 babel js/src -d js/lib
使用browserify编译js：browserify js/lib/main.js -o js/lib/bundle.js

代码有修改再重新编译一次

## 引入

```html
<script src="js/dist/bundle.js" type="text/javascript" charset="utf-8"></script>
```

## 引入第三方库（npm模块包）

如jQuery
npm install jquery@1

## a.js

```javascript
var name = 'xiaoming';
var flag = true;
function sum(num1,num2){
	return num1+num2
}

if(flag){
	console.log(sum(10,20));
}

// 导出方式1
export {
	flag,sum
}

// 导出方式2
export let a = 1;

// 导出函数
export function fn2(){
	console.log('我是函数2');
}

// 导出类
export class Person {
	constructor(name,age) {
	    this.name = name;
		this.age = age;
	}
	// 行走
	run(){
		console.log(this.name + '在走路');
	}
}

// default导出的方式,可以让引入者自己命名,只能有一个default,要想导出多个变量，可以使用对象的形式
const abc = 'abc';
export default abc
```

## main.js

```javascript
// 对象接受多个参数
import {flag,sum,a,fn2,Person} from './a.js';
// 变量接收默认暴露
import defaultabc from './a.js';
import $ from 'jquery';
// 导入所有的变量
import * as obj from './a.js';
if(flag){
	console.log(sum(20,20));
	console.log(a);
	fn2();
	new Person('刘德华',18).run();
	console.log(defaultabc);
	obj.fn2();
}

$('body').css('background-color','pink');
```

## 运行结果

![](D:\Typora文件目录\image\QQ截图20210429222157.png)

