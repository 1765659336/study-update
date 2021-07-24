import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	state = {
		number: 0
	}
	
	handleClick = () => {
		this.setState({
			number: this.state.number + 1
		})
		// 1、setState更新数据是异步的，当调用setState修改数据之后，立马输出，输出的依然还是修改之前的值
		console.log('number',this.state.number);
		// 2、多次调用setState每次setState调取的值都是修改之前的值，所以前面的setState不会影响后面的setState，它们读取的值都是一样的
		this.setState({
			number: this.state.number + 1
		})
		console.log('number',this.state.number);
	}
	
	render(){
		// 3、多个setState修改之后的值都是一样的，所以页面只会刷新一次，因此render在一开始只会执行两次，一次是渲染时，一次是更新时，当后面点击button按钮时，只会执行一次
		console.log('render');
		return (
			<div>
				<h1>{this.state.number}</h1>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))