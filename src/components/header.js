import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/header.styl'

import CountrySelector from '@/components/country-selector'
import Flex from '@/components/flex'
import Input from '@/components/input'
import Button from '@/components/button'
import Icon from '@/components/icon'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mobileNavOpen: false, username: '', password: ''}
  }

  get navClassName () {
    return classnames({
      'fk-header__nav': true,
      'fk-header__nav--on': this.state.mobileNavOpen
    })
  }

  toogleBurgerMenu = () => {
    this.setState({mobileNavOpen: !this.state.mobileNavOpen})
  }

  login = (event) => {
    event.preventDefault()
    const {username, password} = this.state
    this.props.onLogin({username, password})
  }

  onEmailChange = (value) => {
    this.setState({username: value})
  }
  onPasswordChange = (value) => {
    this.setState({password: value})
  }

  /* Rendering functions */

  renderNavItems = (navMainItems = []) => {
    return navMainItems.map(item => (
      <li >
        <a href={item.url}>{ item.label }</a>
      </li>
    ))
  }
  renderExtraNavList = (navExtraItems = []) => {
    if (this.props.navOnly) return 
    return navExtraItems.map(item => (
      <li>
        <a href={item.url}>{ item.label }</a>
      </li> 
    ))
  }

  showCartItemQuantity = () => {
    if (!this.props.cartCounter) return
    return <span className="fk-header__btn-cart__counter">{ this.props.cartCounter }</span>
  }

  renderInputs = () => {
    if (this.props.navOnly) return
    return (
      <Flex grow justify="end" align="center">
        <CountrySelector
          countries={this.props.countries}
          currentCountry={this.props.currentCountry}
          selectLabel={this.props.countrySelectLabel}
          mobileNavOpen={this.state.mobileNavOpen}
          open={this.toogleBurgerMenu}
          onChange={this.props.onCountryChange} />
        <form className="fk-header__form" onSubmit={this.login}>
          <div className="fk-header__form__field">
            <Input name="email" type="email" size="small" onChange={this.onEmailChange} wrong={this.props.wrongInput} placeholder={this.props.formItems.emailPlaceholder} aria-label={this.props.formItems.emailPlaceholder}></Input>
            <a href={this.props.formItems.registerUrl} aria-label={this.props.formItems.registerLabel}>{ this.props.formItems.registerLabel }</a>
          </div>
          <div className="fk-header__form__field">
              <Input name="password" type="password" size="small" onChange={this.onPasswordChange} wrong={this.props.wrongInput} placeholder={this.props.formItems.passwordPlaceholder} aria-label={this.props.formItems.passwordPlaceholder}></Input>
              <a href={this.props.formItems.retriveUrl} aria-label={this.props.formItems.retriveLabel}>{ this.props.formItems.retriveLabel }</a>
          </div>
          <Button type="submit" color="primary" size="small" className="fk-header__form__login">
            { this.props.navExtraItems[2].label }
          </Button>
        </form>
        <Button link color="primary" size="small" className="fk-header__btn-login" href={this.props.registrationLink} aria-label={this.props.navExtraItems[2].label}>
          { this.props.navExtraItems[2].label }
        </Button>
        <Button link color="secondary" size="small" className="fk-header__btn-shop" href={this.props.navExtraItems[1].url} aria-label={this.props.navExtraItems[1].label}>
          { this.props.navExtraItems[1].label }
        </Button>
        <Button link color="secondary" size="small" className="fk-header__btn-cart" href={this.props.navExtraItems[0].url} aria-label="cart">
          <Icon icon="basket" alt="cart"/>
          {this.showCartItemQuantity()}
        </Button>
      </Flex>

    )
  }


  render () {
    return (
      <header className="fk-header">
        <div className="fk-header__container">
          <h1 className="fk-header__logo">
            <a href={this.props.logoUrl} aria-label="home"><img src={require("../assets/logo.svg")} alt="smartfrog-logo" /></a>
          </h1>
          <span className="fk-header__toggle" onClick={this.toogleBurgerMenu}>
            <Icon icon="hamburger-menu" />
          </span>
            <nav className={this.navClassName} >
              <ul>
                {this.renderNavItems(this.props.navMainItems)}
                {this.renderExtraNavList(this.props.navExtraItems)}
              </ul>
            </nav>
          {this.renderInputs()}
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  logoUrl: PropTypes.string,
  navMainItems: PropTypes.array,
  navExtraItems: PropTypes.array,
  cartCounter: PropTypes.number,
  formItem: PropTypes.object,
  countries: PropTypes.array,
  currentCountry: PropTypes.string,
  countrySelectLabel: PropTypes.string,
  navOnly: PropTypes.bool,
  wrongInput: PropTypes.bool,
  registrationLink: PropTypes.string
}

Header.defaultProps = {
  logoUrl: '/',
  navMainItems: () => [],
  navExtraItems: () => [],
  cartCounter: 0,
  formItem: () => ({}),
  countries: () => [],
  currentCountry: '',
  countrySelectLabel: '',
  navOnly: false,
  wrongInput: false,
  registrationLink: ''
}

export default Header