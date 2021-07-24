import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

/*props校验
使用步骤：1、安装包prop-types (npm install prop-types)
2、引入包
3、使用组件名.propTypes = {}的对象方式来给组件添加校验规则
4、校验规则是通过propTypes对象的属性来约束
*/ 

const App = props => {
	return (
		<h1>{props.colors}</h1>
	)
}

/*常见的约束规则
1、常见类型：propTypes.array、propTypes.bool、propTypes.func、propTypes.number、propTypes.object、propTypes.string
2、React元素类型：.element
3、必填项：在指定类型后面再.isRequired
4、特定结构的对象propTypes.shape({
	xxx: propTypes.string,
	xx: propTypes.number
})
*/
// 添加校验
App.propTypes = {
	// 约定colors的类型为数组的形式
	colors:propTypes.array
}

ReactDOM.render(<App colors={['red','green','blue']}/>,document.getElementById('root'));