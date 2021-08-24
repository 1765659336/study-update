/* 通过closure()函数的调用将{Obj1,Obj2}导出，当函数执行完之后，因为Obj1和Obj2导出了，还需要被使用，这样子就形成了闭包，
  使程序依然有访问Obj1和Obj2所在作用域的权限和方式
*/
function closure(){
  const Obj1 = function(name){
    this.name = name
  }
  const Obj2 = function(name2){
    this.name2 = name2
  }
  
  return {Obj1,Obj2}
}

const closureResult = closure()
const a = new closureResult.Obj1("zhangsan")
const b = new closureResult.Obj2("zhangsan")
console.log(a,b);//Obj1 { name: 'zhangsan' } Obj2 { name2: 'zhangsan' }