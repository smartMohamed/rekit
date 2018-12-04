import React from 'react'
import { storiesOf } from '@storybook/react'
import InputPassword from '@/components/input-password'

const stories = storiesOf('Input Password', module)

stories.add('Kitchen Sink', () => {
  return (<InputPassword value=""/>)
})
