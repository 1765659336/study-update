// 关键是对象是否提供clone方法，ECMAScript提供了Object.create()来克隆对象
const PeoPle = function(){
  this.name;
  this.age;
}
const zhangsan = new PeoPle();
zhangsan.name = '张三';
zhangsan.age = 18;
const zhangsanClone = Object.create(zhangsan);
console.log(zhangsan.name,zhangsan.age);//张三 18
console.log(zhangsanClone.name,zhangsanClone.age);//张三 18