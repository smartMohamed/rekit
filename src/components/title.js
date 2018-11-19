import React from 'react'
import classnames from 'classnames'
import PropTypes from  'prop-types'

import '../stylus/mixins/title.styl'

class Title extends React.Component {

  get className () {
    return classnames({
      'fk-title': true,
      'fk-title--xl': this.props.size == 'xl',
      'fk-title--lg': this.props.size == 'lg',
      'fk-title--md': this.props.size == 'md',
      'fk-title--sm': this.props.size == 'sm',
      'fk-title--xs': this.props.size == 'xs',
      'fk-title--bold': this.props.weight == 'bold',
      'fk-title--slim': this.props.weight == 'slim',
      'fk-title--primary': this.props.color == 'primary',
      'fk-title--secondary': this.props.color == 'secondary',
      'fk-title--light': this.props.color == 'light',
      'fk-title--center': !!this.props.center
    })
  }

  get getStyles() {
    return {
      fontSize: typeof(this.props.size) === 'number' ? `${this.props.size}rem`: this.props.size
    }
  }

  render () {
    const elements = {
      xl: 'h1',
      lg: 'h2',
      md: 'h3',
      sm: 'h4',
      xs: 'h5',
      default: 'h6'
    }
    const ElementTag = elements[this.props.size] || elements.default
    return (
    <ElementTag {...this.props} className={this.className} style={this.getStyles} >
      {this.props.children}
    </ElementTag>
    )
  }
}

Title.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  weight: PropTypes.stribg,
  center: PropTypes.bool
}

Title.defaultProps = {
  size: 'md',
  color: '',
  type: '',
  center: false
}

export default Title