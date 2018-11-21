import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/dark-layer.styl'

import Flex from '@/components/flex'

class DarkLayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: props.show}
  }

  render () {
    return (() => !this.state.show ? '' : (
            <section class="fk-dark-layer" onClick={this.props.onClick}>
            <Flex column align="center" justify="center" grow>
              {this.props.children}
            </Flex>
          </section>
        ))()
  }
}

DarkLayer.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
}

DarkLayer.defaultProps = {
  show: false,
  onClick: () => {}
}


export default DarkLayer