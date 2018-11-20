import React from 'react'
import { storiesOf } from '@storybook/react'
import CountrySelector from '@/components/country-selector'
import countries from '../data/countries'

const stories = storiesOf('Country Selector', module)


stories.add('Kitchen Sink', () => {
  const props = {
    countries: countries,
    currentCountry: 'de',
    selectLabel: 'Your Country is missing? Click here:',
    onChange: (currentCountry) => alert(JSON.stringify(currentCountry))
  }
  return (
    <div>
      <CountrySelector {...props} />
    </div>
  )
  
})
