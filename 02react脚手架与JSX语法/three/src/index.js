import React from 'react';
import ReactDOM from 'react-dom';

/*// if-eles
const data = (isLoading) => {
	if(isLoading){
		return <div>数据</div>
	}
	
	return <div>加载中</div>
}*/

/*// 三元表达式
const data = (isLoading) => {
	return isLoading ? <div>数据</div> : <div>加载中</div>
}*/

// 逻辑运算符，只能展示一个
const data = (isLoading) => {
	return isLoading && <div>数据</div>
}

const title = (
	<div>
		{data(true)}
		{data(false)}
	</div>
)

ReactDOM.render(title,document.getElementById('root'))