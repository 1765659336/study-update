import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
	
	fn = data => {
		console.log('子组件的数据：',data)
	}
	
	render(){
		return (
			<Son func={this.fn} />
		)
	}
}

class Son extends React.Component {
	state = {
		name:'爸爸'
	}
	render(){
		return (
			<h1>{this.props.func(this.state.name)}</h1>
		)
	}
}

ReactDOM.render(<Parent/>,document.getElementById('root'))