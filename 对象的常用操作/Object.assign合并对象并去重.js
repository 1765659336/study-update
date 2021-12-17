 //原数组
 let a = { a: "c", b: "d" };
 //后端返回数组
 let b = {  b: "e",c: "c", d: undefined };
 for (let key in b) {
   if (b[key] === undefined) {
     delete b[key];
   }
 }
 a = Object.assign(a, b);
 console.log("a", a);
 //最后数据  {a: 'c', b: 'e', c: 'c'}