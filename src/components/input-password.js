import React from 'react'
import PropTypes from 'prop-types'


import '../stylus/mixins/input-password.styl'

import Input from '@/components/input'

class InputPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputType: 'password', passwordToggle: false, iconStyle: null, value: props.value}
  }

  static getDerivedStateFromProps(props, state) {
    if (state.value !== props.value) return {...state, value: props.value}
    return state
  }

  get iconClass () {
    return this.state.inputType === 'password' ? 'fk-input-password__show-pass' : 'fk-input-password__hide-pass'
  }

  toggle = () => {
    this.setState({inputType: this.state.inputType === 'password' ? 'text' : 'password'})
  }

  onInput = (value) => {
    this.props.onInput(value)
  }

  show = () => {
    this.setState({passwordToggle: true})
    this.computePosition()
  }

  computePosition = () => {
    if (!this.inputElement ) return
    const input = this.inputElement
    const {height, width} = input.getBoundingClientRect()
    const left = input.offsetLeft + width - 35
    const top = height / 2 + input.offsetTop - 22
    this.setState({iconStyle: {left: `${left}px`, top: `${top}px`}})
  }

  componentDidMount () {
    window.addEventListener('resize', this.computePosition)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.computePosition)
  }

  renderTooltip = () => {
    if (!this.state.passwordToggle) return
    return (
      <div className={['fk-input-password__img', this.iconClass].join(' ')} style={this.state.iconStyle} onClick={this.toggle}></div>
    )
  } 

  render () {
    return (
      <section className="fk-input-password" onMouseEnter={this.show} onMouseLeave={() => this.setState({passwordToggle: false})} >
        <Input type={this.state.inputType} value={this.state.value} onChange={this.onInput} inputRef={el => this.inputElement = el} block placeholder={this.props.placeholder} required={this.props.required} aria-label={this.props.placeholder} pid="input_password"/>
        {this.renderTooltip()}
      </section>
    )
  }
}

InputPassword.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

InputPassword.defaultProps = {
  value: '',
  placeholder: '',
  required: false
}

export default InputPassword