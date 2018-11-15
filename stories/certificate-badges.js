import React from 'react'
import { storiesOf } from '@storybook/react'
import CertificateBadges from '@/components/certificate-badges'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Certificate Badges', module)

stories.add('Kitchen Sink', () => {
  const width = text('Width', '65px')
  return (<CertificateBadges width={width} />)
  }
)
