import React from 'react'
import { style } from 'glamor'
import Hero from '../Hero'
import Section from '../common/Section'

const Main = () => (
  <div>
    <Hero />
    <Section css={style({backgroundColor: '#607D8B'})} />
    <Section css={style({backgroundColor: '#BDBDBD'})} />
  </div>
)

export default Main
