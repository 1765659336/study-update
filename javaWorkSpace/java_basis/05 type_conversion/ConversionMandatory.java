public class ConversionMandatory {
	public static void main(String[] args){
		int i = (int)1.9;
		System.out.println(i);//1
		/*
			强制类型转换符只针对最近的操作数有效,往往会使用()提升优先级
		*/
		// int x = (int) 10.0/4+3.0;// 报错因为int只会转换10.0/4的值,3.0是double类型,最后自动类型转换值的类型会是double类型
		int x2 = (int)(10.0/4 + 3);
		System.out.println(x2);//5
		/*
			char类型可以保存int的常量值,但不能保存int的变量值
		*/
		char c1 = 100;
		int m = 100;
		// char c2 = m; // 报错
		char c3 = (char)m;
		System.out.println(c1+"-"+c3);// d-d
		/* 
			byte和short在进行运算时,当做int类型处理
		*/
		byte a = 1;
		int b = a + 10;
		System.out.println(b);//11
	}
}