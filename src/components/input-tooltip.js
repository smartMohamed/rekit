import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { fireOnClickOutside } from '@/utils/click-outside'

import '../stylus/mixins/input-tooltip.styl'

class InputTooltip extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      invalidCondition: {},
      score: 0,
      bubbleStyle: null,
      $input: null,
      type: '',
      status: null,
      inputRef: null,
      handler: null, 
      input: null
    }
    this.fireOnClickOutside = fireOnClickOutside.bind(this)
  }

  findInput = (node) => {
    const inputs = React.Children.map(node.props.children, (child) => {
      if(child.type && child.type.name === 'Input') return child
    })
    if (inputs) return inputs[0]
  }

  hideToolTip = () => {
    this.setState({show: false})
  }

  showToolTip = () => {
    if (this.state.show) return
    this.setState({show: true}, () => { 
      this.updateStyle()
      this.updateStatus()
    })
  }

  updateStatus = () => {
    const { input, type } = this.state
    const { value } = input.state
    const errors = input.validate(value, type, true)
    const status = input.getStatus(value)
    this.setState({invalidCondition: {...errors, valid: errors.pattern}, status})
  }

  updateStyle = () => {
    const bubble = this.refs.bubble && this.refs.bubble.getBoundingClientRect()
    const slot = this.state.$input
    const { height, width } = slot.getBoundingClientRect()
    if (!bubble || !slot) return
    if (window.innerWidth >= 768) {
      this.setState({bubbleStyle: {
        top: `${slot.offsetTop + height / 2 - bubble.height / 2}px`,
        left: `${slot.offsetLeft + width}px`,
        }
      })
    } else {
      this.setState({bubbleStyle: {
        top: `${slot.offsetTop - bubble.height - 10}px`,
        left: `${slot.offsetLeft + width / 2 - 10 - bubble.width / 2}px`,
        }
      })
    }
  }

  componentDidMount () {
    const input = this.refs.inputRef
    const type = this.props.inputType || input.props.type 
    this.setState({$input: ReactDOM.findDOMNode(input), input, type}, this.updateStyle)
    window.addEventListener('resize', this.updateStyle)
    const handler = ($event) => this.fireOnClickOutside($event, 'countrySelector', this.closeDropDown)
    document.body.addEventListener('click', handler)
    this.setState({handler})
  }

  componentWillDestroy () {
    window.removeEventListener('resize', this.updateStyle)
    document.body.removeEventListener('click', this.state.handler)
  }

  getConditionClass = (key) => classnames({
    'fk-input-tooltip--invalid': this.state.invalidCondition[key],
    'fk-input-tooltip--valid': !this.state.invalidCondition[key]
  })

  get statusClass() {
    if (!this.state.type || this.state.type !== 'password') return 'fk-input-tooltip__status'
    return `fk-input-tooltip__status fk-input-tooltip__status--${this.state.status}`
  }

  /* Rendering functions */

  renderChildren = () => {
    return React.Children.map(this.props.children, (child) => {
      if (!child.type || child.type.name !== 'Input' || this.refs.inputRef) return child
      return React.cloneElement(child, {
        ref: 'inputRef'
      })
    })
  }

  renderConditions = () => {
    return Object.entries(this.props.conditions).map(([key, condition], index) => (
      <li key={index} className={this.getConditionClass(key)}>{condition}</li>
    ))
  }

  renderStatus = () => {
    if (this.state.type === 'password')  return (<p className={this.statusClass}>{this.props.statusTxt[this.state.status]}</p>)
  }

  renderBubble = () => {
    if (!this.state.show) return
    return (
      <div style={this.state.bubbleStyle} ref="bubble" className="fk-input-tooltip__bubble" > 
        <b className="fk-input-tooltip__title">{this.props.title}</b>
        <ul>
          {this.renderConditions()}
        </ul>
        {this.renderStatus()}
      </div>
    )
  }

  render() {
    return (
      <section className="fk-input-tooltip" ref="toolTip">
        <div onBlur={this.hideToolTip} onFocus={this.showToolTip} onInput={this.updateStatus}>
          {this.renderChildren()}
        </div>
        {this.renderBubble()}
      </section>
    )
  }

}

InputTooltip.propTypes = {
  title: PropTypes.string,
  conditions: PropTypes.object,
  statusTxt: PropTypes.object,
  inputType: PropTypes.string
}

InputTooltip.defaultProps = {
  title: '',
  conditions: () => ({}),
  statusTxt: () => ({}),
  inputType: ''
}

export default InputTooltip