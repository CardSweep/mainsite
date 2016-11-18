import React from 'react'
import { style } from 'glamor'
import Theme from '../../Theme'

// TODO need to add click feedback styles still
const styles = {
  button: style({
    minWidth: Theme.measures.buttonWidth,
    height: Theme.measures.buttonHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    borderRadius: Theme.measures.buttonBorderRadius,
    fontSize: Theme.measures.buttonInputFontSize,
    padding: 5,
    color: Theme.colors.primaryText,
    backgroundColor: Theme.colors.accentColor,
    boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.26)`,
    margin: Theme.measures.inputGroupMargin,
    cursor: 'pointer'
  })
}

const Button = (props) => (
  <button {...props} className={styles.button}>
    {props.children}
  </button>
)

export default Button
