		super关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数。
		
		在constructor构造函数中，super一定要在写在this前面
		class Father {
			constructor(x,y){
				this.x = x;
				this.y = y;
			}
		}
		
		class Son extends Father {
			constructor(x,y){
				super(x,y);//调用父类的构造函数，这样子类就能使用父类带参数的函数
				this.x = x;
				this.y = y;
			}
		}
		
		