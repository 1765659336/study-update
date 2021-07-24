import React from 'react';
import Show from './Show';
import Button from './Button';
import { Color } from './Color'

export default () => {
  return (
    <div>
      <Color>
        <Show/>
        <Button/>
      </Color>
    </div>
  )
}