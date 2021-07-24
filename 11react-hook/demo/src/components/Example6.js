/* useReducer增强Reducer的写法 */
import React, { useReducer } from 'react';

export default () => {

  const [ count, dispatch ] = useReducer( ( state, action ) => {
    switch(action){
      case 'add':
        return state + 1
      case 'dec':
        return state - 1
      default:
        return state
    }
  },0)

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch('add')}>+</button>
      <button onClick={() => dispatch('dec')}>-</button>
    </div>
  )
}