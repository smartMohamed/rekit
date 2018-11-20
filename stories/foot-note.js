import React from 'react'
import { storiesOf } from '@storybook/react'
import FootNote from '@/components/foot-note'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Foot Note', module)

stories.add('Kitchen Sink', () => {
  const slot = text('html content', 'No deposit, no set-up fees, no shipping cost. within the first 24 will need to return the Smartfrog Cam to us by page and access to the last 24 hours of your recorded videos. <a>Our Terms of Service apply.</a>')
  return(
    <FootNote>
      {slot}
    </FootNote>
  )
  
})
