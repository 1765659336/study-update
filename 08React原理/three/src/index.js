import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	
	state = {
		number: 0
	}
	
	handleClick = () => {
		// setState第二个回调函数参数用来在state数据更新之后立即执行的操作
		this.setState((state,props) => {
			return {
				number: state.number+1
			}
		}, () => {
			console.log('更新完成');
		})
	}
	
	render(){
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))