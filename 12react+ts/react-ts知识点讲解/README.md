## 配置 yarn 淘宝镜像

```
yarn config set registry https://registry.npm.taobao.org
```

## 启动 react-ts 项目

```
yarn create react-app react-ts --template typescript
```

[react 官方文档](https://react.docschina.org/docs/getting-started.html)

## 最基础的一个函数组件

```js
import { ReactNode } from "react";

interface IProps {
  // 渲染子组件
  children?: ReactNode;
}

const Lee: React.FC<IProps> = (props: IProps) => {
  return <>{props?.children}</>;
};

export default Lee;
```

## 类组件

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
export default class Example extends Component<IProps> {
  render() {
    return (
      <div>
        {this.props.msg}
        {this.props.age}
      </div>
    );
  }
}
```

## 函数组件和类组件的使用

```js
import "./App.css";
import Lee from "./Lee";
import Example from "./Example";

function App() {
  const msg = "msg";
  return (
    <div>
      <Lee msg={msg}></Lee>
      <Lee msg={msg}>123</Lee>
      <Example msg={msg} age={1}></Example>
    </div>
  );
}

export default App;
```

## props 是只读的，不能被修改

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
export default class Example extends Component<IProps> {
  componentDidMount() {
    this.props.msg = "hello"; // 报错无法分配msg，因为它是只读的
  }
  render() {
    return (
      <div>
        {this.props.msg}
        {this.props.age}
      </div>
    );
  }
}
```

## state 的初始化

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
}
export default class Example extends Component<IProps, IState> {
  /* componentDidMount(){
        this.props.msg = "hello"; // 报错无法分配msg，因为它是只读的
    } */
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
    };
  }
  render() {
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
      </div>
    );
  }
}
```

## 正确修改 state 的方式

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
}
export default class Example extends Component<IProps, IState> {
  componentDidMount() {
    console.log(2);
    // this.props.msg = "hello"; // 报错无法分配msg，因为它是只读的
    setTimeout(() => {
      this.setState({ age: 20 });
    }, 1000);
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
    };
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
      </div>
    );
  }
}
```

## componentDidMount 与 render 的执行顺序

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
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
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
    };
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
      </div>
    );
  }
}
```

## state 的更新是异步的

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
  count: number;
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
    for (let i = 1; i <= 100; i++) {
      this.setState({ count: this.state.count + i });
    } */

    // 正确的方式
    for (let i = 1; i <= 100; i++) {
      this.setState((state) => ({
        count: state.count + i,
      }));
    }

    // 如何理解为什么要加一个小括号,反正就是要保证setState方法要拿到一个对象参数就行
    /* for (let i = 1; i <= 100; i++) {
      this.setState((state) => { return {
        count: state.count + i,
      }});
    } */
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
    };
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
      </div>
    );
  }
}
```

## 在 react 中，数据流是向下的

## 事件处理,事件的回调函数写成箭头函数的形式，this 指向是组件，可以直接使用组件身上的属性和方法

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
  count: number;
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
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
  changeAge = (): void => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  sayHello = (): void => {
    alert("Hello");
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
    };
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button onClick={this.changeAge} onMouseLeave={this.sayHello}>
          Age++/sayHello
        </button>
      </div>
    );
  }
}
```

## 事件处理，当事件处理的回调函数是普通函数形式时，需要手动给它绑定 this,在构造函数中执行 this.sayHello = this.sayHello.bind(this); 或者在绑定事件时书写 onMouseLeave={this.sayHello.bind(this)} 。因此我们推荐使用箭头函数的形式

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
  count: number;
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
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
  changeAge = (): void => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  sayHello(): void {
    alert("Hello");
    console.log(this.state);
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
    };
    this.sayHello = this.sayHello.bind(this);
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button
          onClick={this.changeAge}
          onMouseLeave={this.sayHello.bind(this)}
        >
          Age++/sayHello
        </button>
      </div>
    );
  }
}
```

