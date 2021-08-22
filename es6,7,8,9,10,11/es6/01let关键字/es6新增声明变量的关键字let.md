		let声明的变量只处在的块级有效，具有块级作用域
		if\for\function中
		语法：
				if(true){
					let a = 10;
				}
				
				console.log(a);//a is not defined
		
		应用/作用1：防止循环变量变成全局变量
				for(var i = 0;i < 3;i++){
					
				}
				console.log(i);//3
				
				
				for(let j = 0;j < 3;j++){
					
				}
				console.log(j);//j is not defined
				
				
				
		应用/作用2：let声明的变量没有变量提升，防止污染已有的变量
				console.log(a);//a is not defined
				let a = 1;
				
				
				
		应用/作用3：let声明的变量具有暂时性死区特性
				var num = 10;
				if(true){
					console.log(num);//num is not defined
					//let会把变量固定在块级作用域中，而不去上一级作用域是否有这个变量
					let num = 1;
				}
				
				
				经典面试题：
				var arr = [];
				for(var i = 0;i < 3;i++){
					arr[i] = function(){
						console.log(i);
					}
				}
				i在全局作用域中，for循环结束之后，i的值是2
				arr[0]();//2
				arr[1]();//2	
				
				var arr = [];
				for(let i = 0;i < 3;i++){
					arr[i] = function(){
						console.log(i);
					}
				}
				
				//每次循环都会产生一个块级作用域，每个块级作用域都对应一个值，函数对应那个作用域的值。
				arr[0]();//0
				arr[1]();//1		