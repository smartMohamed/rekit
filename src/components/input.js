import React from "react"
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/input.styl'

class Input extends React.Component {
  constructor(props) {
    super(props)
    const value = props.value || ""
    this.state = {value}
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  get className() {
    return classnames({
      'fk-input': true,
      'fk-input--small': this.props.size === 'small',
      'fk-input--cut-left': this.props.cutSide === 'left',
      'fk-input--cut-right': this.props.cutSide === 'right',
      'fk-input--block': !!this.props.block,
      'fk-input--invalid': this.props.invalid
    })
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
  requireValidation: PropTypes.bool
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
  requireValidation: false
}

export default Input
