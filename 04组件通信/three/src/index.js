import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
	
	state = {
		lastName: '杰'
	}
	
	render(){
		return (<Son name={this.state.lastName}></Son>)
	}
	
}

const Son = props => {
	return (<h1>{props.name}</h1>)
}

ReactDOM.render(<Parent />,document.getElementById('root'));