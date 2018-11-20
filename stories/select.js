import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Select from '@/components/select'

const stories = storiesOf('Select', module)

const options = [
  { label: 'Option 1', value:'Value 1'},
  { label: 'Option 2', value:'Value 2'},
  { label: 'Option 3', value:'Value 3'},
  { label: 'Option 4', value:'Value 4'},
  { label: 'Option 5', value:'Value 5'}
]

stories.add('Kitchen Sink', () => {
  const props = {
    placeholder: text('label', 'Select an option'),
    options: options,
    required: boolean('Required', false),
    disabled: boolean('Disabled', false),
    block: boolean('Full Width', false),
    value: select('Value', ['', ...options.map(i => i.value)], '')
  }
  return (
    <div>
      <Select onInput={action('input')} {...props}></Select>
    </div>
  )
})
