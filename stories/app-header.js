import React from 'react'
import { storiesOf } from '@storybook/react'
import AppHeader from '@/components/app-header'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('App Header', module)

const navigations = [
  { label: 'All cameras', url: 'https://app.smartfrog.com/de-de/' },
  { label: 'My account', url: 'https://app.smartfrog.com/de-de/account/overview' },
  { label: 'Shop', url: 'https://www.smartfrog.com/de-de/shop' },
]

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
]

stories
.add('Kitchen Sink', () => {
  const props = {
      navigations,
      username: 'john.doe@lorem.com',
      languages,
      logoutlabel: 'logout',
      activeLang: select('activeLang', ['en', 'de'], 'en'),
      logout: action('loging out'),
      changeLanguage: action(`Language changes to`),
  }
  return (
    <AppHeader {...props}/>
  )
  
})
