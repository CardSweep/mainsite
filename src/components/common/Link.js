import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
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
    <RouterLink
      className={className}
      to={props.to}>
      {props.children}
    </RouterLink>
  )
}

Link.propTypes = {
  children: PropTypes.element,
  css: PropTypes.object,
  to: PropTypes.string
}
export default Link
