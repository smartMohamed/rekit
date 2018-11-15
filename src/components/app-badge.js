import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/app-badges.styl'

class AppBadges extends React.Component {
  render () {
    return (
      <a href={this.props.url} className={['fk-app-btn', this.props.className].join(' ')} target="_blank" rel="noopener noreferrer">{ this.props.label }</a>
    )
  }
}

AppBadges.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string
}

AppBadges.defaultProps = {
  url: '',
  label: ''
}

export default AppBadges