import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { fireOnClickOutside } from '@/utils/click-outside'

import '../stylus/mixins/country-selector.styl'

import Flex from '@/components/flex'
import Icon from '@/components/icon'

class CountrySelector extends React.Component {
  constructor (props) {
    super(props)
    const value = props.currentCountry.toUpperCase()
    const selectedCountry = this.getCountry(value)
    const prefferedCountries = props.countries.filter(({preferred}) => preferred)
          .sort((i, j) => i.displayName.localeCompare(j.displayName))
    this.state = {value, selectedCountry, prefferedCountries, toggleOn: false, handler: null}
    this.fireOnClickOutside = fireOnClickOutside.bind(this)
  }

  get toggleDropdown () {
    if(this.props.mobileNavOpen) this.setState({toggleOn: false})
    return this.state.toggleOn
  }

  set toggleDropdown (toggleOn) {
    this.setState({toggleOn})
    this.props.onOpen()
  }

  get classCountryToggle () {
    return classnames({
      'fk-countries__toggle': true,
      'fk-countries__toggle--on': this.toggleDropdown
    })
  }

  get classDropDown () {
    return classnames ({
      'fk-countries__dropdown': true,
      'fk-countries__dropdown--on': this.toggleDropdown
    })
  }
 
  getCountry = (code) => {
    return this.props.countries.find(country => country.countryCode === code) || {}
  }

  flagSrc = (code) => {
    try {
      return require(`../assets/flags/${code}.png`)

    } catch (e) {
      return require(`../assets/flags/_unknown.png`)
    }
  }

  
  updateCountry = (value) => {
    this.setState({value})
    this.setState({selectedCountry: this.getCountry(value)})
    this.toggleDropdown = false
    this.props.onChange(this.getCountry(value))
  }

  closeDropDown = () => {
    this.setState({toggleOn: false})
  }

  /* Rendering functions */
  renderCountryList = () => {
    return this.props.countries.map(country => (
      <option
        key={country.countryCode}
        value={country.countryCode}
        selected={this.state.value === country.countryCode}
        
        >
          {country.displayName}
      </option>
    ))
  }

  renderPrefferedCountries = () => {
    return this.state.prefferedCountries.map(country => (
      <Flex
        align="center"
        className="fk-countries__item"
        key={country.countryCode}
        onClick={() => this.updateCountry(country.countryCode)}>
          <img src={this.flagSrc(country.countryCode)} alt={country.displayName} />
          <p>{ country.displayName }</p>
      </Flex>
    ))
  }

  renderFullList = () => {
    return !this.state.toggleOn ? '' :
    (
      <Flex align="center" className={this.classDropDown}>
          {this.renderPrefferedCountries()}
          <Flex grow align="center" justify="space-between" className="fk-countries__select-box">
            <p>{ this.props.selectLabel }</p>
            <select onChange={($event) => this.updateCountry($event.target.value)}>
              {this.renderCountryList()}
            </select>
          </Flex>
        </Flex>
    )
  }

  componentDidMount () {
    const handler = ($event) => this.fireOnClickOutside($event, 'countrySelector', this.closeDropDown)
    document.body.addEventListener('click', handler)
    this.setState({handler})
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.state.handler)
  }

  render () {
    return (
      <div class="fk-countries" v-click-outside="closeDropDown" ref="countrySelector">
        <Flex
          align="center"
          justify="space-between"
          className={this.classCountryToggle}
          onClick={ () =>this.toggleDropdown = !this.state.toggleOn}>
            <img src={this.flagSrc(this.state.selectedCountry.countryCode)} alt={this.state.selectedCountry.displayName} />
            <p>{ this.state.selectedCountry.displayName }</p>
            <Icon icon="angle-down" />
        </Flex>
        {this.renderFullList()}
    </div>
    )
  }
}

CountrySelector.PropTypes = {
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  countries: PropTypes.array,
  currentCountry: PropTypes.string,
  mobileNavOpen: PropTypes.bool,
  selectLabel: PropTypes.string
}

CountrySelector.defaultProps = {
  onChange: () => {},
  onOpen: () => {},
  countries: () => [],
  currentCountry: '',
  mobileNavOpen: false,
  selectLabel: ''
}

export default CountrySelector