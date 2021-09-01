// 会修改原数组
const arr1 = [1,3,4,2]
const arr2 = [1,3,4,2]

// 默认升序
arr1.sort()

// 降序
arr2.sort(function(a, b){
	return b - a
})

console.log(arr1,arr2)


// 字符串数组
// 默认情况下，对字符串排序，是按照ASCII的大小比较的
const arr3 = ['a','c','b']
const arr4 = ['a','c','b']

arr3.sort()
arr4.sort().reverse()

console.log(arr3,arr4)