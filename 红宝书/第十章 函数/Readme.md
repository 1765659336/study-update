## 函数

`函数实际上是对象，每个函数都是Function类型的实例，因为函数是对象，所以函数名就是指向函数对象的指针`

### 函数的四种方式定义

1. 函数声明

```js
function sum(num1, num2) {
  return num1 + num2;
}
```

2. 函数表达式(function 不在开头的位置)

```js
let sum = function(num1, num2) {
  return num1 + num2;
};
```

3. 箭头函数

```js
let sum = (num1, num2) => {
  return num1 + num2;
};
```

4. new Function 构造函数

```js
/* 
  ！！！不推荐使用这种方式来创建函数，因为第一次是将它作为常规的ECMAScript代码，
  第二次解析传给构造函数的参数，相当于解析了两次，影响性能
*/
// 接收多个字符串参数，前面的参数都是函数的形参，最后一个参数是函数体
let sum = new Function("num1", "num2", "return num1 + num2");
console.log(sum(1, 2)); //3
```

### 箭头函数

1. 当只有一个参数的时候可以省略（）小括号
2. 当箭头后面只有一段代码的时候可以省略{}大括号，但是会隐式的 return 这一段代码
3. 箭头函数不能使用`???arguments、super和new.target,也不能用作构造函数，没有prototype属性。`

### 函数名

1. 函数名就是指向函数的指针，（复杂数据类型赋值实际上是复制了复杂数据类型的地址，将其赋值给新的变量名,给函数名赋值一个 null，就切断了指针指向地址的联系），因此一个函数可以有多个函数名。

```js
let sum = function(num1, num2) {
  return num1 + num2;
};
let newSum = sum;
sum = null;
console.log(newSum(1, 2)); //3
console.log(sum); //null
```

2. es6 的所有函数对象都会暴露一个只读的 name 属性，充当函数的标识符
   `???Object.getOwnPropertyDescriptor()方法不太了解`

```js
/* 
  函数声明和函数表达式的name属性值就是函数名
  箭头函数的name属性值是空
  new 构造函数的name属性值是anonymous "匿名"
  bind修改改变过this执行的函数的name 加一个修饰符 bound "绑定"
  get与set函数的name 加上get/set
*/
function fn1() {}
let fn2 = function() {};
let fn3 = new Function("");
let person = {
  cname: "zhangsan",
  age: 18,
  get age() {
    return this.age;
  },
  set age(newAge) {
    this.age = newAge;
  }
};
let descriptor = Object.getOwnPropertyDescriptor(person, "age");
function fn4() {}
console.log(fn1.name); // fn1
console.log(fn2.name); // fn2
console.log((() => {}).name); // 空字符串
console.log(fn3.name); // anonymous "匿名"
console.log(descriptor.get.name); // get age
console.log(descriptor.set.name); // set age
console.log(fn4.bind(null).name); // bound fn4
```

### 函数参数

1. 函数的形参和传入的参数的数量不需要相同，并不会报错，因为函数的参数在函数内部表现为一个数组。函数不关心参数的个数与其具体值。

   

   1. 当传入的实参数量多于定义的形参数量时，形参按顺序一一接收，没有接收到的都在 arguments 对象中（非箭头函数）

   ```js
   function fn1(a, b) {
     console.log(a, b); //1,2
     console.log(arguments[2]); //3
   }
   fn1(1, 2, 3);
   ```

   2. 当传入的实参数量少于定义的形参数量时，形参按顺序一一接收，未接收到实参的形参值为 undefined

   ```js
   function fn2(a, b) {
     console.log(a, b); //1,undefined
   }
   fn2(1);
   ```

   1. 函数不声明形参，照样可以传实参

   ```js
   function fn3(){
     console.log(arguments[0])//1
   }
   fn3(1);
   ```

   

2. arguments对象是一个伪数组对象（属性名类比数组的下标，属性值类比数组的值），可以通过下标获取值，且拥有.length属性，获取伪数组的长度

```js
function fn1(){
  console.log(arguments);// [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log(arguments[0]);// 1
  console.log(arguments.length);// 3
}
fn1(1,2,3);
```

