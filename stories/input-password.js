import React from 'react'
import { storiesOf } from '@storybook/react'
import InputPassword from '@/components/input-password'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Input Password', module)


stories.add('Kitchen Sink', () => {
  let value = text('Value', '')
  return (<InputPassword value={value} onInput={(val) => value = val}/>)
})
