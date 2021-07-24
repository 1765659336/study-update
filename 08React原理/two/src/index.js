import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	state = {
		number: 0
	}
	
	handleClick = () => {
		// 使用这种方式，使用多个setState可以修改多次值，但是依然还是异步的，且也只会调用一次render生命周期函数
		this.setState((state,props) => { return {
			number: state.number + 1
		}})
		console.log(this.state.number);
		this.setState((state,props) => { return {
			number: state.number + 1
		}})
		console.log(this.state.number);
	}
	
	render(){
		console.log('render');
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))