3. arguments在实参传入的时候才确定的，arguments会接收到所有的实参，并为实参与形参一一对应，保持同步关系。

   1. 当实参的个数大于或等于形参的个数时，在非严格模式下，修改arguments数组的值，会同步修改对应的形参，但是并不意味着他们的内存地址相同，他们的内存地址还是分开的，只是保持同步关系而已

   ```js
   function fn1(num1, num2, num3) {
     console.log(num1);//1
     arguments[0] = 2;
     console.log(num1);//2
   }
   fn1(1, 2, 3, 4);
   ```

   2. 当实参的个数小于形参的个数时，在非严格模式下，修改超出arguments数组长度的值，不会修改对应的形参（因为该形参在一开始为被建立起同步的联系）

   ```js
   function fn2(num1, num2, num3) {
     console.log(num3);//undefined
     arguments[2] = 2;
     console.log(num3);//undefined
   }
   fn2(1, 2);
   ```

   3. 在严格模式下，修改arguments的值，不会修改形参，并且在函数中，尝试重写arguments对象会导致语法错误

   ```js
   "use strict";
   function fn1(num1,num2){
     console.log(num1);//1
     arguments[0] = 2;
     console.log(num1);//1
   } 
   fn1(1,2,3);
   
   function fn2(num1,num2){
     arguments = [];//Unexpected eval or arguments in strict mode “在严格模式下，意外的eval或者arguments”
   }
   ```

4. 箭头函数中没有arguments对象，但是我们可以用一个非箭头函数将箭头函数包起来，通过作用域来实现在箭头函数中书写arguments对象的代码

```js
function fn() {
  console.log(arguments); //[Arguments] { '0': 1, '1': 2 }
  (() => {
    console.log(arguments[0]); //1
  })();
}
fn(1, 2);
```

5. js中的所有参数都按值传递的。不可能按引用传递参数。如果把对象作为参数传递，那么传递的值就是这个对象的引用。

```js
let a = [1, 2];
function fn(arr) {
  arr.push(3);//传递复杂引用类型，传递的是指针，使用修改值的时候，会影响到原始数据
  arr = 1;//赋值给一个基本数据类型，打破了指针的引用联系
}
fn(a);
console.log(a); //[1,2,3]
```

### 函数不能重载

1. 在例如java等其它语言中，函数是可以重载的，调用一个变量名函数，会根据传入的参数数量和类型来执行不同的函数体。但是在JavaScript中不行，后定义的会覆盖先定义的

````js
function fn(num1, num2) {
  return num1 - num2;
}

function fn(num1, num2, num3) {
  return num1 + num2;
}
console.log(fn(1, 2)); //3

// 等同于
fn = function(num1, num2) {
  return num1 * num2;
};
console.log(fn(1, 2)); //2
````

2. 从两个角度来思考：1）js中的函数参数是一个数组接收的，没有参数签名和类型 2）js中的函数名是一个指针，每一个函数是一个对象，一个指针不能对应过个对象
3. js实现重载的方法： 1）借助arguments 2）TypeScript支持重载

```js
function fn(){
  return (()=>{
    if(arguments[0] === true){
      return arguments[1] + arguments[2]
    }else {
      return arguments[1] - arguments[2]
    }
  })()
}

console.log(fn(false,2,1));//1
```

```js
function addOverloading(a:number,b:number)
function addOverloading(a:string,b:string)
function addOverloading(a:any,b:any){
  if(typeof(a)==="number"){
    return a + b
  }else if(typeof(a) === "string"){
    return `${a},${b}`
  }else {
    return "false"
  }
}

console.log(addOverloading(1,2));//3
```

### 函数的默认参数

1. es6之前，实现默认参数的常用方式是检测传入的参数是否为undefined

```js
function fn(num){
  num = typeof num === "undefined" ? 0 : num;
  return num * 10
}
console.log(fn(1));//10
console.log(fn());//0
```

- - typeof是一个运算符，有2种使用方式：typeof(表达式)和typeof 变量名，第一种是对表达式做运算，第二种是对变量做运算。

  ```js
  const str = typeof (()=> "zhangsan")();
  console.log(str); // "string"
  console.log(typeof(str)); //"string"
  ```


