//引入为Count组件服务的reducer
import article from './article'
//引入为Person组件服务的reducer
import assist from './assist'
import { combineReducers } from 'redux'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
	article,
	assist
})