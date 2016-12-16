import React from 'react'
import { css } from 'glamor'
import { grey700 } from 'material-ui/styles/colors'
const style = css({
  fontSize: '2rem',
  color: grey700
})
const H1 = (props) => (
  <h1 {...style}>
    {props.text}
  </h1>
)

export default H1