## 给事件处理回调函数传递参数

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
  count: number;
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
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
  changeAge = (num: number): void => {
    this.setState({
      age: this.state.age + num,
    });
  };
  sayHello(who: string): void {
    alert("Hello" + who);
    console.log(this.state);
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
    };
    // this.sayHello = this.sayHello.bind(this)
  }
  render() {
    console.log(1);
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button
          onClick={() => {
            this.changeAge(1);
          }}
          onMouseLeave={this.sayHello.bind(this, "world")}
        >
          Age++/sayHello
        </button>
      </div>
    );
  }
}
```

## 条件渲染 if...else... / 三元运算符 / &&

```js
import React, { Component } from "react";
interface IProps {
  msg: string;
  age: number;
}
interface IState {
  age: number;
  count: number;
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
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
  changeAge = (num: number): void => {
    this.setState({
      age: this.state.age + num,
    });
  };
  sayHello(who: string): void {
    alert("Hello" + who);
    console.log(this.state);
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
    };
    // this.sayHello = this.sayHello.bind(this)
  }
  render() {
    console.log(1);
    if (this.state.age > 25) {
      return <div>age大于25了</div>;
    }
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button
          onClick={() => {
            this.changeAge(1);
          }}
          onMouseLeave={this.sayHello.bind(this, "world")}
        >
          Age++/sayHello
        </button>
        <div>
          {this.state.age > 22 && "我大于22了"}
          {this.state.age > 22 ? "大于22" : "小于22"}
        </div>
      </div>
    );
  }
}
```

## 列表渲染

```js
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

    /* // 我们发现页面count的值为100，不是我们想要的值,因为setState更新是异步的，不能采用这种方式去更新count的值,当短时间多次调用setState,进行多次更改时，多个异步任务会被当成一个,出于性能考虑
    for (let i = 1; i <= 100; i++) {
      this.setState({ count: this.state.count + i });
    } */

    // 正确的方式
    for (let i = 1; i <= 100; i++) {
      // 这个state可以拿到上一次state的值
      this.setState((state) => ({
        count: state.count + i,
      }));
    }
  }
  changeAge = (num: number): void => {
    this.setState({
      age: this.state.age + num,
    });
  };
  sayHello(who: string): void {
    alert("Hello" + who);
    console.log(this.state);
  }
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 2,
      count: 0,
      peoples: [
        { id: "1", cname: "zhangsan" },
        { id: "2", cname: "lisi" },
        { id: "3", cname: "wangwu" },
      ],
    };
    // this.sayHello = this.sayHello.bind(this)
  }
  render() {
    console.log(1);
    if (this.state.age > 25) {
      return <div>age大于25了</div>;
    }
    return (
      <div>
        {this.props.msg}
        {this.props.age}
        {this.state.age}
        <br />
        {this.state.count}
        <button
          onClick={() => {
            this.changeAge(1);
          }}
          onMouseLeave={this.sayHello.bind(this, "world")}
        >
          Age++/sayHello
        </button>
        <div>
          {this.state.age > 22 && "我大于22了"}
          {this.state.age > 22 ? "大于22" : "小于22"}
        </div>
        <ul>
          {this.state.peoples.map((item) => (
            <li key={item.id}>{item.cname}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

## react 中的表单数据双向绑定

```js
import React, { ChangeEvent, Component } from "react";

interface IState {
  inputValue: string;
}

class MyForm extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  changeInputValue = (e: ChangeEvent) => {
    this.setState({
      //   @ts-ignore
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.changeInputValue(e);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
```

## @ts-ignore 忽略我明确知道不是错误的 ts 编辑器报错

```js
import React, { ChangeEvent, Component } from "react";

interface IState {
  inputValue: string;
}

class MyForm extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  changeInputValue = (e: ChangeEvent) => {
    this.setState({
      //   @ts-ignore
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.changeInputValue(e);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
```

## 阻止表单默认提交事件

```js
import React, { ChangeEvent, Component, FormEvent } from "react";

interface IState {
  inputValue: string;
}

class MyForm extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  changeInputValue = (e: ChangeEvent) => {
    this.setState({
      //   @ts-ignore
      inputValue: e.target.value,
    });
  };

  onSubmit = (e: FormEvent) => {
    /* 不同浏览器厂商的阻止默认事件的方式 */
    e.preventDefault();
    e.stopPropagation();
    console.log("表单提交");
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.changeInputValue(e);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
```

## 状态提升

`父组件`

```js
import React, { Component } from "react";
import DeleteUser from './DeleteUser'

export interface IUser {
  id: number;
  cname: string;
}

interface IState {
  userList: IUser[];
}

export class UserList extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { userList: [] };
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    const userList = [];
    for (let i = 0; i <= 10; i++) {
      userList.push({ id: i, cname: "username" });
    }
    this.setState({ userList });
  }

  deleteUser(user: IUser) {
    /* this.setState({
      userList: this.state.userList.filter((item) => item.id !== user.id),
    }); */
    this.setState((state) => ({
      userList: state.userList.filter((item) => user.id !== item.id),
    }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.userList.map((user) => (
            <li key={user.id}>
              {user.id}---{user.cname}
              {是不是事件处理后面绑定的是一个函数，经过我的验证好像是这样的，然后bind将this绑定之后返回值是一个函数应该是，不然就不对了}
              <button onClick={this.deleteUser.bind(this,user)}>删除1</button>
              <button onClick={() => {(this.deleteUser.bind(this, user))()}}>删除2</button>
              <button onClick={() => {this.deleteUser(user)}}>删除3</button>
              <button onClick={function(){alert("hhh")}}>alert</button>
              <DeleteUser user={user} fatherDelete={this.deleteUser}></DeleteUser>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
```

`子组件`

```js
import React, { Component } from "react";
import { IUser } from "./UserList";

interface IProps {
  user: IUser;
  fatherDelete(user: IUser): void;
}

class DeleteUser extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  deleteUser = (user: IUser) => {
    console.log(1);
    setTimeout(() => {
      this.props.fatherDelete(user);
    }, 2000);
  };

  render() {
    return (
      <button
        onClick={() => {
          this.deleteUser(this.props.user);
        }}
      >
        删除（子组件）
      </button>
    );
  }
}

export default DeleteUser;
```

## 样式操作

```js
import React, { Component } from "react";
import "./ClassStyle.css";

interface IState {
  className: string[];
  styleDiv: object;
}

class ClassStyle extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      className: ["haeder"],
      styleDiv: { color: "white", backgroundColor: "black" },
    };
  }

  mouseEnter = () => {
    this.setState({ className: ["header", "header-hover"] });
  };

  mouseLeave = () => {
    this.setState({ className: ["header"] });
  };
  render() {
    return (
      <div
        style={{ color: "white", backgroundColor: "black" }}
        // 注意要用空格隔开，不然两个类名会拼凑到一起
        className={this.state.className.join(" ")}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        123
      </div>
    );
  }
}

export default ClassStyle;
```

## react 的生命周期

![react生命周期](README.assets/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

## react hook

```js
import React, { createContext, useContext, useEffect, useState } from "react";

/* rsc快速生成函数式组件 */

/* 
    使用hook的前提：
        1.不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
        2.不要在普通的 JavaScript 函数中调用 Hook
    hook的用法：
        1.useState
        2.useEffect
        3.useContext
*/

// 自定义hook
function useLocalStorage(k: string, v: string) {
  const [Val, setVal] = useState(v);
  useEffect(() => {
    localStorage.setItem(k, Val);
  });
  return { Val, setVal };
}

// 创建context上下文,createContext接收一个默认值参数，但是不知道这个值有什么用，我在CountContext.Provider中不传value,编辑器又报错
// 正确做法是不传这个标签，就会生效<CountContext.Provider value={count}>
const CountContext = createContext(1110);

const Home = () => {
  return (
    <div>
      <Son></Son>
      <p>{useContext(CountContext)}</p>
    </div>
  );
};

const Son = (props: any) => {
  return <CountContext.Consumer>{(count) => count}</CountContext.Consumer>;
};
const Admin = (props: any) => {
  // useState()括号中的值就是初始变量的初始值,前面使用解构，第一个值为声明的状态，第二个值为修改这个状态的回调函数
  //   useState()可以多次使用
  const [count, setCount] = useState(100);
  const [name] = useState("刘杰");
  const [age] = useState(18);
  const [sex, setSex] = useState("男");
  const { Val, setVal } = useLocalStorage("token", "imnottoken");
  // 第二个参数数组为空表示组件销毁执行return后面的函数
  // 如果不传第二个参数，那么只要页面重新渲染都会调用return后面的函数
  // 可以给数组传值,用来监听传递的值是否改变，如果改变那么才会执行
  // useEffect是异步的,不能做页面实时更新的相关功能
  useEffect(() => {
    console.log("Home组件渲染完成");
    return () => {
      console.log("Home组件销毁");
    };
  }, []);
  return (
    <div>
      count:{count}
      {/* 这是函数组件，变量都在这个函数作用域中，有必要使用什么this吗 */}
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别: {sex}</p>
      <p>Val:{Val}</p>
      <button onClick={() => setSex("女")}>变性</button>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <button onClick={() => setVal("imtoken")}>
        修改localStorage中的token值
      </button>
      <CountContext.Provider value={count}>
        <Home />a
      </CountContext.Provider>
    </div>
  );
};

export default Admin;
```

## mobx

安装`npm install mobx mobx-react --save`

```js
// 设置mobx仓库
class UserStore {}
const store = {
  userStore: new UserStore(),
};

export default store;

// 挂载mobx仓库
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider {...store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
```

```js
// 在类组件中使用mobx

```

```js
// 在函数组件中使用mobx

```

## react-Router5 老师视频讲的太多消化不良了
@types/react-router-dom的ts包
安装 `yarn add react-router-dom @types/react-router-dom`
```js

```