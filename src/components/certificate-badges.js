import React from 'react'
import PropTypes from 'prop-types'

import Flex from '@/components/flex'

class CertificateBadges extends React.Component {
  render () {
    return (
      <Flex align="center" justify="space-around">
        <img width={this.props.width} src={require('../assets/images/iso-27001.jpg')} alt="iso" />
        <img width={this.props.width} src={require('../assets/images/tuev.jpg')} alt="tuev" />
        <img width={this.props.width} src={require('../assets/images/iso-9001.jpg')} alt="iso-9001" />
        <img width={this.props.width} src={require('../assets/images/av-test.svg')} alt="av-test" />
      </Flex>
    )
  }
}

CertificateBadges.propTyeps = {
  width: PropTypes.string
}

CertificateBadges.defaultProps = {
  width: '65px'
}

export default CertificateBadges