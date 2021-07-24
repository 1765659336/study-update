/* createContext创建上下文,useContext使用上下文实现父子之间的通信 */
import React, { useState, createContext, useContext } from 'react';

// 创建context上下文
const CountContext = createContext();

const Home = () => {
  return (
    <p>{useContext(CountContext)}</p>
  )
}
export default () => {

  const [ count, setCount ] = useState(0)

  return (
    <div>
      <p>you click { count } times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <CountContext.Provider value={count}>
        <Home/>
      </CountContext.Provider>
    </div>
  )

};