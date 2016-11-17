import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { style } from 'glamor'
import Theme from '../../Theme'
import Button from '../common/Button'
import Input from '../common/Input'

// TODO repeating the padding top in all rendered screen is redundant
// FIND A BETTER WAY!!!
const styles = {
  formWrapper: style({
    paddingTop: Theme.measures.navBarHeight + Theme.measures.navBarBorderBottom,
    flex: 1
  }),
  form: style({
    flex: 1,
    margin: 30,
    padding: 30,
    borderRadius: 4,
    border: `2px solid ${Theme.colors.primaryColor}`
  })
}

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (values) {
    console.log(values)
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Input label='Email' name='email' type='email' />
          <Input label='Password' name='password' type='password' />
          <Button
            action='submit'>
            Sign up
          </Button>
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignUp)
