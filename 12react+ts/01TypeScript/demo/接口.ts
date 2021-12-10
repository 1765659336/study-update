/* const shaixuan = (name:string,age:number,bust:number) => {
  age < 24 && bust > 94 && console.log(name+'进入了面试');
  age > 24 || bust < 94 && console.log(name+'被淘汰了');
}

const chakan = (name:string,age:number,bust:number) => {
  console.log(name+'的年龄是'+age+'胸围是'+bust);
}

shaixuan('王刚',18,99);
chakan('魏良翰',18,90); */





// 上面代码的重用性较低，使用接口可以很好的解决这个问题
// 接口interface
interface Girl {
  name:string;
  age:number;
  bust:number;
  money ?: number;
  // 可以传任意属性名为字符串，属性值为任意值
  [propname:string]:any;
  run():string;
}

//接口和别名很相似，但是接口只能是上述那种格式，别名可以就是一个注解type uname = string 

// 面试人,在冒号前面加？,表示可有可无，非必需的(接口约束对象)
const people = {
  name:'魏良翰',
  age:18,
  bust:90,
  money:9999999999,
  sex:'男',
  run:() => '跑了',
  shangke:() => '摸鱼'
}

//接口--约束--ts的类 
class Xiaojiejie implements Girl{
  name:'wanggang';
  age:18;
  bust:90;
  run:() => '小姐姐跑了'
}


// 接口--继承
interface Teacher extends Girl {
  shangke():string;
} 

const shaixuan = ( girl:Girl) => {
  girl.age < 24 && girl.bust > 94 && console.log(girl.name+'进入了面试');
  girl.age > 24 || girl.bust < 94 && console.log(girl.name+'被淘汰了');
}

const chakan = ( girl:Girl ) => {
  console.log(girl.name+'的年龄是'+girl.age+'胸围是'+girl.bust);
  girl.money && console.log(girl.name+'挣了'+girl.money+'元');
  girl.sex && console.log(girl.name+'是'+girl.sex+'的');
  girl.run && console.log(girl.name+girl.run());
}

const chakan1 = ( girl:Teacher ) => {
  console.log(girl.name+'的年龄是'+girl.age+'胸围是'+girl.bust);
  girl.money && console.log(girl.name+'挣了'+girl.money+'元');
  girl.sex && console.log(girl.name+'是'+girl.sex+'的');
  girl.run && console.log(girl.name+girl.run());
  console.log(girl.shangke());
}

shaixuan(people);
chakan(people);
chakan1(people);