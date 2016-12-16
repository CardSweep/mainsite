import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import reduxThunk from 'redux-thunk'
import './base.css'
// This is required for Material UI to work properly
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { LOGIN_USER_SUCCESS } from './actions/types'

import reducers from './reducers'
import App from './App'
import Main from './components/main/Main'
import Privacy from './components/main/Privacy'
import Terms from './components/main/Terms'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import SellCards from './components/cards/SellCards'
import Dashboard from './components/Dashboard/Dashboard'

const routingMiddleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(reduxThunk, routingMiddleware)(createStore)
let store

if (process.env.NODE_ENV !== 'production') {
  store = createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
  store = createStoreWithMiddleware(reducers)
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID
})

// Redirects to /signin by default if the user is not present
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user, // how to get the user state
  failureRedirectPath: '/signin',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

// This is a little hacky but allows a base rerender without flashing to the login screen
// Perhaps a loading state might solve this better.
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    })

    ReactDOM.render(
      <Provider store={store}
      >
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Main} />
            <Route path='signin' component={SignIn} />
            <Route path='signup' component={SignUp} />
            <Route path='sell' component={SellCards} />
            <Route path='privacy' component={Privacy} />
            <Route path='terms' component={Terms} />
            <Route path='dashboard' component={UserIsAuthenticated(Dashboard)} />
          </Route>
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  } else {
    // No user is signed in.
    ReactDOM.render(
      <Provider store={store}
      >
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Main} />
            <Route path='signin' component={SignIn} />
            <Route path='signup' component={SignUp} />
            <Route path='sell' component={SellCards} />
            <Route path='privacy' component={Privacy} />
            <Route path='terms' component={Terms} />
            <Route path='dashboard' component={UserIsAuthenticated(Dashboard)} />
          </Route>
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  }
})
