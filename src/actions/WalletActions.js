import firebase from 'firebase'
import axios from 'axios'

import {
  WALLET_FETCH,
  WALLET_FETCH_SUCCESS,
  WALLET_GET_RETAILERS,
  WALLET_GET_RETAILERS_SUCCESS,
  WALLET_GET_RETAILERS_FAIL,
  WALLET_SET_RETAILER,
  WALLET_SET_VALUE,
  WALLET_ADD,
  WALLET_REMOVE,
  WALLET_REMOVE_FAIL
} from './types'

export const getWallet = () => {
  const {currentUser} = firebase.auth()

  return (dispatch) => {
    dispatch({
      type: WALLET_FETCH
    })

    firebase.database().ref(`/users/${currentUser.uid}/wallet`)
      .on('value', snapshot => {
        dispatch({
          type: WALLET_FETCH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}

export const getRetailers = () => {
  // Config for axios request
  const config = {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_CARDQUIRY_TOKEN}`
    }
  }

  return (dispatch) => {
    dispatch({ type: WALLET_GET_RETAILERS })

    axios.get(process.env.REACT_APP_CARDQUIRY_URL + '/retailers', config)
    .then((res) => {
      dispatch({
        type: WALLET_GET_RETAILERS_SUCCESS,
        payload: res.data.retailers
      })
    })
    .catch((error) => {
      dispatch({
        type: WALLET_GET_RETAILERS_FAIL,
        payload: error.message
      })
    })
  }
}

export const setRetailer = (retailer) => {
  return {
    type: WALLET_SET_RETAILER,
    payload: retailer
  }
}

export const setValue = (value) => {
  return {
    type: WALLET_SET_VALUE,
    payload: value
  }
}

export const retailerAdd = (retailer) => {
  const {currentUser} = firebase.auth()

  return (dispatch) => {
    const ref = firebase.database().ref(`/users/${currentUser.uid}/wallet`)
    ref.push({ ...retailer })
    .then(() => {
      dispatch({ type: WALLET_ADD })
    })
  }
}

export const retailerRemove = (cardId) => {
  const {currentUser} = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/wallet/${cardId}`).remove()
    .then(() => {
      dispatch({ type: WALLET_REMOVE })
    })
    .catch(() => {
      dispatch({ type: WALLET_REMOVE_FAIL })
    })
  }
}

export const editCardValue = (itemId, newAmount) => {
  const {currentUser} = firebase.auth()
  return (dipatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/wallet/${itemId}`)
    .update({cardNumber: newAmount})
  }
}

export const editCardPin = (itemId, newPin) => {
  const {currentUser} = firebase.auth()
  return (dipatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/wallet/${itemId}`)
    .update({pin: newPin})
  }
}

export const getValue = (retailerId, itemId, cardnumber, pin) => {
  // TODO add api call to get value then update the items value
  console.log(retailerId, itemId, cardnumber, pin)

  // Config for axios request
  const config = {
    method: 'post',
    url: process.env.REACT_APP_CARDQUIRY_URL + '/bi',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_CARDQUIRY_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: {
      'number': cardnumber,
      'pin': pin,
      'retailer': retailerId
    }
  }

  return (dispatch) => {
    axios(config)
    .then((res) => {
      if (res.data.balance === 'Null') {
        // TODO change this to a nice modal!
        window.alert('Balance checking is not available right now sorry.')
        return
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
