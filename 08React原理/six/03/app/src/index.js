import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
	
	state = {
		number: 0
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