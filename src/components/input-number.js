import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import '../stylus/mixins/number-input.styl'

import Flex from '@/components/flex'
import Button from '@/components/button'
import Input from '@/components/input'
import Icon from '@/components/icon'

class InputNumber extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.value}
  }

  get buttonClass () {
    return classnames({
      'fk-number-input__button--small': this.props.size === 'small',
      'fk-number-input__button--big': this.props.size === 'big'
    })
  }

  get inputClass() {
    return classnames({
      'fk-number-input__input--small': this.props.size === 'small',
      'fk-number-input__input--big': this.props.size === 'big'
    })
  }

  decrease = () => {
    const value = this.state.value - 1
    this.setState({value})
    this.props.onInput(value)
  }

  increase = () => {
    const value = this.state.value + 1
    this.setState({value})
    this.props.onInput(value)
  }

  handleChange = (value) => {
    let num = Number(value) || 0
    num =  Math.max(Math.min(this.props.max, num), this.props.min)
    this.setState({value: num})
    this.props.onInput(num)
  }

  render () {
    return (
      <Flex className="fk-number-input">
        <Button color="secondary" disabled={this.state.value <= this.props.min} className={this.buttonClass} aria-label="decrease" onClick={this.decrease}>
          <Icon icon="minus" size={this.props.size} alt="minus"/> 
        </Button>
        <Input type="number" value={this.state.value} className={this.inputClass} onChange={this.handleChange} aria-label={this.props.ariaLabel} />
        <Button color="secondary" disabled={this.state.value >= this.props.max} className={this.buttonClass} aria-label="increase" onClick={this.increase} >
          <Icon icon="plus" size={this.props.size} alt="plus"/> 
        </Button>
      </Flex>
    )
  }
}

InputNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  size: PropTypes.string,
  ariaLabel: PropTypes.string,
  onInput: PropTypes.func
}

InputNumber.defaultProps = {
  min: 1,
  max: 3,
  value: 1,
  size: 'small',
  ariaLabel: '',
  onInput: () => {}
}

export default InputNumber