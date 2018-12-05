import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'


import InputTooltip from '@/components/input-tooltip'
import Input from '@/components/input'

const stories = storiesOf('Input Tooltip', module)

stories.add('email input', () => {
  const props = {
    title: 'Email address must:',
    conditions: { valid: 'be valid' },
    value: text('Value', '')
  }
  return (<div className="form-demo">
    <InputTooltip title="title" conditions={props.conditions}>
      <Input value={props.value} type="email" placeholder="email" onChange={(val) => props.value = val} />  
    </InputTooltip>
    </div>
    )
})

stories.add('password input', () => {
  const props = {
    title: 'Password must have:',
    conditions: {
      length: '8 or more characters',
      letters: 'Upper & lowercase letters',
      digit: 'At least one number',
    },
    status: 'warning',
    statusTxt: {
      danger: 'weak password',
      warning: 'good password',
      success: 'strong password',
    },
    value: text('Value', ''),
  }
   return (<div className="form-demo">
    <InputTooltip title={props.title} conditions={props.conditions} statusTxt={props.statusTxt}>
      <Input value={props.value} type="password" placeholder="passsword" />  
    </InputTooltip>
      
  </div>)
    
})