// 函数书写完整类型
let myAdd: (a: number,b: number) => number = function(a:number,b:number):number{return a*b}

// 类型推断，只写左边，右边不写，ts会进行类型推断
let MyAdd: (a:number,b:number) => number = function(a,b){
  return a * b  
}

console.log(MyAdd(2,3));