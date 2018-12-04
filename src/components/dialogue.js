import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { fireOnClickOutside } from '@/utils/click-outside'

import '../stylus/mixins/dialogue.styl'

import { CSSTransition } from 'react-transition-group'
import Flex from '@/components/flex'
import Icon from '@/components/icon'


class Dialogue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {handler: null, visible: props.visible}
    this.fireOnClickOutside = fireOnClickOutside.bind(this)
  }

  get classObject () {
    return classnames ({
      'fk-dialogue': true,
      'fk-dialogue--dark': !!this.props.dark
    })
  }

  dismiss = () => {
    this.setState({visible: false})
    if (!this.props.requireAction) this.props.onClose()
  }

  componentDidMount () {
    const handler = ($event) => this.fireOnClickOutside($event, 'dialogue', this.dismiss)
    document.body.addEventListener('click', handler)
    this.setState({handler})
    document.body.classList.toggle('noscroll', true)
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.state.handler)
    document.body.classList.toggle('noscroll', false)
  }


  renderContent = () => {
    if (!this.state.visible) return (<template></template>)
    return (
      <Flex justify="center" align="center" className={this.classObject}>
          <section className="fk-dialogue__frame" ref="dialogue">
            {(() => this.props.requireAction ? '' : (
            <a onClick={this.dismiss} className="fk-dialogue__close">
              <Icon icon="close-light" color="orange" />
            </a>)
            )()}
             {this.props.children}
          </section>
        </Flex>
    )
  }



  render () {
    return (
      <CSSTransition in={this.state.visible} appear={true} classNames="fade" timeout={300}>
        {this.renderContent()}
      </CSSTransition>
    )
  }
}

Dialogue.propTypes = {
  visible: PropTypes.bool,
  dark: PropTypes.bool,
  requireAction: PropTypes.bool,
  onClose: PropTypes.func
}

Dialogue.defaultProps = {
  visible: false,
  dark: false,
  requireAction: false,
  onClose: PropTypes.func
}


export default Dialogue