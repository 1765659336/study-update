/* find方法一般用来查询数据中的一个值，并对这个值（对象）进行修改，此修改
  会修改原数组中的对象
*/

let arr = [{name:1},{name:2},{name:3}]

let result = arr.find(arr => arr.name == 2)

result.name = 4

console.log(arr);