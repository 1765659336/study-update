// 只读属性
class Yihang {
  constructor(public readonly money :number){}
  // 无法通过set去修改，会报错：money是常数或只读属性
  /* set money(money :number){
    this.money = money
  } */
}

const zhaoshangyihang = new Yihang(999999999);
console.log(zhaoshangyihang.money);
// 报错，无法分配到money，因为它是常数或只读属性
// zhaoshangyihang.money = 0



// ——————————————————————————————————————
// 抽象类
abstract class Peoplep {
  // 抽象方法类似于接口，规定了要有什么方法
  abstract say()
}

class Peoplee extends Peoplep {
  say(){
    return 'China number one'
  }
}

const aaaa = new Peoplee();
console.log(aaaa.say());