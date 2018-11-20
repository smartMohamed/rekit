import React from "react"

import '../stylus/mixins/grid.styl'


const Col = (props) => (
  <div className={props ? Object.keys(props).concat('fk-col').join(' ') : 'fk-col'} >
    {props.children}
  </div>
)

export default Col