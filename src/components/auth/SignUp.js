import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { style } from 'glamor'
import Theme from '../../Theme'
import FormError from './FormError'
import Button from '../common/Button'
import Input from '../common/Input'
import {signUpUser, signInUserOAuth} from '../../actions'

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
  }),
  buttonWrapper: style({
    display: 'flex',
    label: 'buttonWrapper',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 0
  }),
  buttonRow: style({
    display: 'flex',
    flex: 1,
    label: 'buttonRow',
    flexDirection: 'row'
  })
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be 6 or more characters.'
  }
  if (values.password !== values.passwordAgain) {
    errors.passwordAgain = 'Passwords must match'
  }
  return errors
}

let SignUp = class SignUp extends Component {
  constructor (props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit ({ email, password }) {
    this.props.signUpUser({email, password})
  }

  handleGoogleSubmit (provider) {
    this.props.signInUserOAuth(provider)
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(this.handleFormSubmit)} noValidate>
          <Field label='Email' component={Input} name='email' type='text' />
          <Field label='Password' component={Input} name='password' type='password' />
          <Field label='ReType Password' component={Input} name='passwordAgain' type='password' />
          <Button
            action='submit'>
            Sign up
          </Button>
        </form>
        <div className={styles.buttonWrapper}>
          <div>
            <p>You can sign up with an email and password or signin with Google or Facebook ...</p>
          </div>
          <FormError />
          <div className={styles.buttonRow}>
            <div>
              <Button onClick={() => this.handleGoogleSubmit('google')}>
                Google
              </Button>
            </div>
            <div>
              <Button onClick={() => this.handleGoogleSubmit('facebook')}>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  signInUserOAuth: PropTypes.func,
  signUpUser: PropTypes.func,
  password: PropTypes.string,
  passwordAgain: PropTypes.string,
  email: PropTypes.string
}

const mapStateToProps = ({auth}) => {
  const { error } = auth

  return {
    error
  }
}

SignUp = reduxForm({
  form: 'signup',
  validate
})(SignUp)

SignUp = connect(mapStateToProps, {signUpUser, signInUserOAuth})(SignUp)

export default SignUp
