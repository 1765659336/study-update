/* 解构重命名与ts的结合使用 */
let { a: newA , b: newB } : {a : number , b: string} = { a: 1, b: 'hhh'};
console.log(newA,newB);