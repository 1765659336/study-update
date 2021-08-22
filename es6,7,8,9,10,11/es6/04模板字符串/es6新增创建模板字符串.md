		//创建模板字符串
		let str = `liudehua`;
		console.log(str);//liudehua
		
		
		//模板字符串可以解析变量
		let name = '刘德华';
		let text = `${name} 很帅`;
		console.log(text);//刘德华很帅
		
		
		
		
		//模板字符串可以保留空格和解析标签
		let obj = {
			name: '刘德华',
			age: 18,
			sex: '男'
		}
		
		let str = `<div>
			<span>${obj.name}</span>
			<span>${obj.age}</span>
			<span>${obj.sex}</span>
		</div>`
		
		console.log(str);
		
		
		
		
		//模板字符串中可以调用函数
		let fn = (num1,num2) => num1+num2
		let str = `函数结果是：${fn(1,2)}`
		console.log(str);//函数的结果是：3