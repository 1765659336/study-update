# java快速入门

## hello world

```java
public class Hello {
	public static void main(String[] args){
		System.out.println("hello world");
	}
}
```

## java开发规范与注意事项

```
1.java严格区分大小写
2.java语句结尾一定要加;
3.大括号{}是成对存在的
4.一个文件中最多只能有一个public类。其它类的个数不限，如果存在多个类，编译的时候每一个类会产生对应的class文件
5.文件中包含一个public类,那么文件名一定要和这个类名相同
6.也可以将main方法放在非public类中
7.源文件注意使用utf-8,gbk的编码
```

```java
// 生成两个.class文件，可以选择运行
class Cat {
    public static void main(String[] args){
        System.out.println("我是小猫");
    }    
}

class Dog {
    public static void main(String[] args){
        System.out.println("我是小狗");
    }
}

```

