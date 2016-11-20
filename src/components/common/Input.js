import React, { PropTypes } from 'react'
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
    color: Theme.colors.secondaryText
  }),
  input: style({
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: Theme.measures.headingOneSize,
    color: Theme.colors.primaryText,
    borderBottom: `2px solid ${Theme.colors.darkPrimaryColor}`
  }),
  inputWrapper: style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }),
  error: style({
    color: Theme.colors.danger,
    paddingTop: 5,
    fontSize: Theme.measures.fontSmall
  }),
  warning: style({
    color: Theme.colors.warning,
    paddingTop: 5,
    fontSize: Theme.measures.fontSmall
  })
}

const Input = ({ input, name, label, type, meta: { touched, error, warning } }) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input className={styles.input} {...input} placeholder={label} type={type} />
        {touched && ((error && <span className={styles.error}>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object
}

export default Input
