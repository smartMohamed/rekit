import React from "react"
import classnames from 'classnames'
import PropTypes from 'prop-types'
import password from '@smartfrog/password'


import { regex } from '@/mixins/validator' 
import '../stylus/mixins/input.styl'

class Input extends React.Component {
  constructor(props) {
    super(props)
    const value = props.value || ""
    this.state = {value}
    this.validatorElement = true
    this.touched = false
    this.pattern = regex[props.type]
    this.errors = {
      pattern: false,
      required: false,
      lengthError: ''
    }
  }

  get errone() {
    return Object.values(this.errors || {}).some(Boolean)
  }

  get invalid() {
    return this.props.wrong || (this.errone && this.touched)
  }

  get className() {
    return classnames({
      'fk-input': true,
      'fk-input--small': this.props.size === 'small',
      'fk-input--cut-left': this.props.cutSide === 'left',
      'fk-input--cut-right': this.props.cutSide === 'right',
      'fk-input--block': !!this.props.block,
      'fk-input--invalid': this.invalid
    })
  }

  handleChange = (event) => {
    this.touched = true
    const value = event.target.value
    this.setState({value: value})
    this.props.onChange(value)
  }


  runValidation(value) {
    this.errors = this.validate(value)
  }

  validate(value, type = this.props.type, force = false) {
    const errors = {}
    if (this.props.disabled) return errors
    if (this.props.match) {
      errors.pattern = value !== this.match
      return errors
    }

    if (this.props.required || (this.props.requireValidation && value) || force) {
      errors.required = typeof value === 'string' ? !value.length : !value
      errors.pattern =
        (this.pattern && !this.pattern.test(value)) ||
        (typeof value === 'string' && !value.trim().length)
      if (type === 'password') {
        Object.assign(errors, password.getErrors(value))
      }
    }

    return errors
  }

  getStatus(value) {
    const passwordStatus = {
      WEAK: 'danger',
      MEDIUM: 'warning',
      STRONG: 'success',
    }
    return passwordStatus[password.getStrength(value)]
  }

  componentWillReceiveProps() {
    this.errors = this.validate(this.props.value)
  }

  componentWillUpdate(_, {value}) {
    this.errors = this.validate(value)
  }

  render() {
    return (
      <input {...this.props} onChange={this.handleChange} className={this.className} value={this.state.value}/>
    )
  }
}

Input.propTypes = { 
  type: PropTypes.string,
  size: PropTypes.string,
  cutSide: PropTypes.string,
  block: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  match: PropTypes.string,
  requireValidation: PropTypes.bool,
  wrong: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  size: '',
  cutSide: '',
  block: false,
  required: false,
  value: '',
  disabled: false,
  match: '',
  requireValidation: false,
  wrong: false
}

export default Input
