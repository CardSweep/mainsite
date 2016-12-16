import React from 'react'
import { style } from 'glamor'
import Hero from '../Hero'
import Section from '../common/Section'
import cardImg from '../../images/cards.png'

import Theme from '../../Theme'

const jumboStyle = style({
  backgroundColor: 'rgba(0,0,0,.27)',
  color: 'white',
  height: '100%',
  width: '100%',
  display: 'flex',
  borderRadius: 0,
  marginBottom: 0,
  justifyContent: 'center',
  alignItems: 'center'
})
const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const propContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
})

const propStyle = style({
  textAlign: 'center',
  maxWidth: '33.33%',
  padding: '1rem',
  color: 'white'
})
const spacer = style({
  width: '10%'
})

const guaranteeStyle = style({
  paddingTop: '3rem',
  paddingBottom: '3rem',
  paddingLeft: '5rem',
  paddingRight: '5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
})

const helpBar = style({
  color: 'white',
  width: '100%',
  backgroundColor: Theme.colors.primaryColor,
  paddingLeft: '5rem',
  paddingRight: '5rem',
  paddingTop: '1rem',
  paddingBottom: '.2rem'
})

const Main = () => (
  <div>
    <Hero>
      <div {...jumboStyle} className='jumbotron'>
        <div {...containerStyle} className='container'>
          <h1>Welcome to the CardSweep!</h1>
          <h2>Buy and Sell gift cards with ease.</h2>
        </div>
      </div>
    </Hero>
    <Section css={style({backgroundColor: '#607D8B'})}>
      <div {...propContainerStyle} className='container'>
        <div {...propStyle} className='prop left'>
          <h3>Sell Gift Cards</h3>
          <img src={cardImg} alt='Sell' />
          <h4>Not swiping? Sweep it!</h4>
          <p>
            Selling gift cards is a fast and easy (is a snap) with our secure
            online process. Cash in your unwanted gift cards and get up to 92% of
            the card’s value. No mailing required. (LINK)
          </p>
          <ul>
            <li>Secure Online Process</li>
            <li>Sell Gift Cards of Any Value</li>
            <li>Fast Turn Around Time</li>
          </ul>
        </div>
        <div {...spacer} />
        <div {...propStyle} className='prop right'>
          <h3>Buy Gift Cards</h3>
          <img src={cardImg} alt='Buy' />
          <h4>Buying discount gift cards? Welcome!</h4>
          <p>
            Buying gift cards is fast and easy with our online discount store.
            Get the extra savings you crave and become a master of frugality.
            (LINK)
          </p>
          <ul>
            <li>Secure Online Process</li>
            <li>Discounts up to 35% off</li>
            <li>FREE SHIPPING</li>
          </ul>
        </div>
      </div>
    </Section>
    <section {...guaranteeStyle}>
      <div>
        <img src={cardImg} alt='Guarantee' />
      </div>
      <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3>100 Day Guarantee</h3>
        <p>
          When you purchase any discounted gift card from CardSweep, we guarantee it’s validity and balance.
           We’re passionate about giving you the satisfaction and peace of mind you deserve.
        </p>
        <p>
          Our gift card marketplace is updated frequently to provide you the best value.
        </p>
      </div>
    </section>
    <div {...helpBar}>
      <p style={{ marginBottom: 0 }}>NEED HELP? WE’RE HERE TO SUPPORT YOU.</p>
      <p style={{ marginTop: 0 }}>Call 1-800-000-0000 or email us.</p>
    </div>
  </div>
)

export default Main
