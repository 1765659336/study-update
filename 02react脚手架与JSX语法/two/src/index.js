import React from 'react';
import ReactDOM from 'react-dom';

// react自动配置了babel,能够将jsx解析成ECMAScript语法，推荐使用()包括起来
// jsx使用驼峰命名法
// react 中的Mustache语法是单{} vue中是{{}} 括号中可以放任意的表达式，jsx自身也是js表达式 因为react是单{}，与对象的写法起冲突了，所以是不能在{}Mustache语法中出现对象的，只在style中出现 不能出现的语句如for循环、if判断
const name = 'react';
const title = ( <h1 className = 'title'>hello {name}<span/></h1>);

ReactDOM.render(title, document.getElementById('root'));