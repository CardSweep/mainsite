import React from 'react'
import {darkWhite} from 'material-ui/styles/colors';
import { css } from 'glamor'
import { Link } from 'react-router'
import Theme from '../Theme'
import logo from '../images/logo.svg'

// Glamor styles
const img = css({
  height: 30,
  width: 'auto',
  marginRight: 10
})

const wrapper = css({
  color: darkWhite,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  ':hover': {
    color: 'white',
    textDecoration: 'none'
  },
  ':focus': {
    color: 'white',
    textDecoration: 'none'
  }
})

const heading = css({
  fontWeight: Theme.measures.headingWeight,
  fontSize: Theme.measures.headingOneSize,
  display: 'inline',
  margin: 0,
  textDecoration: 'none'
})

// TODO change the div to Routing Link Tag
const LogoName = () => (
  <Link {...wrapper} to='/'>
    <img {...img} src={logo} alt='CardSweep' />
    <h1 {...heading}>CardSweep</h1>
  </Link>
)

export default LogoName
