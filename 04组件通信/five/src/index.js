import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
	state = {
		count: 1
	}
	
	add = () => {
		this.setState({
			count:this.state.count + 1
		})
	}
	
	render(){
		return (
			<div>
				<Child1 count={this.state.count}/>
				<Child2 add={this.add}/>
			</div>
		)
	}
}

const Child1 = (props) => {
	return (
		<h1>{props.count}</h1>
	)
}

function Child2(props) {
	return (
		<button onClick={() => {props.add()}}>+1</button>
	)
}

ReactDOM.render(<Parent/>,document.getElementById('root'))