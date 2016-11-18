import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import NavBar from './components/common/nav/NavBar'
import Footer from './components/common/footer/Footer'

import firebase from 'firebase'

const styles = {
  appStyle: style({
    height: '100%',
    minHeight: '100%'
  }),
  contentWrapper: style({
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
  })
}

class App extends Component {

  componentWillMount () {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_DATABASEURL,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID
    })
  }

  render () {
    return (
      <div className={styles.appStyle}>
        <NavBar />
        <div className={styles.contentWrapper}>
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
