// 可选参数，可选参数必须在必选参数后面
function addOption(a: number, b: number[], c?: string): number {
  if (c === "a") {
    return a + b[0];
  } else {
    return a;
  }
}

console.log(addOption(1, [2]));//1
console.log(addOption(1, [2], "a"));//3
// 默认参数，默认参数可以不放在最后，但是如果不放在最后的话，在我们不想给他们赋值的话，必须要传递一个undefined,来获得默认值，所以推荐放在最后
function addDefault(a: number = 1, b: number) {
  return a + b;
}
console.log(addDefault(3,2));//5
console.log(addDefault(undefined,2));//3