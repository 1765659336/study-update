/* 
  typescript中，类中的成员的默认值都是public,静态的，可以被访问的
  当成员被标记成 private时，它就不能在声明它的类的外部访问
  protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类（继承）中仍然可以访问
*/

// public
class Animal2 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}


// private
class Animal3 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// new Animal3("Cat").name; // 错误: 'name' 是私有的.


// protected
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误