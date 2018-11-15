import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/grid.styl'

class Grid extends React.Component {

  get className() {
    return classnames({
      'fk-grid': true,
      'fk-grid--fluid': this.props.fluid
    })
  }

  render () {
    return (
      <div className={this.className}>
      {this.props.children}
      </div>
    )
  }

}

Grid.propTypes = {
  fluid: PropTypes.bool
}

Grid.defaultProps = {
  fluid: false
}


export default Grid