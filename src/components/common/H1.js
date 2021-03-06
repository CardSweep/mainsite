import React from 'react'
import { css } from 'glamor'
import { grey700 } from 'material-ui/styles/colors'
const style = {
  fontSize: '4rem',
  color: grey700
}

const H1 = (props) => (
  <h1 {...css({...style, ...props.style})}>
    {props.text}
  </h1>
)

export default H1
