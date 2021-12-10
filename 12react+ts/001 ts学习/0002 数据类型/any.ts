/* 
  在编译时，移除类型检查，也就是可以是任意类型的值，并且值也有其对应的方法
*/
let AnyNum: any = 4.123;
console.log(AnyNum.toFixed(2));
