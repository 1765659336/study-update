import React from 'react';
import ReactDOM from 'react-dom';

/* 组件更新
 导致组件更新的三种情况：1、组件的状态数据发生改变 2、组件调用了setState()方法 3、组件调用了forceUpdate()方法强制更新
 组件更新时的钩子函数的执行顺序是 render() componentDidUpdate()
 -------------------------------------------------
 render             每次组件渲染都会触发         主要用来渲染UI
 componentDidUpdate 组件更新（完成DOM渲染之后）  主要用来发送网络请求和DOM操作（如果要使用setState()必须放在一个if中）
 -------------------------------------------------
 */
class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			count: 0
		}
		
	}
	
	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
		// 强制更新
		this.forceUpdate();
	}
	
	render(){
		// 每执行一次setState就会调用一次render钩子函数
		console.log('生命周期函数render');
		return(
			<div>
				<Son count={this.state.count} />
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
	
}

class Son extends React.Component {
	
	render(){
		console.log('子组件生命周期函数render');
		return(
				<h1 id='h1'>次数:{this.props.count}</h1>
		)
	}
	
	componentDidUpdate(prevProps){
		console.log('子组件的生命周期函数componentDidUpdate');
		const h1 = document.getElementById('h1');
		console.log(h1);
		// 如果直接调用setState()会陷入死循环需要一个if()判断组件是否需要更新，判断条件是上一次传入的props值是否和当前的props相同
		if(prevProps !== this.props){
			console.log(prevProps,this.props);
			this.setState();
			// 网络请求也是在这里请求
		}
	}
}
ReactDOM.render(<App/> , document.getElementById('root'));