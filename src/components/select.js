import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/select.styl'

class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = {error: null, value: props.value}
  }

  get className() {
    return classnames({
      'fk-select': true,
      'fk-select--block': !!this.props.block,
      'fk-select--error': this.invalid
    })
  }

  updateValue = (e) => {
    const value = e.target.value
    this.setState({value})
    this.props.onInput(value)
  }
  validate = () => {}

  renderOptions = () => {
    return this.props.options.map((option, $index) => (
      <option key={$index} value={option.value} selected={this.state.value == option.value}>
          { option.label }
      </option>
    ))
  }

  render () {
    return (
      <select {...this.props} className={this.className} onChange={this.updateValue} onBlur={this.validate}>
        {
          (() => this.props.placeholder ? <option value="" selected={!this.state.value}>{this.props.placeholder}</option> : '')()
        }
        {this.renderOptions()}
      </select>
    )
  }

}

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  block: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Select.defaultProps = {
  placeholder: '',
  options: () => [],
  block: false,
  required: false,
  value: ''
}

export default Select