import React from 'react';
import ReactDOM from 'react-dom';



// 函数组件又叫无状态组件，类组件又叫有状态组件
// 状态即为数据
// 函数组件没有自己的状态，只负责静态数据的展示
// 类组件有自己的状态，通常用来展示动态数据
class App extends React.Component {
	// constructor() {
	//   super();
	// 	this.state = {
	// 		count: 0
	// 	}
	// }
	
	// 简便写法
	state = {
		count: 1
	}
	
	// constructor() {
	// 	super();
	// 	this.add = this.add.bind(this);
	// }
	
	// add(){
	// 	this.setState({
	// 		count: this.state.count + 1,
	// 	})
	// }
	
	add = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	
	render(){
		// 状态是可变的，不能直接修改state的值，这样子只会修改值不会更新UI。setState()的作用修改state、更新UI.思想：数据驱动视图
		return (<div>
							<span>数据为:{this.state.count}</span>
							// 1、使用箭头函数的this指向render()，render里面的this指向App组件，通过this点add()调用add，将render传递给add
							// <button onClick={()=>this.add()}>+1</button>
							
							
							// 2、通过constructor里面调用bind方法改变this指向
							// <button onClick={this.add}>+1</button>
							
							
							// 3、class实例方法是箭头函数,推荐使用
							<button onClick={this.add}>+1</button>
						</div>)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))