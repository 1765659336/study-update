/* 
  抽象类和抽象方法，不需要具体的实现细节，子类继承抽象类的时候，必须要实现这个抽象类中的抽象方法，且抽象类中的实现的方法（非抽象方法）也可以
  直接被继承，可以调用
*/
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}