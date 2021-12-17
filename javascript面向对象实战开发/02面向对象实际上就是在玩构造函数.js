/* 
    构造函数的目的：为创建统一规范的对象设计了一个图纸
    new 调用构造函数创建的对象叫实例对象，这个过程称为实例化过程
    使用构造函数创建对象时的注意事项
    1.使用new调用才能创建对象
    2.1 不要写return，return一个基本数据类型没有效果
    2.2 return一个引用数据类型数据，每次new调用返回的就是return的引用数据类型数据
    3.构造函数首字母推荐大写
*/
// 1.使用new调用才能创建对象
/* function CreateObj(cname, age) {
    this.cname = cname;
    this.age = age;
}

// let obj = CreateObj("zhangsan", 18) //undefined
let obj = new CreateObj("zhangsan", 18);CreateObj { cname: 'zhangsan', age: 18 }*/

// 2.1 不要写return，return一个基本数据类型没有效果
/* function CreateObj(cname, age) {
    this.cname = cname;
    this.age = age;
    return 123;
}
let obj = new CreateObj("zhangsan", 18) //CreateObj { cname: 'zhangsan', age: 18 } */

// 2.2 return一个引用数据类型数据，每次new调用返回的就是return的引用数据类型数据
function CreateObj(cname, age) {
    this.cname = cname;
    this.age = age;
    return []
}
let obj = new CreateObj("zhangsan", 18) //[]
console.log(obj);