import React from 'react'
import { style } from 'glamor'

const heroStyle = style({
  height: 500,
  width: '100%',
  backgroundColor: '#C8E6C9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const headingStyle = style({
  color: '#505D72',
  fontWeight: 300
})

const Hero = () => (
  <div className={heroStyle}>
    <h2 className={headingStyle}>CardSweep is coming soon ...</h2>
  </div>
)

export default Hero
