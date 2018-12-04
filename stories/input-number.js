import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import InputNumber from '@/components/input-number'

const stories = storiesOf('Input Number', module)


stories.add('kitchen sink', () => {
  const props = {
      min: number('Min', 1, { min: 1, max: 11, step: 1, }),
      max: number('Max', 5, { min: 2, max: 12, step: 1, }),
      value: number('Value', 3),
      size: select('Size', ['small', 'big'], 'small')
    }
  return (
    <InputNumber {...props} />
  )
  
  
})