import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AppHeader from '@/components/app-header'

Enzyme.configure({ adapter: new Adapter() })

const navigations = [
  { label: 'All cameras', url: 'https://app.smartfrog.com/de-de/' },
  { label: 'My account', url: 'https://app.smartfrog.com/de-de/account/overview' },
  { label: 'Shop', url: 'https://www.smartfrog.com/de-de/shop' },
]

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
]

const props = {
  navigations: navigations,
  languages: languages,
  username: 'john.doe@lorem.com',
  activeLang: 'en',
  logout: () => {},
  changeLanguage: () => {}
}

describe('Logged-in Header component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = shallow(
    <AppHeader {...props}/>
    )
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit logout event when logout method is called', () => {
    const logout = jest.fn()
    const cmp = shallow(<AppHeader {...props}  logout={logout} />)
    
    cmp.find('.fk-app-header__logout').simulate('click')
    expect(logout).toBeCalled()
  })
})