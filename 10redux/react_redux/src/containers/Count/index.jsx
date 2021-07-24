
import React, { Component } from 'react';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 引入connect用于连接UI组件与store
import { connect } from 'react-redux'

// 左手的UI组件
class CountUI extends Component {

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value * 1)
	}
	
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value * 1)
	}

	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value * 1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value * 1,500)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{ this.props.count } </h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

// a函数的返回值作为状态传递给UI组件
// 返回值必须是对象key-value
const mapStateToProps = (state) => ({count: state})

// b函数的返回值给UI组件传递方法
// 返回值必须是对象key-value
// const mapDispatchToProps = dispatch => ({
//   jia: data => dispatch(createIncrementAction(data)),
//   jian: data => dispatch(createDecrementAction(data)),
//   jiaAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
// })


// mapDispatchToProps的简写
const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction
}

// 创建一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)