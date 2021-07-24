import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

	// 3、特点3,如果不将props传递给super，那么就无法在constructor中使用this.props
	constructor(props) {
	  super(props);
		console.log(this.props);
	}
	
	render(){
		console.log(this.props);
		this.props.fn();
		// Cannot assign to read only property 'name' of object '#<Object>' 特点2不能修改props的值
		// this.props.name = 'liujie';
		return (
			<div>
				<h1>props.name:{this.props.name}</h1>
				<h1>props.age:{this.props.age}</h1>
				<h1>{this.props.arr[0]}</h1>
				{this.props.tag}
			</div>
		)
	}
}

// 特点1，可以转入任意类型的数据
ReactDOM.render(<Hello name="rose" age={19} arr={['red','green','blue']} fn={()=>{console.log('hahaha')}} tag={<h1>Tag</h1>}/>,document.getElementById('root'))