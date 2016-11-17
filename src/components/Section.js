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

  if (props.className !== undefined) {
    className += ` ${props.className}`
  }

  return (
    <section className={className}>
      {props.children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.element,
  className: PropTypes.object
}

export default Section
