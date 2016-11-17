import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reducers from './reducers'
import App from './App'
import Main from './components/main/Main'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
