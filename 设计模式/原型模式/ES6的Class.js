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