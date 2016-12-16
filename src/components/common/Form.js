import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../../Theme'

const formStyle = style({
  borderRadius: '0.3rem',
  border: `2px solid ${Theme.colors.primaryColor}`
})

const Form = (props) => {
  let className = formStyle

  if (props.css) {
    className += ` ${props.css}`
  }
  return (
    <form className={`card card-block ${className}`} {...props}>
      {props.children}
    </form>
  )
}

Form.propTypes = {
  css: PropTypes.object,
  children: (props, propName, componentName) => {
    const type = typeof props.children
    const types = ['object', 'array']
    if (types.indexOf(type) === -1) {
      return new Error(
        '`' + componentName + '` ' +
        'should have a single child of the following types: ' +
        ' `' + types.join('`, `') + '`.'
      )
    }
  }
}
export default Form
