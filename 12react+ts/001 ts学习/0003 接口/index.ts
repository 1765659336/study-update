/* 
  接口就是定义了一个类的结构，类可以创建对象，接口也可以创建对象
  接口中的所有属性都不能有实际的值
  接口中所有的方法都是抽象方法，没有具体的实现
  定义同名的接口，可以进行叠加
  类实现接口
  接口其实可以看成一个固定接口的类，也可以像类一样，互相继承
*/
interface MyT {
  name:string;
  sayHello():void;
}

// 可选属性与只读属性
interface MyT {
  readonly age: number;
  kexuan?:string;
}

interface BT {
  ccc?:string;
}
interface AT extends MyT , BT {

}

const a: AT = {
  name:"zhangsan",
  age: 20,
  sayHello(){
    console.log('nihao');
  }
}

const b: MyT = {
  name: "liujie",
  age: 18,
  sayHello(){
    console.log('nihao');
  }
}

console.log(b.age);
b.sayHello();

// 类实现接口
class ClassA implements MyT {
  name: string;
  age: number;
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log(this.name+'说nihao');
  }
}

const c = new ClassA('zhangsan',18);
c.sayHello();

// 接口继承类
class ClassB {
  cname: string;
  cage: number;
} 

interface TB extends ClassB {

}

const d: TB = {
  cname: "lisi",
  cage: 20,
}

console.log(d.cage);