class Father {
  money:number = 99999;
}

class Son extends Father {
  name: string;
  age: number;
  constructor(name,age){
    // 在构造函数中，必须要使用一次super()[表示要调用一次父类的constructor构造函数],且必须在最上面调用,免得子类的构造函数覆盖父类的构造函数
    super();
    this.name = name;
    this.age = age;
  }
  useMoney(){
    console.log(this.money);
  }
}

const superA = new Son("liujie",18);
superA.useMoney()