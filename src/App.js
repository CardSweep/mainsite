import React, { Component } from 'react'
import { style } from 'glamor'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'

const appStyle = style({
  flex: 1
})

class App extends Component {
  render () {
    return (
      <div className={appStyle}>
        <NavBar />
        <Hero />
        <Section />
        <Section />
      </div>
    )
  }
}

export default App
