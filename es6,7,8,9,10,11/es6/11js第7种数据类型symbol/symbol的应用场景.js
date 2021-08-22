// 当我们需要向一个对象中添加方法时,如果我们不知道对象内部是怎么样的,如果直接添加可能会有命名冲突
let obj = {
	up(){
		console.log('xiangshang');
	},
	down(){
		console.log('xiangxia');
	}
}

let symobj = {
	up:Symbol(),
	down:Symbol()
}

obj[symobj.up] = function(){
	console.log('我是新添加的up方法');
}

obj[symobj.down] = function(){
	console.log('我是新添加的down方法');
}

console.log(obj);
obj[symobj.down]();