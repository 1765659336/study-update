// 第一种创建symbol的方式
let s = Symbol();
console.log(s, typeof s);

// 传递一个字符串标识名,实际上s1和s2还是随机的，唯一的
let s1 = Symbol('liujie');
let s2 = Symbol('liujie');
console.log(s1 === s2);//false

// 第二种symbol.for创建,可以通过后面的标识符查询到，可以与后面的标识符一一对应
let s3 = Symbol.for('liujie');
let s4 = Symbol.for('liujie');
console.log(s3 === s4);

// 不能与其它数据或者自己运算
let s5 = Symbol.for('1');
//s5 = s5 + 1;//Cannot convert a Symbol value to a number