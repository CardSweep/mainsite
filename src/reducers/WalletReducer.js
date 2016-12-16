import {
  WALLET_FETCH,
  WALLET_FETCH_SUCCESS,
  WALLET_SET_RETAILER,
  WALLET_GET_RETAILERS,
  WALLET_GET_RETAILERS_SUCCESS,
  WALLET_GET_RETAILERS_FAIL,
  WALLET_SET_VALUE,
  WALLET_ADD,
  WALLET_REMOVE_FAIL
} from '../actions/types'

const INITIAL_STATE = {
  walletItems: null,
  activeRetailer: null,
  retailers: [],
  value: '',
  error: '',
  loading: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WALLET_FETCH:
      return {
        ...state,
        loading: true
      }
    case WALLET_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        walletItems: action.payload
      }
    case WALLET_SET_RETAILER:
      return {
        ...state,
        activeRetailer: action.payload
      }
    case WALLET_SET_VALUE:
      return {
        ...state,
        value: action.payload
      }
    case WALLET_ADD:
      return {
        ...state,
        value: '',
        activeRetailer: null,
        loading: '',
        error: ''
      }
    case WALLET_REMOVE_FAIL:
      return state
    case WALLET_GET_RETAILERS:
      return {
        ...state,
        loading: true
      }
    case WALLET_GET_RETAILERS_SUCCESS:
      return {
        ...state,
        loading: false,
        retailers: action.payload
      }
    case WALLET_GET_RETAILERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        retailers: []
      }
    default:
      return state
  }
}
