// 将两个构造函数都放在全局对象变量中，从而不会污染全局命名空间了
const globalObj = {
  Obj1: function(name){
    this.name = name
  },
  Obj2: function(name2){
    this.name2 = name2
  },
}

const Obj1 = 'aaa'
const a = new globalObj.Obj1('张三')
const b = new globalObj.Obj2('李四')
console.log(a,b);//Obj1 { name: '张三' } Obj2 { name2: '李四' }
console.log(Obj1);//aaa