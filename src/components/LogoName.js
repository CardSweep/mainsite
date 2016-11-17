import React from 'react'
import { style } from 'glamor'
import Theme from '../Theme'
import logo from '../images/logo.svg'

// Glamor styles
const img = style({
  height: 50,
  width: 50,
  marginRight: 10
})

const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

const heading = style({
  fontWeight: Theme.measures.headingWeight,
  fontSize: Theme.measures.headingOneSize
})

// TODO change the div to Routing Link Tag
const LogoName = () => (
  <div {...wrapper}>
    <img {...img} src={logo} alt='CardSweep' />
    <h1 {...heading}>CardSweep</h1>
  </div>
)

export default LogoName
