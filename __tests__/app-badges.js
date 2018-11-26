import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AppBadge from '@/components/app-badge'

Enzyme.configure({ adapter: new Adapter() })

const props = {
  name: 'apple',
  url: 'https://app.adjust.com/p39urb',
  label: 'Laden im'
}

describe('App Badge component', () => {
  it('Should render component and match snapshot', () => {
    const wrapper = mount(<AppBadge { ...props } />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})