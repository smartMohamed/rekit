import React from 'react'
import { storiesOf } from '@storybook/react'
import DarkLayer from '@/components/dark-layer'
import { boolean } from '@storybook/addon-knobs'

const stories = storiesOf('Dark Layer', module)
let show = boolean('show', true)
function onClick () {
  show = false
}

stories.add('Demo', () => (
    <div class="dark-bg">
    <DarkLayer show={show} onClick={onClick}>
      <div class="layer-content">Some text in the layer</div>
    </DarkLayer>
    </div>
  )
)
