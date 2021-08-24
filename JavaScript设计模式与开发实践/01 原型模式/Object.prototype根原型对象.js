const obj1 = new Object();
const obj2 = {};
// Object.getPrototypeOf()获取对象的原型对象
console.log(Object.getPrototypeOf(obj1) === Object.prototype);//true
console.log(Object.getPrototypeOf(obj2) === Object.prototype);//true
// __proto__记住了对象的原型
console.log(obj1.__proto__ === Object.prototype);//true
console.log(obj2.__proto__ === Object.prototype);//true