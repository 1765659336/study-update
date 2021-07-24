import React from 'react';
import ReactDOM from 'react-dom';

/* 高阶组件 */

// 高阶组件函数
function withMouse(WrappedComponent){
	// 创建提供复用属性的组件
	class Mouse extends React.Component {
		state = {
			x: 0,
			y: 0
		}
		
		render(){
			return (
				<WrappedComponent {...this.state}></WrappedComponent>
			)
		}
		
		handleMousemove = e => {
			this.setState({
				x: e.clientX,	
				y: e.clientY
			})
		}
		
		componentDidMount(){
			window.addEventListener('mousemove',this.handleMousemove)
		}
		
		componentWillUnmount(){
			window.removeEventListener('mousemove',this.handleMousemove)
		}
	}
	
	// 设置displayName
	Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
	
	return Mouse
}

// 给被增强的组件命名函数
function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// 被增强的组件
class Position extends React.Component {
	render(){
		return (
			<p>鼠标的x坐标:{this.props.x}鼠标的y坐标:{this.props.y}</p>
		)
	}
}

const WrappedPositon = withMouse(Position);

class App extends React.Component {
	render(){
		return(
			<div>
				<h1>高阶组件</h1>
				<WrappedPositon></WrappedPositon>
			</div>
		)
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))