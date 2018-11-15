import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Checkbox from '@/components/checkbox'


const stories = storiesOf('Checkbox', module)
stories.add('Kitchen Sink', () => {
  const props = {
    disabled: boolean('Disabled', true),
    required: boolean('Required', true),
    value: text('value', 'accepted'),
    selectedValue: false,
    slot: text('Text', 'I accept terms of use')
  }
  return (
    <div>
      <Checkbox {...props}>
        {props.slot}
      </Checkbox>
      <h1 className="demo-title">Model: {props.selectedValue}</h1>
    </div>
  )
 
})
