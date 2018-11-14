import React from "react"
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/flex.styl'

class Flex extends React.Component {

  get className() {
    let classeName = classnames({
      'fk-flex': true,
      'fk-flex--column': this.props.column,
      'fk-flex--grow': this.props.grow,

      'fk-flex--justify-center': this.props.justify === 'center',
      'fk-flex--justify-end': this.props.justify === 'end',
      'fk-flex--justify-space-around': this.props.justify === 'space-around',
      'fk-flex--justify-space-between': this.props.justify === 'space-between',
      'fk-flex--justify-space-evenly': this.props.justify === 'space-evenly',

      'fk-flex--align-center': this.props.align === 'center',
      'fk-flex--align-end': this.props.align === 'end',
      'fk-flex--align-stretch': this.props.align === 'stretch',
    })
    if (this.props.className) classeName = `${this.props.className} ${classeName}`
    return classeName
  }    

  render() {
    return (
    <div className={this.className}>
      {this.props.children}
    </div>)
  }
}

Flex.propTypes = { 
  column: PropTypes.bool,
  align: PropTypes.string,
  justify: PropTypes.string,
  grow: PropTypes.bool
}

Flex.defaultProps = {
  column: false,
  align: 'start',
  justify: 'start',
  grow: false
}

export default Flex
