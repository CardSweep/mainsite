import React from 'react'
import { style } from 'glamor'
import { Link } from 'react-router'
import Theme from '../Theme'
import logo from '../images/logo.svg'

// Glamor styles
const img = style({
  height: 30,
  width: 'auto',
  marginRight: 10,
  marginTop: -5
})

const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white'
})

const heading = style({
  fontWeight: Theme.measures.headingWeight,
  fontSize: Theme.measures.headingOneSize
})

// TODO change the div to Routing Link Tag
const LogoName = () => (
  <Link {...wrapper} to='/'>
    <img {...img} src={logo} alt='CardSweep' />
    <h1 {...heading}>CardSweep</h1>
  </Link>
)

export default LogoName
