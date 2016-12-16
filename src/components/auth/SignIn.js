import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { style } from 'glamor'
import Theme from '../../Theme'
import FormError from './FormError'
import Form from '../common/Form'
import Button from '../common/Button'
import Link from '../common/Link'
import Input from '../common/Input'

// Redux stuff
import * as actions from '../../actions'

// TODO repeating the padding top in all rendered screen is redundant
// FIND A BETTER WAY!!!
const styles = {
  formWrapper: style({
    flex: 1,
    paddingTop: Theme.measures.navBarHeight + Theme.measures.navBarBorderBottom,
    margin: 20,
    alignSelf: 'center'
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

  return errors
}

let SignIn = class SignIn extends Component {
  constructor (props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleGoogleSubmit = this.handleGoogleSubmit.bind(this)
  }

  handleFormSubmit ({ email, password }) {
    this.props.signInUser({email, password})
  }

  handleGoogleSubmit (provider) {
    this.props.signInUserOAuth(provider)
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <div className={`container ${styles.formWrapper}`}>
        <Form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Field label='Email' name='email' type='text' component={Input} />
          <Field label='Password' name='password' type='password' component={Input} />
          <Button
            action='submit'>
            Sign in
          </Button>
        </Form>
        {/*
          TODO might need to reevaluate these functions for perf reasons later
          for now it is fine
        */}
        <div className={styles.buttonWrapper}>
          <div>
            <p>Don't have an account? <Link to='/signup'><span>Signup</span></Link> or sign in with Google or Facebook.</p>
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

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
  signInUser: PropTypes.func,
  signInUserOAuth: PropTypes.func,
  error: PropTypes.string
}

SignIn = reduxForm({
  form: 'signin',
  validate
})(SignIn)

export default SignIn = connect(null, actions)(SignIn)
