import React from 'react'

import '../stylus/mixins/foot-note.styl'

class FootNote extends React.Component {

  render () {
    return (
      <section className="fk-foot-note">
        {this.props.children}
      </section>
    )
  }
}

export default FootNote