import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

/* 
	1. 安装：yarn add react-router-dom 
	2. 导入路由的三个核心组件：Router / Route / Link
	3. 使用 Router 组件包裹整个应用
*/

class App extends React.Component {
	render(){
		return (
			<Router>
				<div>
					<h1>路由的基本使用</h1>
					<Link to="/first">页面一</Link>
					<Route path="/first" component={First}></Route>
				</div>
			</Router>
		)
	}
}

const First = () => (<div>
	<Link to="/first/second">页面二</Link>
	<Route path="/first/second" component={Second}></Route>
	<p>页面一的内容</p>
</div>)

const Second = () => <p>页面二的内容</p>

ReactDOM.render(<App></App>,document.getElementById('root'))