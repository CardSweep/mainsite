import React from 'react';
import { style } from 'glamor';
import logo from '../images/logo.svg';

// Glamor styles
const logoStyle = style({
  height: 50,
  width: 50,
  marginRight: 10
});

const HeaderLeft = () => (
  <div><img src={logo} className={logoStyle} alt='CardSweep' />CardSweep</div>
);

export default HeaderLeft;
