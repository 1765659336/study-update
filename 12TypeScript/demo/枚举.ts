// 默认是从0开始，可以自己设置
enum Status {
  MESSAGE = 1,
  SPA,
  DABAOJIAN
}

function getNumber(status :any) {
  if(status === Status.MESSAGE){
    return '马杀鸡'
  }else if(status === Status.SPA){
    return 'SPA'
  }else {
    return '大保健'
  }
}

console.log(getNumber(1));
// 反查值
console.log(Status[2]);