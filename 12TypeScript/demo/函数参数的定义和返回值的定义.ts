// 给函数的返回值添加注解，限制了该函数的返回值为number
function add(one:number,two:number) :number {
  return one + two;
}

const total1111 = add(1,2);


// 函数没有返回值,添加void注解
function clog() :void{
  console.log('clog');
}

// 函数永远执行不完(死循环、函数内部报错)添加never注解
function errorFunction() :never{
  throw new Error()
  console.log('1');
}

function forEver() :never{
  while(true){}
}

// 给函数的对象参数添加注解
function fnobj({one,two} :{one:number,two:number}){
  return one + two;
}

const totalobj = fnobj({ one:1,two:2});
console.log(totalobj);