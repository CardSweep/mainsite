import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { style } from 'glamor'
import Theme from '../../Theme'


// TODO should add some focus styling
const styles = {
  group: style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: Theme.measures.inputGroupMargin
  }),
  label: style({
    color: Theme.colors.secondaryText,
  }),
  input: style({
    border: 'none',
    outline: 'none',
    fontSize: Theme.measures.headingOneSize,
    color: Theme.colors.primaryText,
    borderBottom: `2px solid ${Theme.colors.darkPrimaryColor}`
  })
}

const Input = (props) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{props.label}</label>
      <Field
        className={styles.input}
        name={props.name}
        component='input'
        type={props.type}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Input
