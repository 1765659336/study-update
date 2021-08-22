const Person = function(name,age){
  this.name = name;
  this.age = age;
}
console.log(Person.prototype);
/* 
给Person构造函数的原型对象添加一个方法，从构造函数克隆出来的对象，都
包含这个方法
*/
Person.prototype.getName = function(){
  // 知识复习：谁调用了这个方法，this指向就是谁
  return this.name;
}

const zhangsan = new Person('张三',18);
console.log(zhangsan.name,zhangsan.age);//张三 18
console.log(zhangsan.getName());//张三