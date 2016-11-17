import React, { PropTypes } from 'react'
import { style } from 'glamor'

const sectionStyle = style({
  minHeight: 500,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Section = (props) => {
  let className = sectionStyle

  if (props.css) {
    className += ` ${props.css}`
  }

  return (
    <section className={className}>
      {props.children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.element,
  className: PropTypes.object,
  css: PropTypes.object
}

export default Section
