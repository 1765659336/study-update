// 第一次调用Reducer的时候，没有传值，不设置默认值那么就会是underfined
const initState = 0;

// 创建一个为count服务的后厨
export default function countReducer(preState=initState,action) {
	// console.log(preState,action.data,action.type);
	const {type,data} = action
	
	switch(type){
		case 'increment':
			return preState + data;
		case 'decrement':
			return preState - data;
		default:
			return preState
	}
	
}