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
        <Home />
      </CountContext.Provider>
    </div>
  );
};

export default Admin;
