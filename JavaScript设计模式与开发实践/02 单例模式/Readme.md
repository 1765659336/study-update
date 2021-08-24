## 单例模式的定义

`官方版`：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

`通俗版`：有一些对象只需要一个，比如线程池、登录弹出框...，这个被创建的对象需要在全局作用域中。

## 标准的单例模式

实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象。

````javascript
// 创建实例对象的构造函数
function Singleton(name) {
  this.name = name
  this.obj = null
}

// 给构造函数创建的所有对象都添加一个方法
Singleton.prototype.getName = function(){
  // 当构造函数new出来的对象调用这个方法时，this指向的就是这个对象
  return this.name
}

// 给构造函数添加一个方法，该方法不会传递给new创建的对象
Singleton.getObj = function(name){
  this.obj = !this.obj ? this.obj = new Singleton(name) : this.obj
  return this.obj
}

const a = Singleton.getObj('zhangsan')
const b = Singleton.getObj('zhangsan')

console.log(a.getName());//zhangsan
console.log(b.getName());//zhangsan
console.log(a === b)//true
````

这个标准的单例模式是不透明的，使用者必须知道这个单例模式类，是通过getObj方法来创建对象，而不是通过传统的new Function()

## javaScript中的单例模式

单例模式的核心是确保只有一个实例，并提供全局访问。`JavaScript的全局对象变量可以满足要求但是全局变量的使用也会带来问题，比如命名污染，命名冲突`

### 解决命名污染的措施

1. 命名空间--创建一个全局变量对象，将其它的全局变量作为对象的属性放在全局变量对象中
2. 使用闭包封装私有变量--将其它的全局变量封装在闭包的内部，只暴露一些接口与外界通信

```javascript
// 将两个构造函数都放在全局对象变量中，从而不会污染全局命名空间了
const globalObj = {
  Obj1: function(name){
    this.name = name
  },
  Obj2: function(name2){
    this.name2 = name2
  },
}

const Obj1 = 'aaa'
const a = new globalObj.Obj1('张三')
const b = new globalObj.Obj2('李四')
console.log(a,b);//Obj1 { name: '张三' } Obj2 { name2: '李四' }
console.log(Obj1);//aaa
```

```javascript
/* 通过closure()函数的调用将{Obj1,Obj2}导出，当函数执行完之后，因为Obj1和Obj2导出了，还需要被使用，这样子就形成了闭包，
  使程序依然有访问Obj1和Obj2所在作用域的权限和方式
*/
function closure(){
  const Obj1 = function(name){
    this.name = name
  }
  const Obj2 = function(name2){
    this.name2 = name2
  }
  
  return {Obj1,Obj2}
}

const closureResult = closure()
const a = new closureResult.Obj1("zhangsan")
const b = new closureResult.Obj2("zhangsan")
console.log(a,b);//Obj1 { name: 'zhangsan' } Obj2 { name2: 'zhangsan' }
```

## 惰性单例

惰性单例指的是`在需要的时候才创建对象实例`。惰性单例是单例模式的重点，这种技术在实

际开发中非常有用。

```html
<body>
  <button id="btn">创建一个登录窗口</button>
  <script>
    // 使用立即执行函数与return形成一个闭包，将判断条件变量与函数处于同一作用域，不需要再在全局作用域下创建一个判断变量污染命名空间，妙啊！！！
    var createLogin = (function(){
      var div
      return function(){
        if(!div){
          div = document.createElement('div')
          div.innerHTML = '<h1>我是登录弹窗</h1>'
          div.style.display = 'none'
          document.body.appendChild(div)
        }

        return div
      }
    })()

    document.getElementById('btn').onclick = function(){
      var Login = createLogin()
      Login.style.display = 'block'
    }
  </script>
</body>
```

`这段代码还不是很完美，创建对象与判端对象是否已经被创建的代码都写在一个方法里面，这个方法不符合单一职责原则，这个方法无法复用。当需要创建另外一个div呢？那么就需要写一个几乎一模一样的方法`

## 通用的惰性单例

`创建一个可以复用的单例模式`

实际上这样封装之后，当我们有需求（只要是一段代码或者功能我们只需要一次，都可以想到惰性单例模式，如绑定事件，我们只需要绑定一次，而不用多次执行绑定事件的代码块）

````javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn1">创建div1</button>
    <button id="btn2">创建div2</button>
    <script>
      // 封装单例模式功能方法
      var single = function(fn) {
        var lock;
        return function() {
          console.log(lock || (lock = fn.apply(this)));
          // 妙——————————————————————————————————
          return lock || (lock = fn.apply(this));
          // ————————————————————————————————————
        };
      };

      // 创建div1的方法
      var createDiv1 = function() {
        var div = document.createElement("div");
        div.innerHTML = "我是div1";
        div.style.display = "none";
        document.body.appendChild(div);
        return div;
      };

      // 创建div2的方法
      var createDiv2 = function() {
        var div = document.createElement("div");
        div.innerHTML = "我是div2";
        div.style.display = "none";
        document.body.appendChild(div);
        return div;
      };
      
      // 单例模式创建div1的方法
      var singleCreateDiv1 = single(createDiv1)
      // 单例模式创建div2的方法
      var singleCreateDiv2 = single(createDiv2)

      document.getElementById('btn1').onclick = function(){
        var result = singleCreateDiv1()
        result.style.display = 'block'
      }

      document.getElementById('btn2').onclick = function(){
        var result = singleCreateDiv2()
        result.style.display = 'block'
      }
    </script>
  </body>
</html>
````