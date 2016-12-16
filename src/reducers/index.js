import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import AuthReducer from './AuthReducer'
import WalletReducer from './WalletReducer'

const rootReducer = combineReducers({
  form,
  routing,
  auth: AuthReducer,
  wallet: WalletReducer
})

export default rootReducer
