/* useEffect模拟生命周期函数-componentWillUnmount */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  // 第二个参数数组为空表示组件销毁执行return后面的函数
  // 如果不传第二个参数，那么只要页面重新渲染都会调用return后面的函数
  // 可以给数组传值,用来监听传递的值是否改变，如果改变那么才会执行
  useEffect(() => {
    console.log('Home组件渲染完成');
    return () => {
      console.log('Home组件销毁');
    }
  },[])
  return <p>Home</p>
}

const Index = () => {
  return <p>Index</p>
}

export default () => {

  const [ count, setCount ] = useState(0)

  // useEffect是异步的,不能做页面实时更新的相关功能
  useEffect(() => {
    console.log(`useEffect:${ count }`);
    return () => {
      console.log('example4组件状态改变');
    }
  },[count])

  return (
    <div>
      <p>you click { count } times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <Router>
        <ul>
          <li>
            <Link to='/'>默认页</Link>
          </li>
          <li>
            <Link to='/home'>首页</Link>
          </li>
        </ul>
        <Route exact path='/' component={Index}/>
        <Route path='/home' component={Home}/>
      </Router>
    </div>
  )

};