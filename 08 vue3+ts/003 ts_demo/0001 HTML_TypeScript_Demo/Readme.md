## 原生Typescript练习
1. npm init -y
2. yarn add vite -D
### 编写思路
1. 绑定事件处理函数
  1. 增加项
    每一项的视图 --> 列表
  2. 删除项
    将对应项的视图 --> 列表 --> 删除
  3. 改变完成状态
    将对应项的完成状态
### 面向对象、类的继承、横向切割程序-设计方案
1. 分层
  1. 外层：浏览器的事件 -> 调用方法 -> 事件处理函数的绑定
  2. 操作数据：addTodo,removeTodo,toggleComplete
  3. 操作DOM：addItem,removeItem,changeCompleted
