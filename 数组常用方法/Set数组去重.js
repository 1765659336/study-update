let arr = [1,2,3,2,4]
let newArr = [...new Set(arr)]
console.log(newArr)//[1,2,3,4]

let arr1 = ['a','hahaha','c','a']
let newArr1 = [...new Set(arr1)]
console.log(newArr1)//[ 'a', 'hahaha', 'c' ]