import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { style } from 'glamor'
import Theme from '../../Theme'
import FormError from './FormError'
import Button from '../common/Button'
import Input from '../common/Input'

// Redux stuff
import * as actions from '../../actions'

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
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Input label='Email' name='email' type='email' />
          <Input label='Password' name='password' type='password' />
          <Button
            action='submit'>
            Sign in
          </Button>
        </form>
        {/*
          TODO might need to reevaluate these functions for perf reasons later
          for now it is fine
        */}
        <div className={styles.buttonWrapper}>
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
  fields: ['email', 'password']
})(SignIn)

export default SignIn = connect(null, actions)(SignIn)
