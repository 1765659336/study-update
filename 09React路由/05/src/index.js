import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

class Login extends React.Component {
	handleLogin = () => {
		this.props.history.push('/home')
	}
	
	render(){
		return (
			<diV>
				<p>登录页面</p>
				<button onClick={this.handleLogin}>前往首页</button>
			</diV>
		)
	}
}

const Home = props => {

	const handleHome = () => {
		props.history.go(-1)
	}
	
	return (
		<div>
			<p>首页</p>
			<button onClick={handleHome}>前往登录页面</button>
		</div>
	)
}

const App = () => (
	<Router>
		<Link to="/login">前往登录</Link>
		<Route path="/login" component={Login}></Route>
		<Route path="/home" component={Home}></Route>
	</Router>
)

ReactDOM.render(<App></App>,document.getElementById('root'))