// 导入js文件
import React from 'react';
import ReactDOM from 'react-dom';

// 创建React元素
const title = React.createElement('p',null,'hello cli');

// 渲染React元素
ReactDOM.render(title,document.getElementById('root'));