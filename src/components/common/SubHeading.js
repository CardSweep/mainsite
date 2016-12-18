import React from 'react'
import { css } from 'glamor'
import { grey700 } from 'material-ui/styles/colors'
const style = {
  fontSize: '3rem',
  color: grey700
}

const SubHeading = (props) => (
  <h1 {...css({...style, ...props.style})}>
    {props.text}
  </h1>
)

export default SubHeading
