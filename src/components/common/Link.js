import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import { style } from 'glamor'
import Theme from '../../Theme'

const styles = {
  link: style({
    textDecoration: 'none',
    color: Theme.colors.accentColor,
    fontWeight: Theme.measures.linkWeight,
    cursor: 'pointer'
  })
}
const Link = (props) => {
  let className = styles.link

  if (props.css) {
    className += ` ${props.css}`
  }
  if (props.onClick) {
    return (
      <RouterLink
        className={className}
        onClick={props.onClick}>
        {props.children}
      </RouterLink>
    )
  } else {
    return (
      <RouterLink
        className={className}
        to={props.to}>
        {props.children}
      </RouterLink>
    )
  }
}

Link.propTypes = {
  children: PropTypes.element,
  css: PropTypes.object,
  to: PropTypes.string,
  onClick: PropTypes.func
}
export default Link
