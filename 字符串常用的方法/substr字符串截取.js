// 放回被截取出来的字符串，不会修改原有的字符串
const str = 'abcde'

/* 
	参数1：开始截取的下标，从0开始
	参数2：截取的长度，默认截取到最后
 */
const newStr = str.substr(0,1)
console.log(newStr)//a
console.log(str)