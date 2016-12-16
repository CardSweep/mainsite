import React, { PropTypes } from 'react'
import { css } from 'glamor'
import { Link as RouterLink } from 'react-router'

const linkStyle = css({
  textDecoration: 'none'
})
const Link = (props) => {
  if (props.onClick) {
    return (
      <RouterLink
        {...linkStyle}
        onClick={props.onClick}>
        {props.children}
      </RouterLink>
    )
  } else {
    return (
      <RouterLink
        {...linkStyle}
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
