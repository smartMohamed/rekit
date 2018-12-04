import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/button.styl'

class Button extends React.Component {

  get className () {
    let className = classnames({
      'fk-btn': true,
      'fk-btn--small': this.props.size === 'small',
      'fk-btn--big': this.props.size === 'big',
      'fk-btn--outline': !!this.props.outline,
      'fk-btn--block': !!this.props.block,
      'fk-btn--loading': !!this.props.loading,
      'fk-btn--primary': this.props.color === 'primary',
      'fk-btn--secondary': this.props.color === 'secondary',
      'fk-btn--cut-left': this.props.cutSide === 'left',
      'fk-btn--cut-right': this.props.cutSide === 'right',
      'fk-btn--capitalize': this.props.capitalize
    })
    if (this.props.className) className = `${this.props.className} ${className}`
    return className
  }
  render () {
    const Tag = this.props.link ? 'a' : 'button'
    return (
      <Tag disabled={this.props.disabled} className={this.className} rel="noopener noreferrer" onClick={this.props.onClick}>
        {this.props.children}
      </Tag>
    )
  }
}

Button.propType = {
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  cutSide: PropTypes.string,
  loading: PropTypes.bool,
  capitalize: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  size: '',
  color: '',
  outline: false,
  block: false,
  link: false,
  cutSide: '',
  loading: false,
  capitalize: false,
  disabled: false,
  onClick: () => {}
}

export default Button