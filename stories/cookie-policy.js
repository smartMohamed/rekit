import React from 'react'
import { storiesOf } from '@storybook/react'
import CookiePolicy from '@/components/cookie-policy'
import { select } from '@storybook/addon-knobs'

const stories = storiesOf('Cookie Policy', module)

stories.add('Kitchen Sink', () => {
  const lang = select('Language', ['de', 'en'], 'de')
  return (<CookiePolicy lang={lang} />)
})
