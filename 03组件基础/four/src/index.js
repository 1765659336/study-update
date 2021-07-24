import React from 'react';
import ReactDOM from 'react-dom';

// HTML中的表单元素是可输入的，也就是有自己的可变状态，而React中的可变状态通常保存在state中，并且只能通过setState()修改，最终React决定使用state来控制表单元素的值
// 文本框、富文本框、下拉框都是操作的value
// 复选框是操作checked
class App extends React.Component {
	
	state = {
		txt: '',
		city: 'bj',
		isChecked: false
	}
	
	bandleChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}
	
	render() {
		return (
			<div>
			<input name="txt" type="text" value={this.state.txt} onChange={this.bandleChange} />
			<select name="city" value={this.state.city} onChange={this.bandleChange}> <option value="bj">北京</option> <option value="sh">上海</option> <option value="sz">深圳</option> </select>
			<input type="checkbox" name="isChecked" value={this.state.isChecked} onChange={this.bandleChange}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))