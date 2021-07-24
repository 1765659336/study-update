/* useEffect模拟生命周期函数 */
import React, { useState, useEffect } from 'react';

export default () => {

  const [ count, setCount ] = useState(0)

  // useEffect是异步的,不能做页面实时更新的相关功能
  useEffect(() => {
    console.log(`useEffect:${ count }`);
  })

  return (
    <div>
      <p>you click { count } times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )

};