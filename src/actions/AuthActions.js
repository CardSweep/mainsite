import firebase from 'firebase'

export const signInUser = ({email, password}) => {
  return (dispatch) => {
    // submit email password to firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
    // If request is good...
    // - update state
    // - Redirect to user dash if good
    .then(user => {
      console.log('in action', user)
    })
    // If request is bad...
    // - show the error
    .catch()
  }
}

export const signInUserOAuth = (reqProvider) => {
  return (dispatch) => {
    let provider

    if (reqProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider()
    } else if (reqProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider()
    }
    // call popup
    firebase.auth().signInWithPopup(provider)
      .then(user => console.log('in action', user))
    // If request is good...
    // - update state
    // - Redirect to user dash if good
    // If request is bad...
    // - show the error
  }
}
