import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../../Theme'

const styles = {
  link: style({
    textDecoration: 'none',
    color: Theme.colors.accentColor,
    fontWeight: Theme.measures.linkWeight
  })
}
const Link = (props) => {
  let className = styles.link

  if (props.css) {
    className += ` ${props.css}`
  }

  return (
    <a
      className={className}
      href={props.url}>
      {props.children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.element,
  css: PropTypes.object,
  url: PropTypes.string
}
export default Link
