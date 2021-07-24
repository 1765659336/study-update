// 类的内部和类的外部
// 类的外部
class Game {
  // 类的内部，不写默认是public
  public name:string;
  // private,私有的，只能在当前类的内部被访问到
  private age:number;
  // protected，保护的,只能在当前类和继承至当前类的内部被访问的到
  protected classPrivate: string
}

const wzry = new Game();

wzry.name = '王者荣耀';

/* // 报错,age是类Game的私有属性，只能在内部被访问
wzry.age */

class Jingji extends Game {
  saySSS(){
    // classPrivate可以被继承至Game的类的内部被访问的到
    return this.classPrivate
  }
}

