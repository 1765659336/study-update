/* 
  抽象类和抽象方法，不需要具体的实现细节
*/
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}