import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

// 驼峰命名法
const title = (
		<h1 className="title" style={{backgroundColor:'red',color:'green'}}>
			JSX行内样式
		</h1>
)

ReactDOM.render(title,document.getElementById('root'))