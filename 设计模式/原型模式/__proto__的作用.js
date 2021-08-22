const obj = {}
/* 
每一个对象的__proto__属性的值都默认（不改变的情况下，apply，call）等于对象的构造函数对象的原型对象
obj.__proto__ === [constructor].prototype
*/
console.log(obj.__proto__ === Object.prototype);//true