import React from 'react';
import ReactDOM from 'react-dom';


// 函数组件
// 格式：函数名大写、必须有返回值、渲染时可以是单标签也可以是双标签
// function Hello() {
// 	return ( 
// 		<h1>函数组件1</h1>
// 	)
// }

// const Hello = () => <h1>函数组件2</h1>



// 类组件
// 格式：类名也必须大写、碧玺有render方法且方法必须有返回值、必须继承React.Component类
// class Hello extends React.Component {
// 	render() {
// 		return <h1>类组件</h1>
// 	}
// }


// 组件模块化
import Hello from './Hello';

ReactDOM.render(<Hello/>,document.getElementById('root'));