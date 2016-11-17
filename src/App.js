import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import NavBar from './components/common/nav/NavBar'
import Footer from './components/common/footer/Footer'

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
