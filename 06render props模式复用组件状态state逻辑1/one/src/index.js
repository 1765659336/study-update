import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>render-props模式</h1>
				<Mouse render={(mouse) => {
					return (
							<p>
								鼠标位置:{mouse.x},{mouse.y}
							</p>
						)
				}}></Mouse>
			</div>
		)
	}
}

class Mouse extends React.Component {
	state = {
		x: 0,
		y: 0
	}
	
	render(){
		return this.props.render(this.state)
	}
	
	handleMousemove = e => {
		this.setState({
			x:e.clientX,
			y:e.clientY
		})
	}
	
	componentDidMount() {
		window.addEventListener('mousemove',this.handleMousemove)
	}
	
}

ReactDOM.render(<App></App>,document.getElementById('root'));