import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/dark-layer.styl'

import Flex from '@/components/flex'

class DarkLayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: props.show}
  }

  onClick = () => {
    this.setState({show: false})
    this.props.onClick()
  }

  render () {
    return (() => !this.state.show ? '' : (
            <section className="fk-dark-layer" onClick={this.onClick}>
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