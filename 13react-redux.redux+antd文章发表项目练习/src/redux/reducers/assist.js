import { NAVCHANGE } from '../constant'
const initState = ['1']

// 创建一个为count服务的后厨
export default function articleReducer(preState=initState,action) {
	const {type,data} = action
	switch(type){
		case NAVCHANGE:
		// 尽量修改整个对象或数组，防止页面不更新
			preState = [data]
			return preState
		default:
			return preState
	}
}