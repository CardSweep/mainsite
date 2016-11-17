import React, { Component } from 'react'
import { style } from 'glamor'
import NavBar from './components/common/nav/NavBar'
import Hero from './components/Hero'
import Section from './components/common/Section'
import Footer from './components/common/footer/Footer'

import 'glamor/reset'

const styles = {
  appStyle: style({
    flex: 1
  }),
}

class App extends Component {
  render () {
    return (
      <div className={styles.appStyle}>
        <NavBar />
        <Hero />
        <Section css={style({backgroundColor: '#607D8B'})} />
        <Section css={style({backgroundColor: '#BDBDBD'})} />
        <Footer />
      </div>
    )
  }
}

export default App