2. es6之后，显式定义默认参数

   1. 给参数传undefined相当于没有传值

   ```js
   function fn(num = 1){
     return num * 10
   }
   console.log(fn(undefined));//10
   ```

   2. 默认参数，默认参数可以不放在最后，但是如果不放在最后的话，在我们不想给他们赋值的话，必须要传递一个undefined,来获得默认值，所以推荐放在最后

   ```js
   function fn(num1 = 2,num2){
     return num1 + num2
   }
   console.log(fn(undefined,2));//4
   ```

   3. 在使用默认参数时，arguments对象的值不反应参数的默认值，只反应函数调用时，传入的值，与此同时，跟es5严格模式一样，修改参数也不会影响arguments对象，修改arguments对象，形参也不会同步更新

   ```js
   function fn(num1, num2, num3 = 3) {
     console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
     console.log(arguments[2]); // undefined，arguments对象是在函数调用的时候生成的，不会接收到默认值
     num1 = 5;
     console.log(arguments[0]);//1，依然还是1，不会因为修改了num1，而改变arguments对象
     arguments[1] = 6;
     console.log(num2);//2，依然还是2，不会因为修改了arguments对象而改变形参的值
     return num1 + num2 + num3;
   }
   console.log(fn(1, 2));//10    5 + 2 + 3
   ```

   4. 默认参数并不限于基本数据类型和对象，也可以是函数的返回值,默认参数函数，只会在外部函数被调用的且没有传相应参数的时候被调用

   ```js
   function fn(num1,num2,
     num3 = (() => {
       /* 当console.log(fn(1,2))被注释掉，函数没有被调用的时候，不会输出“被调用了”，
       说明这个函数是在外部函数被调用且没有传入相应的实参时执行 */
       console.log("被调用了");
       return 3;
     })()
   ) {
     return num1 + num2 + num3;
   }
   console.log(fn(1,2));// 6
   ```

   5. 箭头函数同样也可以设置参数默认值，只不过，在参数只有一个的时候，也不能省略小括号（）了

   ```js
   const fn = (num1=1) => {
     return num1 * 10;
   }
   console.log(fn());// 10
   ```

### 函数默认参数作用域与暂时性死区

1. 给多个参数定义默认值时，其实和使用let关键字声明变量一样

2. 因为参数是按照顺序初始化的，所以后面参数默认值可以使用前面的参数

```js
function fn(num1 = 1,num2 = (num1 + 3)){
  return num1 + num2
} 
console.log(fn());// 5
```

3. 参数初始化顺序遵循`???暂时性死区`的规则，即前面定义的参数不能引用后面定义的

```js
function fn(num1 = num2,num2 = 2){
  return num1 + num2
} 
console.log(fn());// ReferenceError: Cannot access 'num2' before initialization 在初始化之前不能访问到num2
```

4. 参数也存在于自己的作用域中，不能访问到函数作用域

```js
function fn(num1 = 1,num2 = a){
  let a = 3;
  return num1 + num2
} 
console.log(fn());// ReferenceError: a is not defined
```

### 拓展运算符...

1. 用于传入参数

```js
function getSum() {
  /* // arguments是一个对象，没有reduce方法
  return arguments.reduce((total, item) =>
    total += item,0) */
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}
console.log(getSum(...[1, 2, 3], 4, ...[5, 6]));//21
```

2. 用于接收参数

   1. 可以使用拓展运算将接收到的所有参数组合成一个数组接收，并且是一个真正的数组

   ```js
   function getSum(...arr){
     return arr.reduce( (total,item) => total += item , 0)
   }
   console.log(getSum(1,2,3,4));//10
   ```

   2. 收集参数如果前面还有其它声明形参，则只会接收剩余的参数，如果没有剩余参数，只会得到一个空数组[  ]，并且拓展收集参数必须声明在末尾

   ```js
   function getSum(num1,...arr){
     console.log(num1); // 1
     console.log(arr); // [2,3,4]
   }
   getSum(1,2,3,4);
   ```

   3. 箭头函数不支持arguments，但是使用拓展运算符接收照样可以实现arguments的功能，甚至更好，因为是一个真正的数组

   ```js
   let getSum = (...arr) => {
     return arr.reduce( ( total,item) => total += item,0)
   }
   console.log(getSum(1,2,3,4));//10
   ```

   4. 拓展运算符的使用并不影响arguments的正常使用，它们并不冲突

   ```js
   [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
   ```

### 函数声明与函数表达式

函数声明存在`函数声明提升(函数声明会在当前作用域中，任意代码执行之前被提升至执行上下文的顶部)`因此在代码编写时，函数声明在函数调用后面，依然是可以执行且不会报错的

```js
console.log(add(1,2));// 3
function add(num1,num2){
  return num1 + num2
}
```

但是函数表达式不存在提升

```js
console.log(add(1,2)); // Cannot access 'add' before initialization 在初始化之前不能访问add
let add = function(num1,num2){
  return num1 + num2
}
```

### 函数作为值

函数可以用在任何可以使用变量的地方
1. 可以把函数作为一个参数传给一个函数

