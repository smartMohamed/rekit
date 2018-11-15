import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBadge from '@/components/app-badge'

const stories = storiesOf('App Badges', module)

stories.add('Kitchen Sink', () => {
  const appStoreItems = [
      {
        name: 'apple',
        url: 'https://app.adjust.com/p39urb',
        label: 'Laden im'
      },
      {
        name: 'google',
        url: 'https://app.adjust.com/vti0vj',
        label: 'JETZT BEI'
      }
  ]
  return (
    <div>
    {appStoreItems.map(btn => {
      return <AppBadge url={btn.url} className={btn.name} label={btn.label} key={btn.name} />
    })}
    </div>
  )
 
})
