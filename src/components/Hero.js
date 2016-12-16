import React, { PropTypes } from 'react'
import { style } from 'glamor'
import background from '../images/shopping.jpg'

const heroStyle = style({
  height: 500,
  width: '100%',
  backgroundColor: '#C8E6C9',
  background: `url(${background})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Hero = (props) => (
  <div className={heroStyle}>
    {props.children}
  </div>
)

Hero.propTypes = {
  children: PropTypes.element
}

export default Hero
