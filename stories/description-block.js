import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import DescriptionBlock from '@/components/description-block'
import Grid from '@/components/grid'
import Col from '@/components/col'
import Title from '@/components/title'

const stories = storiesOf('Description Block', module)

stories.add('Description with text', () => {
  const title = text('Title', 'Description with text')
  return (<Grid>
          <Col md4>
          <DescriptionBlock title={title}>
            <div>
            <Title size="xs" color="primary">A title from slot.</Title>
            The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
            transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
            you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
            </div>
          </DescriptionBlock>
        </Col>
      </Grid>)
})

stories.add('Description with list', () => {
  const title = text('Title', 'Description with list')
  return (<Grid>
            <Col md4>
            <DescriptionBlock title={title}>
              <ul>
                <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
                <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
              </ul>
            </DescriptionBlock>
          </Col>
        </Grid>)
})
