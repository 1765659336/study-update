实例方法: startsWith() 和endsWith()
●startsWith: 表示参数字符串是否在原字符串的头部，返回布尔值
●endsWith: 表示参数字符串是否在原字符串的尾部，返回布尔值
		let str = 'hello world!';
		console.log(str.startsWith('hel'));//true
		console.log(str.endsWith('!'));//true
		
		
		
实例方法: repeat()
repeat方法表示将原字符串重复n次，返回一个新字符串。
		let str = 'a';
		console.log(str.repeat(2));//aa