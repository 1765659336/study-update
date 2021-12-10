/* 
  1.void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
  2.声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
*/
function fnvoid(): void {
  console.log('hahaha');
}

let voidNum: void = undefined;

fnvoid();