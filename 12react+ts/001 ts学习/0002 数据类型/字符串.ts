/* 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
  同理，还可以使用模板字符串，ts会将字符串中中文转换为编码
*/
let names: string = "bob";
names = "smith";
let nametemplate: string = `names的值是${names}`
console.log(nametemplate);