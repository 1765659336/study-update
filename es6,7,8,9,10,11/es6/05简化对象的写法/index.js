let name = 'liujie';
let clog = function(){
	console.log('shuchu')
}

// 属性名和变量名相同
let obj = {
	name,
	clog,
	add(num1,num2){
		return num1 + num2;
	}
}

obj.clog();
console.log(obj.name,obj.add(1,2));