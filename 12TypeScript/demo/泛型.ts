// 泛型的基本使用

function pjie<T,P>(one :T,two :T,three :P){
  return `${one}+${two}+${three}`
}

console.log(pjie<number,string>(1,2,'hahaha'));

// 泛型在数组中使用

function arr123<T> (arr :Array<T>){
  return arr
}

console.log(arr123<number>([1,2,3]));

// 泛型在类中使用

class SelectGirl <T> {
  constructor(private girls :T[]){}
  getGirl(index :number) :T{
    return this.girls[index]
  }
}

const girl =  new SelectGirl <string> (['s','a','ss'])
console.log(girl.getGirl(1));

// 泛型继承接口

interface Dsajida {
  name :string
}

class SelectGirl2 <T extends Dsajida> {
  constructor(private girls :T[]){}
  getGirl2(index :number) : string{
    return this.girls[index].name
  }
}

const girl2 =  new SelectGirl2 ([
  {name:'liujie'},
  {name:'weilianghan'}
])
console.log(girl2.getGirl2(1));


// 泛型约束

class SelectGirl3 <T extends number | string> {
  constructor(private girls :T[]){}
  getGirl3(index :number) :T{
    return this.girls[index]
  }
}

const girl3 =  new SelectGirl3 <string> (['s','a','ss'])
console.log(girl3.getGirl3(2));