import React from 'react'
import { css } from 'glamor'

const styles = {
  content: css({
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto'
  })
}

const Content = (props) => (
  <div {...css(styles.content, props.style)}>
    {props.children}
  </div>
)

export default Content
