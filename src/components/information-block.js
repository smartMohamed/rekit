import React from 'react'
import PropTypes from 'prop-types'

import '../stylus/mixins/information-block.styl'

import Title from '@/components/title'

class InformationBlock extends React.Component {

  renderTitle = () => {
    if (this.props.hide) return
    return (
      <Title size="xs" className="fk-information-block__title m-b-10">{this.props.title}</Title>
    )
  }
  render () {
    return (
      <section className={['fk-information-block', this.props.className].join(' ')}>
        {this.renderTitle()}
        <div className="fk-information-block__content">
          {this.props.children}
        </div>
      </section>
    )
  }
}

InformationBlock.propTypes = {
  title: PropTypes.string,
  hide: PropTypes.bool
}

InformationBlock.defaultProps = {
  title: '',
  hide: false
}

export default InformationBlock