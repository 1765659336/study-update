/* 
  1.类型断言实际上就是程序员告诉编译器我明确的知道这个值就是什么类型的数据
  2.当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
*/
// 写法一
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// 写法二
let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;

console.log(strLength,strLength2);//16 16