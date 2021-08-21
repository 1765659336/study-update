## JVM和JRE和JDK

JVM（Java Virtual Machine），`Java虚拟机`

JRE（Java Runtime Environment），`Java运行环境`，包含了JVM和Java的核心类库（Java API）

JDK（Java Development Kit）称为`Java开发工具`，包含了JRE和开发工具

总结：我们只需安装JDK即可，它包含了java的运行环境和虚拟机。

## 环境变量的配置

`变量名`为：JAVA_HOME 

`变量值`为 JDK 的安装路径，到 bin 目录的上一层即可。比如 D:\SoftwareInstallPath\jdk11 

注意：为防止路径输入错误，可以打开文件夹，拷贝路径。

## 注释

单行注释 //

多行注释 /**/

## 关键字

关键字是指被java语言赋予了特殊含义的单词。

关键字的字母全部小写。

常用的代码编辑器对关键字都有高亮显示，比如现在我们能看到的`public、class`、`static`等。

## 常量

`字符串常量 `用双引号括起来的多个字符（可以包含0个、一个或多个），例如"a"、"abc"、"中国"等

`整数常量 `整数，例如：-10、0、88等

`小数常量 `小数，例如：-5.5、1.0、88.88等

`字符常量`用单引号括起来的一个字符，例如：'a'、'5'、'B'、'中'等

`布尔常量 `布尔值，表示真假，只有两个值true和false

`空常量 `一个特殊的值，空值，值为null

`除空常量外，其他常量均可使用输出语句直接输出`。

## 计算机存储单位

我们知道计算机是可以用来存储数据的，但是无论是内存还是硬盘，计算机存储设备的`最小信息单元叫“位 （bit）”`，我们又称之为“比特位”，通常用小写的字母”b”表示。而计算机中`最基本的存储单元叫“字节（byte）”`，通常用大写字母”B”表示，字节是由连续的8个位组成。

除了字节外还有一些常用的存储单位，其换算单位如下：

1B（字节） = 8bit

1KB = 1024B

1MB = 1024KB

1GB = 1024MB

1TB = 1024GB

## 数据类型

`整数类型`byte,short,int,long

`浮点类型`float,double

`字符类型`char

`布尔类型`boolean

## 变量

变量：在程序运行过程中，其值可以发生改变的量。

从本质上讲，变量是内存中的一小块区域，其值可以在一定范围内变化。

```java
数据类型 变量名 = 初始化值; 
// 声明变量并赋值 
int age = 18; 
System.out.println(age);
```

### 使用变量时的注意事项

1. 在同一对花括号中，变量名不能重复。

2. 变量在使用之前，必须初始化（赋值）。

3. 定义long类型的变量时，需要在整数的后面加L（大小写均可，建议大写）。因为整数默认是int类型，整数太

大可能超出int范围。

4. 定义flfloat类型的变量时，需要在小数的后面加F（大小写均可，建议大写）。因为浮点数的默认类型是

double， double的取值范围是大于flfloat的，类型不兼容。

## 标识符

### 组成

由字母、数字、下划线“_”、美元符号“$”组成，第一个字符不能是数字。

### 注意事项

`不能使用java中的关键字作为标识符`。

标识符对`大小写敏感`（区分大小写）。

### 命名规则

小驼峰式命名：变量名、方法名

`首字母小写，从第二个单词开始每个单词的首字母大写`。

大驼峰式命名：类名

`每个单词的首字母都大写`。

## 类型转换

### 自动类型转换

把一个表示`数据范围小`的数值或者变量`赋值给`另一个表示`数据范围大`的变量。这种转换方式是自动的，直接书写即可。

```java
double num = 10; 
// 将int类型的10直接赋值给double类型 
System.out.println(num); 
// 输出10.0
```

### 强制类型转换

把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。

```java
double num1 = 5.5; 
int num2 = (int) num1; 
// 将double类型的num1强制转换为int类型 
System.out.println(num2); 
// 输出5（小数位直接舍弃）
```

### 从小到大

`byte-->char==short-->int-->long-->float-->double`

### 注意

`char类型的数据转换为int类型是按照码表中对应的int值进行计算的。`

比如在ASCII码表中，'a'对应97。

```java
int a = 'a'; 
System.out.println(a);
// 将输出97
```

`整数默认是int类型，byte、short和char类型数据参与运算均会自动转换为int类型。`

