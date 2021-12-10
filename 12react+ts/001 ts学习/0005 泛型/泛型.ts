// 当函数的参数类型确定的时候
function generic(a:number) :number {
  return a;
}


// 当函数的参数不确定的时候,可以使用any，但是不能保证参数a的类型和函数的返回值类型一致
function generic2(a:any) :any {
  return a;
}


// 使用泛型
function generic3<T>(a:T) : T {
  return a;
}

// 泛型推断
console.log(generic3(10));

// 指定泛型类型
console.log(generic3<string>("hahaha"));

// 使用多个泛型
function generic4<T,K>(a:T,b:K) :T {
  console.log(b);
  return a;
}

// 泛型继承类
