import React from 'react';
import ReactDOM from 'react-dom';

const {Provider,Consumer} = React.createContext();

class App extends React.Component {
	state = {
		data: '爸爸'
	}
	
	render(){
		return (
			<Provider value={this.state.data}>
				<First></First>
			</Provider>
		)
	}
}

function First(){
	return (
		<Second></Second>
	)
}

function Second(){
	return (
		<Consumer>
			{data => <h1>{data}</h1>}
		</Consumer>
	)
}

ReactDOM.render(<App />,document.getElementById('root'))