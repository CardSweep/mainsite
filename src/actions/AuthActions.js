import firebase from 'firebase'
import { browserHistory } from 'react-router'
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from './types'

function successHandler (user, dispatch) {
  // If request is good...
  // - update state
  // - Redirect to user dash if good
  dispatch({type: LOGIN_USER_SUCCESS, payload: user})
  browserHistory.push('/dashboard')
}

function errorHandler (error, dispatch) {
  // If request is bad...
  // - show the error
  dispatch({type: LOGIN_USER_FAIL, payload: error.message})
}

export const signInUser = ({email, password}) => {
  return (dispatch) => {
    // Immediately dispatch LOGIN_USER to show loading
    dispatch({type: LOGIN_USER})
    // submit email password to firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      successHandler(user, dispatch)
    })
    .catch(error => {
      errorHandler(error, dispatch)
    })
  }
}

export const signUpUser = ({email, password, displayName}) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_USER})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.updateProfile({
          displayName
        }).then(() => {
          dispatch({type: SIGNUP_USER_SUCCESS, payload: user})
          // TODO need to send with params since this will be a users first time
          // seeing the dashboard
          browserHistory.push('/dashboard')
        }).catch(error => {
          dispatch({type: SIGNUP_USER_FAIL, payload: error.message})
        })
      }).catch(error => {
        dispatch({type: SIGNUP_USER_FAIL, payload: error.message})
      })
  }
}

export const signInUserOAuth = (reqProvider) => {
  return (dispatch) => {
    // Immediately dispatch LOGIN_USER to show loading
    dispatch({type: LOGIN_USER})
    let provider

    if (reqProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider()
    } else if (reqProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider()
    }
    // call popup
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      // NOTE response contains the OAuth Creds as well as the user
      // should only be sending the user to the successHandler
      successHandler(res.user, dispatch)
    })
    .catch(error => {
      errorHandler(error, dispatch)
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER})
    firebase.auth().signOut()
    .then(() => {
      dispatch({type: LOGOUT_USER_SUCCESS})
      browserHistory.push('/')
    })
    .catch((error) => {
      dispatch({type: LOGOUT_USER_ERROR, payload: error.message})
    })
  }
}
