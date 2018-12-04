import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/information-accordion.styl'

import InformationBlock from '@/components/information-block'
import Accordion from '@/components/accordion'

class InformationAccordion extends React.Component {
  constructor (props) {
    super(props)
    this.breakPoint = 767
    this.state = {windowWidth: window.innerWidth}
  }

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth})
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

 render () {
   const Cmp = this.state.windowWidth > this.breakPoint ? InformationBlock : Accordion
   return (
     <Cmp hide={this.props.hide} placeholder={this.props.title} title={this.props.title} className="fk-information-accordion">
      <div className="fk-information-accordion__content">
        {this.props.children}
      </div>
     </Cmp>
   )
 }
}

InformationAccordion.propTypes = {
  title: PropTypes.string,
  hide: PropTypes.bool
}

InformationAccordion.defaultProps = {
  title: '',
  hide: false
}

export default InformationAccordion