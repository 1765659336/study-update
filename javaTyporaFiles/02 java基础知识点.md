# java基础知识点

## 注释
```java
public class Comment {
    public static void main(String[] args) {
        // 单行注释
        System.out.println("hello world!");
        /*
         * 多行注释
         */
    }
}
```

## javadoc 文档注释
```
    使用javadoc
    Javadoc -d 目标文件夹名 -author -version Javadoc.java
    生成一堆html+css+js网页源码
    可以使用的doc标签，详情查阅
```
```
Javadoc 工具可以识别文档注释中的一些特殊标签，这些标签一般以@开头，后跟一个指定的名字，有的也以{@开头，以}结束。Javadoc 可以识别的标签如下表所示：
```

| 标签          | 描述                                                         | 标签类型                            |
| ------------- | ------------------------------------------------------------ | ----------------------------------- |
| @author       | 作者标识                                                     | 包、 类、接口                       |
| @deprecated   | 标识当前API已经过期，仅为了保证兼容性依然存在，以此告之开发者不应再用这个API | 包、类、接口、值域、构造函数、 方法 |
| {@docRoot}    | 指明当前文档根目录的路径                                     |                                     |
| @exception    | 标志一个类抛出的异常                                         | 构造函数、 方法                     |
| {@inheritDoc} | 从直接父类继承的注释                                         |                                     |
| {@link}       | 链接到某个特定的成员对应的文档中                             | 包、类、接口、值域、构造函数、 方法 |
| {@linkplain}  | 插入一个到另一个主题的链接，但是该链接显示纯文本字体         | 包、类、接口、值域、构造函数、 方法 |
| @param        | 方法的入参名及描述信息，如入参有特别要求，可在此注释         | 构造函数、方法                      |
| @return       | 对函数返回值的注释                                           | 方法                                |
| @see          | 引用,查看相关内容，如类、方法、变量等                        | 包、类、接口、值域、构造函数、 方法 |
| @serial       | 说明一个序列化属性                                           |                                     |
| @serialData   | 说明通过writeObject( ) 和 writeExternal( )方法写的数据       |                                     |
| @serialField  | 说明一个ObjectStreamField组件                                | @                                   |
| @since        | 描述文本,API在什么程序的什么版本后开发支持                   | 包、类、接口、值域、构造函数、 方法 |
| @throws       | 构造函数或方法所会抛出的异常                                 | 构造函数、 方法                     |
| {@value}      | 显示常量的值，该常量必须是static属性                         | 静态值域                            |
| @version      | 版本号                                                       | 包、 类、接口                       |

```java
/* 
    @author 小明
    @version 1.0
*/
public class Javadoc {
    public static void main(String[] args) {
        // 单行注释
        System.out.println("hello world!");
        /*
         * 多行注释
         */
    }
}
```

## 相对路径与绝对路径

```
相对路径：从当前目录开始定位，形成一个路径
绝对路径：从顶级目录x盘开始定位，形成的路径
```

## 常用的dos命令

```
md 创建文件夹
rd 删除文件夹
dir 查看当前目录有哪些文件、文件夹
cd 切换路径
tree 查看子目录树
cls 清屏
exit 退出DOS
```

## 转义字符

```
\t: 一个制表位
\n 换行符
\\ 一个\
\" 一个"
\' 一个'
\r 一个回车
```

## 变量

```java
public class AllVariable {
    public static void main(String[] args){
        /* 
            整型：int
            double
            char
            String
        */
        /* 
            1.变量必须先声明再使用
            2.变量 = 数据类型 + 变量名 + 变量值
        */
        String name = "zhangsan";
        int age = 18;
        char gender = '男'; //为什么不能用"" 而是用''
        double score = 88.8;
        System.out.println(name);
        System.out.println(age);
        System.out.println(gender);
        System.out.println(score);
    }
}
```

## +的使用

```java
public class PlusSign {
    public static void main(String[] args){
        /* 
        + 的使用
            当 + 两边的值是数值时，进行加法运算
            当 + 两边的值是字符时，进行拼接运算
            计算顺序：从左到右
        */
        System.out.println(1+"a");
        System.out.println(1+2);
        System.out.println(1+2+"a");
    }
}
```

## 数据类型

```
[*] 占*字节
        数据类型：
            基本数据类型：
                数值型
                    整数类型：
                        byte[1]
                        short[2]
                        int[4]
                        long[8]
                    浮点类型：
                        float[4]
                        double[8]
                字符型char：char[2]
                布尔型boolean：boolean[1]
            引用数据类型：
                类class(!!!String属于类)
                接口interface
                数组[]
```

### 整数类型

```
1 byte = 8 bit
```

| 类型  | 占用存储空间 | 数值范围                     |
| ----- | ------------ | ---------------------------- |
| byte  | 1字节        | -128~127 (-2 ** 8~2 ** 8 -1) |
| short | 2字节        | -2 ** 15 ~ 2  ** 15 - 1      |
| int   | 4字节        | -2 ** 31 ~ 2  ** 31 - 1      |
| long  | 8字节        | -2 ** 63 ~ 2  ** 63 - 1      |

