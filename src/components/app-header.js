import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/app-header.styl'

import Flex from '@/components/flex'
import Grid from '@/components/grid'
import Col from '@/components/col'
import Icon from '@/components/icon'
import Button from '@/components/button'

class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggleLangList: false}
  }

  get langClass() {
    return classnames({
      'fk-app-header__lang': true,
      'fk-app-header__lang--on': this.state.toggleLangList
    })
  }

  toggleDropdown = () => {
    this.setState({toggleLangList: !this.state.toggleLangList})
  }

  changeLang = (code) => {
    this.props.changeLanguage(code)
  }

  logout = () => {
    this.props.logout()
  }

  renderLanguages () {
    return this.props.languages.map(lang => (
      <li key={lang.code} onClick={this.changeLang(lang.code)}>
        { lang.name }
      </li>
    ))
  }

  render () {
    
    return (
      <Flex>
        <Grid>
          <Col xs12>
            <header className="fk-app-header">
              <div className="fk-app-header__container">
                <h1 className="fk-app-header__logo" pid="header_button_home">
                  <a href="logoUrl" aria-label="app">
                    <Icon icon="logo-small" />
                  </a>
                </h1>
                <nav className="fk-app-header__nav">
                  <div className="fk-app-header__cam" pid="header_button_all_cameras">
                    {
                      (() => !this.props.navigations[0] ? '' :
                      (
                        <a href={this.props.navigations[0].url} aria-label={this.props.navigations[0].label}>
                          <Icon icon="camera" alt={this.props.navigations[0].label} /> { this.props.navigations[0].label }
                        </a>
                      )
                      
                      )()
                    }
                    <div className="fk-app-header__cam__nav">                   
                    </div>
                  </div>
                  {
                    (() => !this.props.navigations[1] ? '' :
                    (
                      <a href={this.props.navigations[1].url} className="fk-app-header__account" pid="header_button_my_account" aria-label={this.props.navigations[1].label} >
                        <Icon icon="account" alt={this.props.navigations[1].label}/> { this.props.navigations[1].label }
                      </a>
                    )
                    )()
                  }
                  {
                    (() => !this.props.navigations[2] ? '' :
                    (
                      <Button link color="secondary" size="small" className="fk-app-header__btn-shop" href={this.props.navigations[2].url} pid="header_button_shop" aria-label={this.props.navigations[2].label}>
                        { this.props.navigations[2].label }
                      </Button>
                    )
                    )()
                  }
                  <div className="fk-app-header__user">
                    <span>{ this.props.username }</span>
                  </div>
                  <div className="fk-app-header__logout" onClick={this.logout}>
                    <Icon icon="angle-down" alt="logoutlabel" /> { this.props.logoutlabel }
                  </div>
                  <div className={this.langClass} onClick={this.toggleDropdown}>
                    { this.props.activeLang }
                    <Icon icon="angle-down" />
                    <ul>
                      {this.renderLanguages()}
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
          </Col>
        </Grid>
      </Flex>
    )
  }
}

AppHeader.propTypes = {
  logoUrl: PropTypes.string,
  navigations: PropTypes.array,
  username: PropTypes.string,
  activeLang: PropTypes.string,
  logoutlabel: PropTypes.string,
  languages: PropTypes.array,
  changeLanguage: PropTypes.func
}

AppHeader.defaultHeader = {
  logoUrl: '/',
  navigations: () => [],
  username: '',
  activeLang: '',
  logoutlabel: '',
  languages: () => [],
  changeLanguage: () => {}
}

export default AppHeader