import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/social-icons.styl'

class SocialIcon extends React.Component {

  render () {
    return (
      <a href={this.props.url} className={['fk-social-icon', this.props.name].join(' ')} target="_blank" rel="noopener noreferrer">{ this.props.label }</a>
    )
  }
}

SocialIcon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
}

SocialIcon.defaultProps = {
  url: '',
  name: '',
  label: ''
}

export default SocialIcon