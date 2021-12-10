class CLady {
  content = 'Hi';
  sayHi(){
    return this.content
  }
}

// !!!类中的值有两种写法,一种是name:'liujie'一种是name = 'liujie'
class Xiaojiejiess extends CLady {

  sayLove(){
    return 'I love you'
  };

  sayHi(){
    return super.sayHi() + ' 你好'
  }

}

const weilianghan = new Xiaojiejiess()
console.log(weilianghan.sayHi());
console.log(weilianghan.sayLove());