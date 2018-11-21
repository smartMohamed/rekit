import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/footer.styl'
 

import Grid from '@/components/grid'
import Row from '@/components/row'
import Col from '@/components/col'
import AppBadge from '@/components/app-badge'
import SocialIcon from '@/components/social-icon'

class Footer extends React.Component {

  renderLinks = (items = []) => {
    return items.map(item => (
      <li  key="item.url">
        <a className="fk-footer__link" href={item.url}>{ item.label }</a>
      </li>
    ))
  }

  renderHeadline = (headline = '') => {
    return !headline ? '' : <h4 >{ headline }</h4>
  }

  renderBadges = (buttons = []) => {
    return buttons.map(btn => (
      <AppBadge href={btn.url} className={btn.name} label={btn.label} key={btn.name} />
    )) 
  }

  renderSocialIcons = (icons = []) => {
    return icons.map(icon => (
      <SocialIcon href={icon.url} name={icon.name} label={icon.label} key="icon.name" />
    ))
  }
  render () {

    return (
      <footer className="fk-footer">
      <Grid>
        <Row>
          <Col xs12 lg3>
            <ul className="fk-footer__nav">
            {this.renderLinks(this.props.navItems[0])}
            </ul>
          </Col>
          <Col xs12 lg3>
            <ul className="fk-footer__nav">
              {this.renderLinks(this.props.navItems[1])}
            </ul>
          </Col>
          <Col xs12 lg3>
            <ul className="fk-footer__nav">
              {this.renderLinks(this.props.navItems[2])}
            </ul>
          <section className="fk-footer__app-stores">
            <div>
              {this.renderHeadline(this.props.appStoreItems.headline)}
              <div className="fk-footer__app-stores__buttons">
                {this.renderBadges(this.props.appStoreItems.buttons)}
              </div>
            </div>
          </section>
          </Col>
          <Col xs12 lg3>
            <ul className="fk-footer__nav">
              {this.renderLinks(this.props.navItems[3])}
            </ul>
            <section className="fk-footer__social">
              <div>
                {this.renderHeadline(this.props.socialItems.headline)}
                <div className="fk-footer__social__icons">
                  {this.renderSocialIcons(this.props.socialItems.icons)}
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Grid>
    </footer>
    )
  }
}

Footer.propTypes = {
  navItems: PropTypes.array,
  appStoreItems: PropTypes.object,
  socialItems: PropTypes.object
}

Footer.defaultProps = {
  navItems: () => [],
  appStoreItems: () => ({}),
  socialItems: () => ({})
}

export default Footer