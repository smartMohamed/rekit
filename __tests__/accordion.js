import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Accordion from '@/components/accordion'

Enzyme.configure({ adapter: new Adapter() })

describe('Accordion component', () => {
  it('Should render component and match snapshot', () => {

  const wrapper = shallow(
    <Accordion placeholder='Title' open={false} />
  )

  expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should render component and match snapshot', () => {
  
    const wrapper = shallow(
      <Accordion placeholder='Title' open={true} >Some content</Accordion>
    )
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.fk-accordion__icon').hasClass('fk-accordion__icon--open'))
  })
})