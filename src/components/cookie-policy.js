import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/cookie-policy.styl'

import Flex from '@/components/flex'
import Icon from '@/components/icon'

class CookiePolicy extends React.Component {

  constructor (props) {
    super(props)
    this.content = {
      de: 'Durch die Nutzung dieser Website stimmst du der Verwendung von Cookies zu. Weitere Informationen und Hinweise zur Änderung deiner Cookie-Einstellungen findest du in unseren',
      en: 'By using this website, you are allowing the usage of cookies. More information about cookies and how to change your cookie settings are listed in our'
    }
    this.linkTitle = {
      de: 'Cookie-Richtlinien',
      en: 'cookies policy'
    }
  }


  render () {
    return (
      <Flex className="cookie-policy" justify="space-between">
        <p className="cookie-policy__content">{this.content[this.props.lang]} <a href={this.props.link}>{this.linkTitle[this.props.lang]}</a>.</p>
        <div class="cookie-policy__close" onClick={this.props.onClose} ><Icon color="white" icon="close"  /></div>
      </Flex>
    )
  }
}

CookiePolicy.propTypes = {
  link: PropTypes.string,
  lang: PropTypes.string,
  onCLose: PropTypes.func
}

CookiePolicy.defaultProps = {
  link: '#',
  lang: 'de',
  onClose: () => {}
}

export default CookiePolicy