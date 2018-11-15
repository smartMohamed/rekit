import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'


import Button from '@/components/button'

const stories = storiesOf('Button', module)

stories.add('Kitchen Sink', () => {
  const props = {
    slot: text('Text', 'click me'),
    disabled: boolean('Disabled', false),
    block: boolean('Full Width', false),
    outline: boolean('Outline', false),
    loading: boolean('Loading', false),
    link: boolean('Link', false),
    capitalize: boolean('Capitalize', false),
    size: select('Size', ['small', 'normal', 'big'], 'normal'),
    color: select('Color', ['default', 'primary', 'secondary'], 'default'),
    cutSide: select('Cut border', ['', 'left', 'right'], '')
  }
  return (
    <Button {...props}>
      {props.slot}
    </Button>
  )
})