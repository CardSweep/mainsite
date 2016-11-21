import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../../Theme'

// TODO need to add click feedback styles still
const styles = {
  button: style({
    marginRight: Theme.measures.inputGroupMargin
  })
}

const Button = (props) => (
  <button {...props} className={`btn btn-outline-primary btn-lg ${styles.button}`}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string
}
export default Button
