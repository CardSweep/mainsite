import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'
import Main from './components/main/Main'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
let store

if (process.env.REACT_APP_ENV === 'development') {
  store = createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
  store = createStoreWithMiddleware(reducers)
}

ReactDOM.render(
  <Provider store={store}
  >
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='signin' component={SignIn} />
        <Route path='signup' component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
