/* useState状态的使用 */

import React, { useState } from 'react';

export default () => {
  
  const [ count, setCount ] = useState(0);
  
  return (
    <div>
      <p>You Click { count } times</p>
      <button onClick={() => setCount( count + 1)}>click</button>
    </div>
  )

}