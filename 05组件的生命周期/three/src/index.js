import React from 'react';
import ReactDOM from 'react-dom';

/* 组件卸载
	组件卸载的钩子函数只有一个componentWillUnmount,触发条件是组件卸载时,一般用来清除一些程序员在之前自己定义的一些操作，比如定时器
*/
class App extends React.Component {
	
	constructor(props) {
		super(props);
	  this.state = {
			count : 0
		}
	}
	
	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	
	render(){
		// 用条件渲染将子组件卸载来触发组件生命周期--组件卸载
		return(
			<div>
				{
					this.state.count > 3?
					<p>大小大于3</p>:
					<Son count={this.state.count}></Son>
				}
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
	
}

class Son extends React.Component {
	
	render(){
		return(
			<h1>大小：{this.props.count}</h1>
		)
	}
	
	componentDidMount(){
		this.timerId = setInterval(function(){
			console.log('定时器');
		},1000)
	}
	
	componentWillUnmount(){
		console.log('组件生命周期函数componentWillUnmount');
		clearInterval(this.timerId);
	}
	
}

ReactDOM.render(<App></App>,document.getElementById('root'));