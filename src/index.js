import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'
import Main from './components/main/Main'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
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

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user, // how to get the user state
  failureRedirectPath: '/signin',
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

ReactDOM.render(
  <Provider store={store}
  >
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='signin' component={SignIn} />
        <Route path='signup' component={SignUp} />
        <Route path='dashboard' component={UserIsAuthenticated(Dashboard)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
