import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	
	state = {
		number: 0
	}
	
	shouldComponentUpdate(nextProps,nextState){
		// 当两次的值相同时，组件不需要重新渲染，return 一个false，不会重新执行、render函数
		console.log('更新之后的状态值',nextState.number,'更新之前的状态值',this.state.number);
		return nextState.number !== this.state.number
	}
	
	render(){
		console.log('组件渲染');
		return (
			<div>
				<p>随机数：{this.state.number}</p>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
	
	handleClick = () => {
		this.setState(() => {
			return {
				number: Math.floor(Math.random() * 3)
			}
		})
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))