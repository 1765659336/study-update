// 1.书面形式
/* let obj = {
    cname: "zhangsan",
    age: 18
}; */

// 2.内置构造函数创建对象
/* let obj = new Object();
obj.cname = "zhangsan";
obj.age = 18; */

// 3.函数封装创建对象
/* function createObj(cname, age) {
    return { cname, age }
}
let obj = createObj("zhangsan", 18) */

// 4.自定义构造函数创建对象
function CreateObj(cname, age) {
    this.cname = cname;
    this.age = age;
}
let obj = new CreateObj("zhangsan", 18)




console.log(obj);