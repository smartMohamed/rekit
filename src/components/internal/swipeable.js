import React from 'react'
import PropTypes from 'prop-types'

class Swipeable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listenerOptions: {passive: true, capture: false}, 
      element: null, 
      startPos: 0,
      elWidth: 0,
      threshold: 100
    }
  }
  
  onTouchStart = (e) => {
    const startPos = this.getTouchPos(e)
    const elWidth = this.state.element.clientWidth

    this.setState({startPos, elWidth})

    document.addEventListener('touchend', this.onTouchEnd, this.istenerOptions)
    document.addEventListener('mouseup', this.onTouchEnd, this.listenerOptions)

    document.addEventListener('touchmove', this.onTouchMove, this.listenerOptions)
    document.addEventListener('mousemove', this.onTouchMove, this.listenerOptions)
  }

   onTouchEnd = (e) => {
    const delta = this.getTouchPos(e) - this.state.startPos
    if (delta < -this.state.threshold) {
      this.props.swipeRight()
    } else if (delta > this.state.threshold) {
      this.props.swipeLeft()
    } else {
      this.props.swipeEnd()
    }
    document.removeEventListener('touchend', this.onTouchEnd)
    document.removeEventListener('mouseup', this.onTouchEnd)

    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('mousemove', this.onTouchMove)
  }

  onTouchMove = (e) => {
    // e.preventDefault()
    const delta = this.getTouchPos(e) - this.state.startPos
    const relativeDelta = delta / this.state.elWidth
    this.props.swiping(relativeDelta)
  }

  getTouchPos = (e) => {
    return e.changedTouches ? e.changedTouches[0].pageX : e.pageX
  }


  componentDidMount () {
    const element = this.refs.swipeable
    this.setState({element: element})
    element.addEventListener('mousedown', this.onTouchStart, this.listenerOptions)
    element.addEventListener('touchstart', this.onTouchStart, this.listenerOptions)
  }

  render () {
    return (
      <div ref="swipeable">
        {this.props.children}
      </div>
    )
  }

}

Swipeable.propTypes = {
  swipeLeft: PropTypes.func,
  swipeRight: PropTypes.func,
  swipping: PropTypes.func,
  swipeEnd: PropTypes.func
}

Swipeable.defaultTypes = {
  swipeLeft: () => {},
  swipeRight: () => {},
  swiping: () => {},
  swipeEnd: () => {}
}

export default Swipeable