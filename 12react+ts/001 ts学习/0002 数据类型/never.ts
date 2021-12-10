/* 
  never类型是那些总是会抛出异常或死循环函数根本就不会有返回值
*/
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
  }
}