```java
byte b1 = 10; 
byte b2 = 20; 
byte b3 = b1 + b2; 
// 第三行代码会报错，b1和b2会自动转换为int类型，计算结果为int，int赋值给byte需要强制类型转换。 
// 修改为: 
int num = b1 + b2; 
// 或者：
byte b3 = (byte) (b1 + b2);
```

 `boolean类型不能与其他基本数据类型相互转换。`

## 运算符和表达式

运算符：对常量或者变量进行操作的符号

表达式：用运算符把常量或者变量连接起来符合java语法的式子就可以称为表达式

`加+`、`减-`、`乘*`、`除/`、`取余%`

`整数操作只能得到整数，要想得到小数，必须有浮点数参与运算。`

### 字符的“+”操作

`char类型参与算术运算，使用的是计算机底层对应的十进制数值`。需要我们记住三个字符对应的数值：

`'a' -- 97`a-z是连续的，所以'b'对应的数值是98，'c'是99，依次递加

`'A' -- 65` A-Z是连续的，所以'B'对应的数值是66，'C'是67，依次递加

`0' -- 48` 0-9是连续的，所以'1'对应的数值是49，'2'是50，依次递加

`算术表达式中包含不同的基本数据类型的值的时候，整个算术表达式的类型会自动进行提升。`

`byte类型，short类型和char类型将被提升到int类型，不管是否有其他类型参与运算。`

`整个表达式的类型自动提升到与表达式中最高等级的操作数相同的类型`

### 字符串的“+”操作

`在”+”操作中，如果出现了字符串，就是连接运算符`

`当连续进行“+”操作时，从左到右逐个执行。`

```java
System.out.println(1 + 2 + "itheima" + 3 + 4); // 输出：3itheima34 
// 可以使用小括号改变运算的优先级 
System.out.println(1 + 2 + "itheima" + (3 + 4)); // 输出：3itheima7
```

### 赋值运算符

`等于=、加后赋值+=、减后赋值-=、乘后赋值*=、除后赋值/=、取余后赋值%=`

`扩展的赋值运算符隐含了强制类型转换。`

### 自增自减运算符

++和-- 既可以放在变量的后边，也可以放在变量的前边。

单独使用的时候， ++和-- 无论是放在变量的前边还是后边，结果是一样的。

参与操作的时候，如果放在变量的后边，先拿变量参与操作，后拿变量做++或者--。

参与操作的时候，如果放在变量的前边，先拿变量做++或者--，后拿变量参与操作。

```java
int i = 10; 
i++; 
// 单独使用 
System.out.println("i:" + i); // i:11 int j = 10; ++j; 
// 单独使用 
System.out.println("j:" + j); // j:11 int x = 10; int y = x++; 
// 赋值运算，++在后边，所以是使用x原来的值赋值给y，x本身自增1 
System.out.println("x:" + x + ", y:" + y); // x:11，y:10 int m = 10; int n = ++m; 
// 赋值运算，++在前边，所以是使用m自增后的值赋值给n，m本身自增1 
System.out.println("m:" + m + ", m:" + m); // m:11，m:11
```

### 关系运算符

关系运算符有6种关系，分别为`小于<`、`小于等于<=`、`大于>`、`等于==`、`大于等于>=`、`不等于!=`。

关系运算符的结果都是boolean类型，要么是true，要么是false。

### 逻辑运算符

`&与`、`|或`、`^异或`、`！非`

a^b ab相同为false、不相同为true

### 短路逻辑运算符

&& 短路与 作用和&相同，但是有短路效果

|| 短路或 作用和|相同，但是有短路效果

###  三元运算符

```java
关系表达式 ? 表达式1 : 表达式2;
```

## 流程控制

### 顺序结构

顺序结构是程序中最简单最基本的流程控制，没有特定的语法结构，按照代码的先后顺序

### 分支结构

#### if语句

`if(){}`

`if(){...}else{...}`

`if(){...}else if(){...}else{...}`

#### switch语句

```java
switch (表达式) { 
    case 1: 语句体1; break; 
    case 2: 语句体2; break; 
        ... 
    default: 语句体n+1; break; 
}
```

### 循环结构

#### for循环

```java
for (初始化语句;条件判断语句;条件控制语句) { 
	循环体语句; 
}
```

#### while循环

```java
while (条件判断语句) { 
    循环体语句; 条件控制语句; 
}
```

