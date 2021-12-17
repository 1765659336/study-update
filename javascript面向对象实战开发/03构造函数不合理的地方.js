/* 
    当构造函数中要给对象添加方法，且方法是一样的，如果将方法放在构造函数中，
    创建一个对象时，这个对象身上的方法就会占用一块内存空间
    解决办法： 将方法放在构造函数的原型对象身上
*/

function CreateObj(cname, age) {
    this.cname = cname;
    this.age = age;
}

CreateObj.prototype.sayHello = function() {
    console.log("hello world");
}

CreateObj.prototype.returnName = function() {
    return this.cname;
}

let obj = new CreateObj("zhangsan", 18);
obj.sayHello()
console.log(obj.returnName());
console.log(obj);