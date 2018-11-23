import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/accordion.styl'

import Flex from '@/components/flex'
import Title from '@/components/title'
import Icon from '@/components/icon'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: props.open}
    this.renderContent = this.renderContent.bind(this)
  }
 
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  get iconClass () {
    return classnames({
      'fk-accordion__icon': true,
      'fk-accordion__icon--open' : !!this.state.isOpen
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.open != this.props.open) this.setState({isOpen: this.props.open})
  }

  renderContent () {
    if (!this.state.isOpen) return ''
    return (
      <div className="fk-accordion__content-frame">
        <div className="fk-accordion__content">
          {this.props.children}
        </div>
      </div>
    )
  }

  render () {
    return (
      <section className="fk-accordion">
        <Flex onClick={this.toggle} className="fk-accordion__header" justify="space-between" align="center">
          <Title size="xs" className="fk-accordion__title"> {this.props.placeholder} </Title>
          <Icon className={this.iconClass} icon="plus"/>
        </Flex>
        {this.renderContent()}
      </section>
    )
  }
}

Accordion.propTypes = {
  placeholder: PropTypes.string,
  open: PropTypes.bool
}

Accordion.defaultProps = {
  placeholder: '',
  open: false
}

export default Accordion