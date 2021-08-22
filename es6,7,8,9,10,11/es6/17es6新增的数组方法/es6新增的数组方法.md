Array.from()
将伪数组和可遍历的对象转换为数组
//属性名必须是数字0开始不然访问不到
      var obj = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			}
			
			console.log(Array.from(obj));

实例方法: find()
用于找出第一个符合条件的数组成员， 如果没有找到返回undefined
		let arr = [1,23,4,5];
		// find接收一个函数，函数有两个形参，一个接收值，一个接收索引，return中写判断条件
		let a = arr.find((value,index) => value == 4);
		console.log(a);//4



实例方法: findIndex()
用于找出第一个符合条件的数组成员的位置， 如果没有找到返回-1
		let arr = [1,23,4,5];
		let a = arr.findIndex((value,index) => value == 4);
		let b = arr.findIndex((value,index) => value == 6)
		console.log(a);//2
		console.log(b);//-1
		
		

实例方法: includes()
判断某个数组是否包含给定的值，返回布尔值。
		let arr = [1,23,4,5];
		let a = arr.includes(2);
		let b = arr.includes(1);
		console.log(a);//false
		console.log(b);//true