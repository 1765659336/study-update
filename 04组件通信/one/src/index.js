import React from 'react';
import ReactDOM from 'react-dom';

// function App(props) {
// 	return (
// 		<div>{props.name}</div>
// 	)
// }

// ReactDOM.render(<App name="jack" age={18} />,document.getElementById('root'))


class App extends React.Component {
	render(){
		return (
			<h1>{this.props.name}</h1>
		)
	}
}

ReactDOM.render(<App name="jack" age={18} />,document.getElementById('root'))