```
1. java的整数类型，有固定的范围和字段长度，不受操作系统的影响，以保证java程序的可移植性
2. 声明long型常量后面必须要加l负责L
3. 通常情况下，使用int型，当范围不够的时候再使用long型
```

### 浮点类型

```
浮点数（小数）= 符号位 + 指数位 + 尾数位
尾数位容易丢失，所以浮点数都是近似值
```

| 类型   | 占用存储空间 | 数值范围             |
| ------ | ------------ | -------------------- |
| float  | 4字节        | -3.403E38~3.403E38   |
| double | 8字节        | -1.798E308~1.798E308 |

```
1. 声明float型常量后面必须要加 f 或者 F
2. 浮点数的两种表示方法
	2.1 十进制表示 0.123 前面的0可以省略
	2.2 科学计数法 5.12e2 = 5.12 x 10 ** 2
3. 我们应该使用double,因为它比float更精确（见下方实例）
```

```java
public class Test {
    public static void main(String[] args) {
        double num1 = 1.231231231;
        float num2 = 1.231231231F;
        System.out.println(num1); //1.231231231
        System.out.println(num2); //1.2312312 输出的值精度没有double高
    }
}
```

```
浮点数相等陷阱
```

```java
public class Test2 {
    public static void main(String[] args){
        double num1 = 2.7;
        double num2 = 8.1 / 3;
        System.out.println(num1 == num2); //false
        /* 
            判断相等的方法
            判断两个数的差值的绝对值在一个很小的范围即可
            Math.abs 取绝对值
        */
        
        if(Math.abs(num1 - num2) < 0.0000001){
            System.out.println("相等");
        }
    }
}
```

### 字符类型

```
1. char字符必须使用''单引号包裹
2. char本质是一个整数,在输出时,是Unicode对应的字符
3. 使用\转义字符,将其后面的字符变为特殊字符的对应Unicode编码字符
4. 给char类型赋一个整数,在输出时,会按照对应的Unicode字符输出结果
5. char类型相当于一个整数,可以直接进行运算
```

```java
public class Test3 {
    public static void main(String[] args){
        char c1 = '杰';
        System.out.println((int)c1); // 26480
        char c2 = 26480;
        System.out.println(c2); // 杰
        System.out.println('杰' + 10); //26490
    }
}
```

### 布尔类型

```
1.boolean类型"只"允许取值true和false
```

## java API

[java API 中文在线文档](https://www.matools.com/api/java8)

```
怎么查找: jdk8,11 --> 包 --> 类 --> 方法
离线版自带检索
```

## 常见的编码

```
ASCII: 1个字节表示,一共128个字符(足够存放老外的字母和其它字符)
Unicode:2个字节表示字符,存放字母就比较浪费空间
utf-8:大小可变的编码,字母使用1个字节,汉字使用3个字节
gbk:字母1个字节,汉字2个字节
gb2312:gbk的缩小版
big5:繁体中文
```

## 类型转换

### 基本数据类型之间转换

#### 自动类型转换

```
当java程序在进行赋值或者运算时,精度小的类型自动转换为精度大的数据类型,这就是自动类型转换
```

```java
public class Conversion {
    public static void main(String[] args){
        double num1 = 80;
        System.out.println(num1); // 80.0
    }
}
```

```
1. 有多种类型的数据混合运算时,系统首先自动将所有数据都转换成容量最大的数据类型,然后再进行运算
2. 当我们把精度大的赋值给精度小的时,会报错.但是把精度小的赋值给精度大的时,会触发自动类型转换
3. byte,short 不会和 char 发生类型自动转换
4. byte,short,char三者参与运算时,首先都会被转换为int类型,后面再转换为最大精度的类型
5. boolean不参与转换
```

#### 强制类型转换

```
自动类型转换的逆过程,将容量大的数据类型转换为容量小的数据类型.使用时要加上强制转换符(),但可能造成精度的损失,需要格外的注意
```

```java
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
	}
}
```

```java
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
```

### 基本数据类型和String类型的转换

#### 基本数据类型转String

```
基本数据类型+ "" 即可
```

#### String类型转基本数据类型

```
通过基本类型的包装类调用parseXX方法即可
```

```java
public class StringBasic {
    public static void main(String[] args){
        System.out.println(Integer.parseInt("123")); //123
        System.out.println(Double.parseDouble("123.1")); //123.1
        System.out.println(Float.parseFloat("1F"));//1.0
        System.out.println(Short.parseShort("123"));//123
        System.out.println(Long.parseLong("123"));//123
        System.out.println(Boolean.parseBoolean("true"));//true
        System.out.println(Byte.parseByte("123"));//123
    }
}
```