#### do...while循环结构

```java
do {
    循环体语句; 
    条件控制语句;
}while(条件判断语句);
```

#### 死循环（无限循环）的三种格式

1. for(;;){}

2. while(true){}

3. do {} while(true);

####  跳转控制语句

跳转控制语句`（break）跳出循环，结束循环`

跳转控制语句`（continue）跳过本次循环，继续下次循环`

`注意： continue只能在循环中进行使用！`

## 数组

### 数组定义

```java
int[] arr; double[] arr; char[] arr;
```

```java
int arr[]; double arr[]; char arr[];
```

### 动态初始化

数组动态初始化就是只给定数组的长度，`由系统给出默认初始化值`

```java
int[] arr = new int[3];
```

### 访问数组元素格式

``数组名[索引]; `

### 静态初始化

`在创建数组时，直接将元素确定`

#### 完整版格式

`数据类型[] 数组名 = new 数据类型[]{元素1,元素2,...}; `

#### 简化版格式

`数据类型[] 数组名 = {元素1,元素2,...}; `

## 方法

### 无参数的方法定义格式：

```java
public static void method(){ 
    // 方法体; 
}
```

### 调用格式：

```java
method();
```

`方法必须先定义，后调用，否则程序将报错`

### 带参数的方法定义格式:

```java
public static void isEvenNumber(int number){ ... }
public static void getMax(int num1, int num2){ ... }
```

`方法定义时，参数中的数据类型与变量名都不能缺少，缺少任意一个程序将报错`

### 调用格式：

````java
isEvenNumber(10);
getMax(10,20);
````

### 带返回值方法定义格式：

```java
public static boolean isEvenNumber( int number ) { 
    return true ; 
}
public static int getMax( int a, int b ) { 
    return 100 ; 
}
```

`方法定义时return后面的返回值与方法定义上的数据类型要匹配，否则程序将报错`

### 方法的注意事项

``方法不能嵌套定义`

```java
public class MethodDemo { 
    public static void main(String[] args) { }
    public static void methodOne() { 
        public static void methodTwo() { 
            // 这里会引发编译错误!!! 
        } 
    } 
}
```

`void表示无返回值，可以省略return，也可以单独的书写return，后面不加数据`

### 方法重载

`多个方法在同一个类中、具有相同的方法名、形参类型不同或者数量不同`

```java
public class MethodDemo { 
    public static void fn(int a) { 
        //方法体 
    }
    public static int fn(double a) { 
        //方法体 
    } 
}
public class MethodDemo { 
    public static float fn(int a) { 
        //方法体 
    }
    public static int fn(int a , int b) { 
        //方法体 
    } 
}
```

```java
public class MethodTest { 
    public static void main(String[] args) { 
        //调用方法 
        System.out.println(compare(10, 20)); 
        System.out.println(compare((byte) 10, (byte) 20)); System.out.println(compare((short) 10, (short) 20)); 
        System.out.println(compare(10L, 20L)); }
    //int 
    public static boolean compare(int a, int b) { 
        System.out.println("int"); 
        return a == b; 
    }
    //byte 
    public static boolean compare(byte a, byte b) { 
        System.out.println("byte"); 
        return a == b; 
    }
    //short 
    public static boolean compare(short a, short b) { 
        System.out.println("short"); 
        return a == b; 
    }
    //long 
    public static boolean compare(long a, long b) { 
        System.out.println("long"); 
        return a == b; 
    } 
}
```

### 方法的参数传递

####  方法参数传递基本类型

```java
public class HelloWorld {
    public static void main(String[] args) {
        int number = 100;
        System.out.println("调用change方法前：" + number);
        change(number);
        System.out.println("调用change方法后：" + number);
    }

    public static void change(int number) {
        number = 200;
    }
}
```

```
调用change方法前：100
调用change方法后：100
```

`基本数据类型的参数，形式参数的改变，不影响实际参数`

#### 方法参数传递引用类型

```java
public class HelloWorld {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};
        System.out.println("调用change方法前：" + arr[1]);
        change(arr);
        System.out.println("调用change方法后：" + arr[1]);
    }

    public static void change(int[] arr) {
        arr[1] = 200;
    }
}
```

````
调用change方法前：20
调用change方法后：200
````

`对于引用类型的参数，形式参数的改变，影响实际参数的值`

