import React from 'react'
import { storiesOf } from '@storybook/react'

import Grid from '@/components/grid'
import Col from '@/components/col'
import InformationBlock from '@/components/information-block'

const stories = storiesOf('Information Block', module)

stories.add('Default', () => {
  return (
  <Grid>
    <Col xs6>
      <InformationBlock title="How does the Smartfrog Surveillance Bundle work?">
        <div>
        After your order, we will send you the Smartfrog Cam – with free delivery, of course. 
        Then you simply need to download the free Smartfrog App from the Apple App Store or Google Play Store and connect 
        the camera with your Wi-Fi. Now you can use your smartphone, tablet or laptop to see what’s happening at home, 
        anytime from anywhere.
        </div>
      </InformationBlock>
    </Col>
  </Grid>)
})