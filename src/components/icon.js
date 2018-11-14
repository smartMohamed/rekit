import React, {Component}  from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/icon.styl'

class Icon extends Component {

  get className () {
    return classnames({
      'fk-icon': true,
      [`fk-icon--${this.props.color}`]: !!this.props.color,
      [`fk-icon--${this.props.size}`]: !!this.props.size,
    })
  }
  buildComponent = () => {
    const icon = require (`@/components/icons/${this.props.icon}`).default
    return React.createElement(icon, {className: this.className})
  }
  render () {
    return (
      <span>{this.buildComponent()}</span>
    )
  }
}

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string
}

Icon.defaultProps = {
  size: '',
  icon: '',
  color: ''
}

export default Icon