import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
	    super();
			this.Reftxt = React.createRef();
	}
	
	getTxt = () => {
		console.log('文本内容为：',this.Reftxt.current.value);
	}
	
	render(){
		return (
			<div>
				<input type="text" ref={this.Reftxt} />
				<button type="button" onClick={this.getTxt}>获取文本框的值</button>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))