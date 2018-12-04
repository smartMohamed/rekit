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

  static getDerivedStateFromProps(props, state) {
    if (state.value !== props.value) return {...state, value: props.value}
    return state
  }

  get errone() {
    return Object.values(this.errors || {}).some(Boolean)
  }

  get invalid() {
    return this.props.wrong || (this.errone && this.touched)
  }

  get className() {
    let className = classnames({
      'fk-input': true,
      'fk-input--small': this.props.size === 'small',
      'fk-input--cut-left': this.props.cutSide === 'left',
      'fk-input--cut-right': this.props.cutSide === 'right',
      'fk-input--block': !!this.props.block,
      'fk-input--invalid': this.invalid
    })
    if (this.props.className) className = `${this.props.className} ${className}` 
    return className
  }

  handleChange = (event) => {
    this.touched = true
    let value = event.target.value
    if(this.props.type === 'ukZip') value = this.formatUkZip(value)
    this.setState({value: value})
    this.props.onChange(value)
  }


  runValidation(value) {
    this.pattern = regex[this.props.type]
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

  formatUkZip (zip = '') {
    const tmp = zip.replace(/\s+/g, '')
    if (tmp.length < 5) return tmp
    return tmp.slice(0, -3).concat(' ').concat(tmp.slice(-3))
  }

  componentDidMount() {
    this.runValidation(this.props.value)
  }

  shouldComponentUpdate(_, {value}) {
    this.runValidation(value)
    return true
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
