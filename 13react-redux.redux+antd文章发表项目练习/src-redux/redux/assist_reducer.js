import { NAVCHANGE } from './constant.js'
const initState = ['1']

// 创建一个为count服务的后厨
export default function articleReducer(preState=initState,action) {
	const {type,data} = action
	console.log('type:',type,'data:',data);
	switch(type){
		case NAVCHANGE:
			preState[0] = data
			return preState
		default:
			return preState
	}
}