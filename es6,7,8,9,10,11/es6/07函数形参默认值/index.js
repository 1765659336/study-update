// 给形参设置初始值
function add(a,b,c=3){
	return a + b + c;
}

console.log(add(1,2));

// 与解构赋值搭配使用
function fn({a,b,c,d=4}){
	console.log(a,b,c,d);
}

fn({a:1,b:2,c:3})