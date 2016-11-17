import React from 'react'
import { style } from 'glamor'
import HeaderLeft from './HeaderLeft'
import Theme from '../Theme'

const styles = {
  footer: style({
    minHeight: Theme.measures.footerMinHeight,
    backgroundColor: Theme.colors.darkGray,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'column'
  }),
  footerContent: style({
    display: 'flex',
    flexDirection: 'column',
    [Theme.breakPoints.tablet]: {
      flexDirection: 'row'
    }
  }),
  footerColumn: style({
    flex: 1
  })
}
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <HeaderLeft />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>Left</div>
        <div className={styles.footerColumn}>Right</div>
        <div className={styles.footerColumn}>Center</div>
      </div>
    </div>
  )
}

export default Footer
