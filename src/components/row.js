import React from "react"
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/grid.styl'

class Row extends React.Component {

  get className () {
    let className = classnames({
      'fk-row': true,
      'fk-row--center': !!this.props.center
    })
    if (this.props.className) className = `${this.props.className} ${className}`
    return className
  }
  render () {
    return (
      <div className={this.className} >
        {this.props.children}
      </div>
    )
  }
}

Row.propTypes = {
  center: PropTypes.bool
}

Row.defaultprops = {
  center: false
}

export default Row