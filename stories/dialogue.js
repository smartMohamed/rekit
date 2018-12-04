
import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'

const stories = storiesOf('Dialogue', module)



stories.add('Kitchen Sink', () => {
  const props = {
    visible: boolean('Visible', true),
    dark: boolean('Dark', true),
    requireAction: boolean('Require Action', false)
  }
  return (
    <Dialogue {...props}>
      <h1 className="demo-title">Hello</h1>
    </Dialogue>
  )
})
