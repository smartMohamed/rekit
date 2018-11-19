import React  from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/icon.styl'

class Icon extends React.Component {

  get className () {
    let className = classnames({
      'fk-icon': true,
      [`fk-icon--${this.props.color}`]: !!this.props.color,
      [`fk-icon--${this.props.size}`]: !!this.props.size,
    })
    if (this.props.className)  className = `${className} ${this.props.className}`
    return className
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