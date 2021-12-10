// 一般数组的注解
let arr1 :number[] = [1,2,3,4];
let arr2 :string[] = ['a','a','d'];
let arr3 :undefined[] = [undefined,undefined];
let arr4 :(number | string )[] = [1,'a'];


// 对象数组的注解,使用type给注解起别名
type Lady = {name:string,age:number};
class Mad {
  name:string;
  age:number;
}
let arr5 :Lady[] = [
  {name:'liujie',age:18}
]
let arr6 :Mad[] = [
  {name:'liujie',age:18}
]