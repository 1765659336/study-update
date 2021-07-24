import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

const App = () => (
	<Router>
		<p>首页</p>
		<Route path="/" component={Login}></Route>
	</Router>
)

class Login extends React.Component {
	render(){
		return (
			<div>
				<p>登录页面</p>
			</div>
		)
	}
}

ReactDOM.render(<App></App>,document.getElementById('root'))