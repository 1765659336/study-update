## 原型模式的简介

````
从设计模式的角度来讲，原型模式是用来创建对象的一种模式。
创建对象一般有两种方式：
	1、一种是先指定对象的类，然后通过类new一个对象
	2、原型模式就是不再关心对象的具体类，而是找到一个对象，通过克隆这个对象来创建一个新的对象
````

## 实现原型模式的关键

```javascript
// 关键是对象是否提供clone方法，ECMAScript5提供了Object.create()来克隆对象
const PeoPle = function(){
  this.name;
  this.age;
}
const zhangsan = new PeoPle();
zhangsan.name = '张三';
zhangsan.age = 18;
const zhangsanClone = Object.create(zhangsan);
console.log(zhangsan.name,zhangsan.age);//张三 18
console.log(zhangsanClone.name,zhangsanClone.age);//张三 18
```

## JavaScript与原型模式的关系

```
javascript本身是一门基于原型模式的面向对象语言，它的对象系统就是使用原型模式来搭建的
所有的JavaScript对象都是从某一个对象上克隆而来的
```

## JavaScript中的原型继承

`特点`

1. 所有的数据都是对象
2. 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
3. 对象会记住它的原型
4. 如果对象无法响应某个请求，那么它会把这个请求委托给它的构造函数的原型

### 所有的数据都是对象

````
javascript在设计之处，模仿了java，有基本数据类型和对象类型。基本数据类型包括undefined、number、string、boolean、function、object。按照JavaScript原型继承的本意来说，除了undefined之外，一切应该都是对象。在JavaScript中，我们不能说所有的数据都是对象，但是我们可以说大部分的数据都是对象。且JavaScript的根对象是Object.prototype原型对象。
````

```javascript
const obj1 = new Object();
const obj2 = {};
// Object.getPrototypeOf()获取对象的原型对象
console.log(Object.getPrototypeOf(obj1) === Object.prototype);//true
console.log(Object.getPrototypeOf(obj2) === Object.prototype);//true
// __proto__记住了对象的原型
console.log(obj1.__proto__ === Object.prototype);//true
console.log(obj2.__proto__ === Object.prototype);//true
```

### 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它

````
在JavaScript中，我们不关心克隆的细节，引擎内部会帮我们实现，我们要做的就是调用const obj = new Objecgt()或者const obj = {},引擎内部会从Object.prototype上面克隆一个对象出来。
````

```javascript
const Person = function(name,age){
  this.name = name;
  this.age = age;
}

/* 
给Person构造函数的原型对象添加一个方法，从构造函数克隆出来的对象，都
包含这个方法
*/
Person.prototype.getName = function(){
  // 知识复习：谁调用了这个方法，this指向就是谁
  return this.name;
}

const zhangsan = new Person('张三',18);
console.log(zhangsan.name,zhangsan.age);//张三 18
console.log(zhangsan.getName());//张三
```

```
javascript的函数即可以作为普通函数也可以作为构造函数,使用new关键字来调用时，就是构造函数，new关键字创建对象的过程实际上就是先克隆Object.prototype原型对象，然后将构造函数对象上的属性和方法以及原型链传递给克隆出来的对象，再将这个对象返回
```

### 对象会记住它的原型

```
javascript为对象提供了一个__proto__属性，属性值就是对象的原型对象，通过这个属性来记住每一个对象的原型对象，从而形成一个原型链
```

```javascript
const obj = {}
/* 
每一个对象的__proto__属性的值都默认（不改变的情况下，apply，call）等于对象的构造函数对象的原型对象
obj.__proto__ === [constructor].prototype
*/
console.log(obj.__proto__ === Object.prototype);//true
```

### 如果对象无法响应某个请求，那么它会把这个请求委托给它的构造函数的原型

```javascript
function Father(){
  this.money = 999999;
  this.house = 2;
}

function Son(){
  Father.call(this);
  this.name = '张三';
}

// 将原型链修复完成
Son.prototype = Object.create(new Father());
Son.prototype.constructor = Son;

const zhangsan = new Son();
console.log(zhangsan.name,zhangsan.money);//张三 999999
```

## 原型模式的拓展

`通过Object.create()创建对象的效率比通过构造函数创建对象的效率低`

`可以通过Object.create(null)创建一个没有原型的对象`

`ES6class语法其背后还是使用的原型链机制`

```javascript
/* ES6的背后依然还是用的原型链来创建对象 */
class Father {
  constructor(){
    this.money = 999
  }

  getMoney(){
    return this.money + '元'
  }
}

class Son extends Father{
  constructor(name){
    super();
    this.name = name;
  }

  speak(){
    return '我是儿子'
  }
}

const zhangsan = new Son(999);
console.log(zhangsan.money);//999
console.log(zhangsan.speak()+'拿了爸爸'+zhangsan.getMoney());//我是儿子拿了爸爸999元
```

