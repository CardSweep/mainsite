import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'

const Link = (props) => {
  if (props.onClick) {
    return (
      <RouterLink
        onClick={props.onClick}>
        {props.children}
      </RouterLink>
    )
  } else {
    return (
      <RouterLink
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
