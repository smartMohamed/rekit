import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/coupon-popup.styl'

import Dialogue from '@/components/dialogue'
import Title from '@/components/title'
import Icon from '@/components/icon'
import Button from '@/components/button'

class CouponPopup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {visible: props.visible}
  }

  close = () => {
    this.setState({visible: false})
    this.props.onChange()
  }

  proceed = () => {
    console.log('here?????')
    this.props.onProcced()
    this.close()
  }

  render () {
    return (
      <Dialogue visible={this.state.visible} onChange={this.close}>
        <div className="fk-coupon-popup">
          <Title className="fk-coupon-popup__title" color="primary" size="xl">{ this.props.config.title }</Title>
          <img src={this.props.config.image} className="fk-coupon-popup__img" />
          <p className="fk-coupon-popup__txt">{ this.props.config.headline }</p>
          <p className="fk-coupon-popup__txt">
            { this.props.config.label }
            <span className="fk-coupon-popup__txt__code">{ this.props.config.code }</span>
          </p>
          <Button className="fk-coupon-popup__btn" size="big" block={true} color="secondary" onClick={this.proceed} link>
            <span>{ this.props.config.accept }</span>
            <Icon icon="arrow-right" />
          </Button>
          <span className="fk-coupon-popup__close" onClick={this.close}>{ this.props.config.reject }</span>
        </div>
      </Dialogue>
    )
  }
}

CouponPopup.propTypes = {
  config: PropTypes.object,
  visible: PropTypes.bool,
  onChange: PropTypes.func,
  onProcced: PropTypes.func
}

CouponPopup.defaultProps = {
  config: () => ({}),
  visible: false,
  onChange: () => {},
  onProcced: () => {}
}


export default CouponPopup