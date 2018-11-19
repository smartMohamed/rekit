import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import '../stylus/mixins/description-block.styl'

import Title from '@/components/title'

class DescriptionBlock extends React.Component {

  get className () {
    return classnames({
      'm-b-10': true,
      'fk-description-block--hide': this.props.hide
    })
  }

  render () {
    return (
      <section className="fk-description-block">
        <Title size="md" color="primary" className={this.className}>{this.props.title}</Title>
        <div className="fk-description-block__content">
          {this.props.children}
        </div>
      </section>
    )
  }
}

DescriptionBlock.propsTypes = {
  title: PropTypes.string,
  hide: PropTypes.bool
}

DescriptionBlock.defaultProps = {
  title: '',
  hide: false
}

export default DescriptionBlock