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