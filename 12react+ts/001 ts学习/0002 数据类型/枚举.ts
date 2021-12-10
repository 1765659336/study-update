/* 
  enum枚举是将一组“数值”放在一起作为一个，并起一个名字，
  可以通过枚举名[下标名]获取数值，下标名可以是数字也可以是字符串
  一个枚举多次声明，会自动合并(枚举合并,需要保证每一个枚举中的下标值都不冲突)
  第一个元素的下标默认是0，当给第二个元素设置下标为1时，以此类推后面的下标依次叠加（数字枚举）
  也可以给每一个数值指定一个下标
  发过来也可以通过值拿到下标(方向映射)
  异构枚举，同一个枚举中的下标可以既有数字又有字符串
  枚举中值全是字符串类型
*/
enum Color1 {
  Red,
  Green,
  Blue
}

enum Color1 {
  // 保证下标不冲突
  false = 3,
  true
}

enum Color2 {
  Red = 1,
  Green,
  Blue
}

enum Color3 {
  Red = 1,
  Green = 3,
  Blue = "a"
}

console.log(Color1[2], Color2[3], Color3["a"]);
console.log(Color1);
// { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color1["Green"]);
