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

