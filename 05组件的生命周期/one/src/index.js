import React from 'react';
import ReactDOM from 'react-dom';

/*创建时的生命周期
	三个钩子函数的执行顺序是：constructor render componentDidMount
	-----------------------------------------
	constructor         组件创建的时候最先执行        一般用来初始化state和为事件绑定this
	render              每次组件渲染的时候都会触发     一般用来渲染UI(不能调用setState,会造成死循环)
	componentDidMount   组件挂载之后（完成UI渲染之后） 一般用来发送网络请求和DOM操作
	-----------------------------------------
*/

class App extends React.Component {
	
	constructor(props){
		super(props);
		console.log('生命周期函数constructor');
		const btn = document.getElementById('btn');
		console.log(btn);
		this.state = {
			count: 0
		}
	}
	
	render(){
		console.log('生命周期函数render');
		const btn = document.getElementById('btn');
		console.log(btn);
		return(
			<div>
				<h1>统计次数：{this.state.count}</h1>
				<button id="btn">点击</button>
			</div>
		)
	}
	
	componentDidMount(){
		console.log('生命周期函数componentDidMount');
		// 只有在componentDidMount中拿到DOM
		const btn = document.getElementById('btn');
		console.log(btn);
	}
	
}

ReactDOM.render(<App/> , document.getElementById('root'));