```js
function getSum(num1,num2){
  return num1 + num2
}

function any(isTrue,fn){
  return isTrue && fn(1,2)
}

console.log(any(true,getSum));// 3
```
2. 可以把一个函数作为另一个函数的返回值

```js
let obj = [{name: "zhangsan",age: 18},{name: "lisi",age: 20},{name: "angwu",age: 19}]
function createRedefineSort(objName){
  return function(object1,object2){
    let value1 = object1[objName];
    let value2 = object2[objName];
    if(value1 < value2){
      return -1
    }else if(value1 > value2){
      return 1
    }else {
      return 0
    }
  }
}
// array.sort(sortfunction) sortfunction	可选。规定排序顺序。必须是函数。
obj.sort(createRedefineSort("age"))
console.log(obj); //[{ name: 'zhangsan', age: 18 },{ name: 'angwu', age: 19 },{ name: 'lisi', age: 20 }]
```

### 函数内部中的值

在ECMAScript5中，函数中存在两个特殊对象arguments和this，ECMAScript6又新增了new.target属性

1. arguments

   这个对象只有以 function 关键字定义函数（相对于使用箭头语法创建函数）时才会有,但是arguments对象其实还有一个callee属性，是一个指向函数变量名的指针，可以拿到这个函数

   ```js
   // 经典阶级相乘函数
   function classMultiply(num){
     if(num > 1){
       return num * classMultiply(num-1)
     }else {
       return 1
     }
   }
   console.log(classMultiply(4)); // 24
   ```

   但是这么写，调用这个函数时候必须是classMultiply这个函数名，高内聚了，代码的相关性提高了，我们使用cellee属性改良代码

   ```js
   // 经典阶级相乘函数
   function classMultiply(num) {
     if (num > 1) {
       return num * arguments.callee(num - 1);
     } else {
       return 1;
     }
   }
   let newFn = classMultiply;
   classMultiply = () => {};
   console.log(newFn(4));// 24
   ```

2. this

   1. 在标准函数中，this指向：谁调用了这个函数，那么这个函数的this指向就是谁

   ```js
   global.color = "pink";
   let obj1 = {
     color: "black"
   }
   let obj2 = {
     color: "white"
   }
   function getColor(){
     console.log(this.color);
   }
   obj1.getColor = getColor
   obj2.getColor = getColor
   getColor(); // pink
   obj1.getColor(); // black
   obj2.getColor(); // white
   ```

   2. 箭头函数中，this指向箭头函数所在的父级作用域"对象"

   ```js
   global.a = 0;
   (function fn() {
     this.a = 1;
     return () => {
       console.log(this.a);
     };
   })()()
   ```

   3. `！！！在事件回调或定时回调中调用某个函数时，this 值指向的并非想要的对象。此时将回调函数写成箭头函数就可以解决问题。这是因为箭头函数中的 this 会保留定义该函数时的执行上下文。在vue中亦是如此`

   ```js
   data () {
       return {
           a: 0
       }
   },
   mounted () {
       setTimeout(function(){console.log(this.a)},1000)// undefined
       setTimeout(() => {console.log(this.a)},2000)// 0
   }
   ```

3. caller

   1. ECMAScript 5 也会给函数对象上添加一个属性：caller。这个属性引用的是调用当前函数的函数，或者如果是在全局作用域中调用的则为 null。

   ```js
   function output() {
     input();
   }
   
   function input() {
     console.log(arguments.callee.caller);
   }
   
   output(); // ƒ output(){input();}
   input(); // null
   ```

   2. 在严格模式下访问 arguments.callee 会报错。ECMAScript 5 也定义了 arguments.caller，但

      在严格模式下访问它会报错(ps: 已经不会报错了，也是undefined)，在非严格模式下则始终是 undefined。

      ```js
      (function input() {
        console.log(arguments.caller); // undefined
      })()
      ```

      ```js
      "use strict";
      function input() {
        console.log(arguments.caller); // undefined
      }
      input();
      ```

4. new.target

   函数既可以被正常的调用执行，也可以被new 关键字调用执行，通过new.target可以判断。如果是，则指向那个构造函数，如果不是则是undefined

   ```js
   function fn() {
     if (!new.target) {
       console.log(new.target);
       console.log("函数正常调用");
     } else {
       console.log(new.target);
     }
   }
   /* 
   控制台: ƒ fn(){
     if(!new.target){
       console.log(new.target);
       console.log("函数正常调用");
     }else {
       console.log(new.target);
     }
   }
    */
   new fn();
   ```

