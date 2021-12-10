// 类型注解，是我们自己限制
let count213 :number;
count213 = 2;

// ts会自动去判断类型是number，这就是类型推断
let countInference = 123;

// 自动识别类型是number
const one = 1;
const two = 2;
const three = one + two;

// 识别是any，所以需要自己注解
function add22222( one :number , two :number ){
  return one + two;
}

// 自动推断是total是number类型
const total = add22222(1,2);

// ts可以自动推断对象中属性值的类型
const Xiaojiejie213 = {
  uname: '刘杰',
  age: 18
}