import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Accordion from '@/components/accordion'
import Title from '@/components/title'
import DescriptionBlock from '@/components/description-block'

const stories = storiesOf('Accordion', module)


stories.add('kitchen sink', () => {
  const props = {
      placeholder: text('placeholder', 'Lorem ipsum dolorem'),
      open: boolean('Open', false)
    }
  return (
  <Accordion {...props}>
    <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
      <Title size="xs" color="primary">A title from slot.</Title>
      The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
      transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
      you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
    </DescriptionBlock>

      <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
      <ul>
        <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
        <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
      </ul>
    </DescriptionBlock>
  </Accordion>
  )
  
})