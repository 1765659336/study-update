import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Default extends React.Component {
	render(){
		return (
			<p>默认路由</p>
		)
	}
}

class Second extends React.Component {
	render(){
		return (
			<p>第二个页面</p>
		)
	}
}

const App = () => (
	<Router>
		<Link to = "second">前往第二个页面</Link>
		<Route exact path = '/' component = {Default}></Route>
		<Route path = '/second' component = {Second}></Route>
	</Router>
)

ReactDOM.render(<App></App>,document.getElementById('root'))