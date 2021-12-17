# java前置知识与准备

## java的准备

### 下载编辑器

```
在线网址运行
https://c.runoob.com/compile/10/

初学者推荐使用封装不严重的软件更利于学习
Sublime Text
Sublime Text设置中文版教程 [https://www.jb51.net/softjc/748155.html] （步骤打开Sublime --> Ctrl+Shift+P --> 输入install package并点击 --> 再输入ChineseLocalizations并点击 --> 点击Help/Language/简体中文 ）

前端人员可以使用vscode安装插件的形式
Java相关插件推荐
1.Language support for Java
2.Extension Pack for Java
3.Debugger for Java
4.Test Runner for Java
5.Language Support for Java(TM) by Red Hat

专业工具推荐idea
```

### 安装JDK

```
官方安装包下载地址[https://www.oracle.com/java/technologies/downloads/]
推荐安装jdk8和jdk11，这两个版本是用的最多的版本
windows系统安装步骤
1.我的电脑-->属性-->操作系统位数是32位/64位
2.32位下载 Windows x64 64位下载 Windows x86
3.注册Oracle账号登录下载
4.推荐勾选上安装JRE模块，安装路径中不要出现中文
5.配置环境变量（系统变量JAVA_HOME:C:\Program Files\Java\jdk1.8.0_152[jdk的安装目录] path:C:\Program Files\Java\jdk1.8.0_152\bin）
```

#### *引申知识

```
用户变量和系统变量的区别，用户变量当电脑的用户改变时，将不可用，系统变量将一直都可用
```

## java的前置知识

### java语言的特点

```
跨平台性
面向对象
强类型机制、异常处理、垃圾回收机制
java语言是解释型的（需要编译器先编译才能被运行）
```

### java运行过程

```
一次编译到处运行，java跨平台的原理
xxx.java -javac编译-> xxx.class[字节码文件] -java运行-> （1.Windows 2.Linux 3.Mac) 
```

### JDK

```
JDK[java开发工具包] = JRE[java运行环境] + java开发工具（javac,java...）
JRE[java运行环境] = JVM[java虚拟机] + 核心类库
开发者要安装JDK
使用者需要安装JRE
```

