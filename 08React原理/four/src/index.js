import React from 'react';
import ReactDOM from 'react-dom';

/* 
 1、jsx实际上就是createElement（）的语法糖，一种简写的方式
 2、jsx可以使用@babel/preset-react编译解析
 3、createElement（）最终会解析成一个react元素对象（虚拟DOM）
 */

const element1 = (<h1 className="greeting">Hello JSX!</h1>)

const element2 = React.createElement(
	'h1',
	{className:'greeting'},
	'Hello JSX!'
)

console.log(element1);//是一个react元素对象
console.log('________');
console.log(element2);//也是一个react元素对象
ReactDOM.render(element2,document.getElementById('root'))