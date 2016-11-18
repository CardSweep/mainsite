import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: `Authentication Failed: ${action.payload}`,
        password: '',
        loading: false
      }
    case LOGIN_USER:
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}
