import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/carousel.styl'

import Swipeable from '@/components/internal/swipeable'
import Flex from '@/components/flex'

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selected: props.active, styles: {}, max: props.slides.length - 1, lastPosition: null}
  }

  moveTo = (i) => {
    if (Math.max(0, Math.min(this.state.max, i)) === i) {
      this.setState({selected: i}, this.translate)
    } else if (this.props.loop) {
      this.setState({selected: (this.state.max + 1) - Math.abs(i)}, this.translate)
    }
  }

  swiping = (amount) => {
    const x = this.state.selected - amount
    // Making sure only swiping one step
    const min = Math.max(this.state.selected - 1, 0)
    const max = Math.min(this.state.selected + 1, this.max)
    if (x < min) {
      this.translate(min)
    } else if (x > max) {
      this.translate(max)
    } else {
      this.translate(x)
    }
  }

  translate = (x = this.state.selected) => {
    // NOTE: making sure that we are recalculating style for the same value
    if (this.state.lastPosition === x) return
    this.setState({lastPosition: x})

    const transition = x === this.selected ? 'transform 300ms ease 0s' : 'transform 0s linear 0s'
    const transform = `translateX(${x * -100}%)`

    this.setState({styles: { transition, transform }})
  }

  getIndicatorClass (i) {
    return classnames({
      'fk-carousel__indicator': true,
      'fk-carousel__indicator--active': i === this.state.selected
    })
  }

  getPreviewClass (i) {
    return classnames({
      'fk-carousel__preview': true,
      'fk-carousel__preview--active': i === this.state.selected
    })
  }

  componentDidMount () {
    this.translate(this.props.active)
  }

  /* rendering functions */
  renderTrack = () => {
    return this.props.slides.map((src, i) => (<img key={i} className="fk-carousel__slide" src={src} draggable="false" alt={this.props.alt + '-' + i}/>))
  }    

  renderLabels = () => {
    return this.props.slides.map((_, i) => (<label key={i} className={this.getIndicatorClass(i)} onClick={() => this.moveTo(i)}></label>))
  }

  renderImages = () => {
    return this.props.slides.map((src, i) => (<img key={i} className={this.getPreviewClass(i)}  alt={this.props.alt + '-' + i} src={src} onClick={() => this.moveTo(i)} draggable="false"/>))
  }

  render () {
    

    return (
      <section className="fk-carousel">

      <Swipeable swipeLeft={() => this.moveTo(this.state.selected-1)} swipeRight={() => this.moveTo(this.state.selected+1)} swiping={this.swiping} swipeEnd={() => this.moveTo(this.state.selected)}>
        <div className="fk-carousel__track" style={this.state.styles}>
          {this.renderTrack()}
        </div>
      </Swipeable>
  
      <div className="fk-carousel__indicators">
        {this.renderLabels()}
      </div>
  
      <Flex className="fk-carousel__previews" justify="space-evenly">
        {this.renderImages()}
      </Flex>

    </section>

    )
  }

}

Carousel.propTypes = {
  slides: PropTypes.array,
  active: PropTypes.number,
  loop: PropTypes.bool,
  alt: PropTypes.string
}

Carousel.defaultProps = {
  slides: () => [],
  active: 0,
  loop: false,
  alt: ''
}

export default Carousel