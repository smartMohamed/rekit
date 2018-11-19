import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, number, boolean } from '@storybook/addon-knobs'
import Title from '@/components/title'

const stories = storiesOf('Title', module)


stories.add('kitchen sink', () => {
  
  const props =  {
    slot: text('Text', 'Lorem ipsum dolorem'),
    size: select('Size', ['larger', 'xx-small', '100px', '8px', 'xl', 'lg', 'md', 'sm', 'xs'], 'md'),
    color: select('Color', ['default', 'primary', 'light', 'secondary'], 'primary'),
    weight: select('Weight', ['default', 'bold', 'slim']),
    center: boolean('Center', false)
  }
  return  (<Title  {...props}>
              {props.slot}
            </Title>
          )
})
