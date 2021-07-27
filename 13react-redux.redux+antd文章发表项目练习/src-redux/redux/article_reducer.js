import { NEWARTICLE } from './constant.js';

const initState = [
			{
				authorName:'张三',
				article:[
					{
						articleName:'沁园春',
						time:'1999-7-3',
						content:'北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝'
			    },
					{
						articleName:'静夜思',
						time:'1999-7-4',
						content:'床前明月光，疑是地上霜。举头望明月，低头思故乡。',
					},
				],
			},
			{
				authorName:'李四',
				article:[
					{
						articleName:'春晓',
						time:'2000-0-1',
						content:'春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
					},
					{
						articleName:'江雪',
						time:'1990-10-1',
						content:'千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
					},
				],
			},
		];

// 创建一个为count服务的后厨
export default function articleReducer(preState=initState,action) {
	const {type,data} = action
	// console.log('type:',type,'data:',data);
	switch(type){
		case NEWARTICLE:
		  // map方法无法用return终止
			let lock = true;
			preState.map(item => {
				if(item.authorName === data.authorName){
					item.article = [...item.article,data.article[0]]
					lock = false;
				}
			})
			if(lock === false){
				return preState;
			}
			preState = [...preState,data];
			return preState
		default:
			return preState
	}
	
}