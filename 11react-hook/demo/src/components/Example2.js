/* useState管理多个state */
import React, { useState } from 'react';

export default () => {

  const [ name, setName ] = useState('刘杰')
  const [ age, setAge ] = useState(18)
  const [ sex, setSex ] = useState('男')

  return (
    <dic>
      <p>姓名：{ name }</p>
      <p>年龄：{ age }</p>
      <p>性别: { sex }</p>
      <button onClick={() => setSex('女')}>变性</button>
    </dic>
  )
}