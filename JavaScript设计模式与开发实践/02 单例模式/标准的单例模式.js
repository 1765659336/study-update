// 创建实例对象的构造函数
function Singleton(name) {
  this.name = name
  this.obj = null
}

// 给构造函数创建的所有对象都添加一个方法
Singleton.prototype.getName = function(){
  // 当构造函数new出来的对象调用这个方法时，this指向的就是这个对象
  return this.name
}

// 给构造函数添加一个方法，该方法不会传递给new创建的对象
Singleton.getObj = function(name){
  this.obj = !this.obj ? this.obj = new Singleton(name) : this.obj
  return this.obj
}

const a = Singleton.getObj('zhangsan')
const b = Singleton.getObj('zhangsan')

console.log(a.getName());//zhangsan
console.log(b.getName());//zhangsan
console.log(a === b)//true