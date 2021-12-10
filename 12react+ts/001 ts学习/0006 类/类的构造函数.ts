// 类的构造函数，当对象被执行的时候，会自动调用这个构造函数

// 子类中使用到了构造函数，一定要在构造函数中调用super(),不然会报错,并且位置一定要写在构造函数的最上面

class Father {
  public name :string;
  constructor(name){
    this.name = name;
  }
}

class Son extends Father {
  public age :number;
  constructor(name,age){
    super(name);
    this.age = age;
  }
}
const father = new Father('爸爸')
console.log(father.name);
const son = new Son('儿子',18)
console.log(son);