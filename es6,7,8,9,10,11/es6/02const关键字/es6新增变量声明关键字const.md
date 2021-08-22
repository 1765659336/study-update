		const声明常量，常量就是值（内存地址）不能变化的量,也就是const锁定了内存地址的引用关系
				特点：1、具有块级作用域
						if(true){
							const a = 10;
						}
						
						console.log(a);//a is not defined
						
						
						
						2、声明常量时必须赋值
						const a;//Missing initializer in const declaration
						
						
						3、常量赋值后，值不能修改
						const a = 10;
						a = 20;//Assignment to constant variable.
						
						
						//arr 对应的是一个数组，内存地址是这个数组，只要这个数组没有改变就没关系，可以改变数组里面的值。
						const arr = [1,2,3];
						arr[1] = 2222;
						console.log(arr);//[1,2222,3]
						arr = [1,2,3,4,5];//Assignment to constant variable.