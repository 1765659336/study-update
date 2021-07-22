interface Jshi {
  anjiao:boolean;
  say:() => {};
}

interface Stu {
  book:boolean;
  run:() => {};
}

// 联合类型：一个变量满足多个接口规则
function aaaaaa( peo:Jshi|Stu){
  // 类型保护-断言
  if(( peo as Jshi ).anjiao){
    (peo as Jshi).say()
  }else {
    (peo as Stu).run()
  }
}