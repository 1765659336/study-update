import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

// Provider自动给App里面的所有组件传递store仓库
ReactDOM.render(
	<Provider store = { store }>
		<App/>
	</Provider>
	,document.getElementById('root') 
)

// react-redux的容器组件自带了监测的功能，可以不用写这段代码了
// // 监测redux中状态的改变，如果redux的状态发生了改变，那么会重新渲染组件，更新数据显示
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })