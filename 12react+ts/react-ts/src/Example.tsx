import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}

interface IPeople {
  id: string;
  cname: string;
}
interface IState {
  age: number;
  count: number;
  peoples: Array<IPeople>;
}
export default class Example extends Component<IProps, IState> {
  /* 
        控制台的输出结果 1 2 1 先执行render渲染dom，渲染完毕之后调用componentDidMount生命周期函数
        在这个生命周期函数中通过this.setState()修改了状态，导致dom重新渲染，再执行一次render函数
    */
  componentDidMount() {
    console.log(2);
    // this.props.msg = "hello"; // 报错无法分配msg，因为它是只读的
    setTimeout(() => {
      //   this.state.age = 20; // 报错无法分配msg,因为它是只读的
      this.setState({ age: 20 });
    }, 1000);

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个
    for (let i = 1; i <= 100; i++) {
      this.setState({ count: this.state.count + i });
    } */

    // 正确的方式
    for (let i = 1; i <= 100; i++) {
      this.setState((state) => ({
        count: state.count + i,
      }));
    }
  }
  changeAge = (num:number): void => {
    this.setState({
      age: this.state.age + num
    });
  };
  sayHello(who:string): void{
    alert("Hello"+who);
    console.log(this.state);
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
      peoples: [{id: "1",cname: "zhangsan"},{id: "2",cname: "lisi"},{id: "3",cname: "wangwu"}]
    };
    // this.sayHello = this.sayHello.bind(this)
  }
  render() {
    console.log(1);
    if(this.state.age > 25){
      return (
        <div>age大于25了</div>
      )
    }
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button onClick={() => {this.changeAge(1)}} onMouseLeave={this.sayHello.bind(this,"world")}>
          Age++/sayHello
        </button>
        <div>
        {
          this.state.age > 22 && "我大于22了"
        }
        {this.state.age > 22 ? "大于22" : "小于22"}
        </div>
        <ul>
          {this.state.peoples.map(item => <li key={item.id}>{item.cname}</li>)}
        </ul>
      </div>
    );
  }
}