import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'
import Header from '@/components/header'
import countries from '../data/countries'


const stories = storiesOf('Header', module)
const navMainItems = [
  { label: 'Kamera', url: 'https://www.smartfrog.com/de-de/kamera/' },
  { label: 'Videoaufnahme', url: 'https://www.smartfrog.com/de-de/videoaufnahme/' },
  { label: 'Einsatzbereiche', url: 'https://www.smartfrog.com/de-de/einsatzbereiche/' },
  { label: 'So geht\'s', url: 'https://www.smartfrog.com/de-de/so-gehts/' }
]
const navExtraItems = [
  { label: 'Warenkorb', url: 'https://www.smartfrog.com/de-de/shop/cart' },
  { label: 'Shop', url: 'https://www.smartfrog.com/de-de/shop/products' },
  { label: 'Login', url: 'https://app.smartfrog.com/de-de/login' }
]
const formItems = {
  emailPlaceholder: 'E-Mail Adresse',
  passwordPlaceholder: 'Passwort',
  registerLabel: 'Noch kein Benutzerkonto?',
  registerUrl: 'https://www.smartfrog.com//de-de/shop/register',
  retriveLabel: 'Passwort vergessen?',
  retriveUrl: '/de-de/shop/resetpassword'
}

const props =  {
  navMainItems: navMainItems,
  navExtraItems: navExtraItems,
  cartCounter: number('Cart Items', 0),
  formItems: formItems,
  countries: countries,
  currentCountry: 'de',
  countrySelectLabel: 'Your Country is missing? Click here:',
  navOnly: boolean('Show main navigation only', false),
  wrongInput: boolean('Show login error', false)
}

const onLogin = (login) => {
  alert(`Email: ${login.username} - Password: ${login.password}`)
}



stories.add('Kitchen Sink', () => {
  let emitted = ''
  const onCountryChange = (currentCountry) => {
    emitted = JSON.stringify(currentCountry)
  }
  return (<div>
    <Header {...props}
      onLogin={onLogin}
      onCountryChange={onCountryChange} />
    <h1 className="demo-title">Emitted country:
      <div style={{width: '50%'}}> {emitted} </div>
    </h1>
  </div>
  )

})
