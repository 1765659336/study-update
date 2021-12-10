// 
class Xiaojiejie20 {
  // 给age赋值的简写方式
  constructor(private _age :number){}
  get age(){
    return this._age - 10
  }
  set age(age:number){
    this._age = age - 10
  }
}

const ct = new Xiaojiejie20(28);
// 因为是get和set限制的方法不用加()调用
console.log(ct.age);
ct.age = 38
console.log(ct.age);


// 静态属性static
class Mm {
  static say(){
    return "I love you"
  }
}

// 不需要创建对象，而是直接通过类来调用static静态属性，会先与new存在
console.log(Mm.say());