//引入为Count组件服务的reducer
import he from './count'
//引入为Person组件服务的reducer
import rens from './person'
import { combineReducers } from 'redux'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
	he,
	rens
})