import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/checkbox.styl'


class CheckBox extends React.Component {

  get className () {
    return classnames({
      'fk-checkbox': true,
      'fk-checkbox--disabled': this.props.disabled,
      'fk-checkbox--invalid': this.props.invalid
    })
  }

  get isChecked () {
    return this.props.checked === this.props.trueValue
    || (this.props.value && this.props.checked === this.props.value)
    || this.props.checked === true
  }

  updateValue (e) {
    const checked = e.target.checked
    
  }

  render () {
    return (
      <label className={this.className}>
        <input type="checkbox" value={this.props.value} checked={this.isChecked} onChange={this.updateValue} disabled={this.props.disabled} />
        {this.props.children}
      </label>
    )
  }
} 

CheckBox.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
  value: PropTypes.string,
  trueValue: PropTypes.bool,
  falseValue: PropTypes.bool,
  disabled: PropTypes.bool
}

CheckBox.defaultProps = {
  checked: false,
  required: false,
  value: '',
  trueValue: true,
  falseValue: false,
  disabled: false 
}

export default CheckBox