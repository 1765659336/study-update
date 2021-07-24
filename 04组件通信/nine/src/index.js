import React from 'react';
import ReactDOM from 'react-dom';

/*给props对象的一些属性设置默认值*/
 
class App extends React.Component {
	render(){
		return (
			<h1>props对象的默认值:{this.props.data}</h1>
		)
	}
}

App.defaultProps = {
	data:10
}

ReactDOM.render(<App />,document.getElementById('root'));