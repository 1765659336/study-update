import React from 'react';
import ReactDOM from 'react-dom';

// children属性：表示组件标签的子节点。当组件标签有子节点时，props对象就会有吃了children属性，children的值可以是任意值（文本、标签、组件、甚至是函数）
class App extends React.Component {
	render(){
		return (<h1>{this.props.children}</h1>)
	}
}

ReactDOM.render(<App>我是App标签的子节点</App>,document.getElementById('root'));