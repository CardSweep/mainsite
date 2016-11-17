import React from 'react'
import { style } from 'glamor'
import LogoName from '../../LogoName'
import FooterHeading from './FooterHeading'
import Link from '../Link'
import Theme from '../../../Theme'

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
  }),
  paraStyle: style({
    fontSize: 10,
    fontWeight: 100
  })
}
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <LogoName />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <FooterHeading>Our Mission</FooterHeading>
        </div>
        <div className={styles.footerColumn}>
          <FooterHeading>Site Map</FooterHeading>
        </div>
        <div className={styles.footerColumn}>
          <FooterHeading>Contact Us</FooterHeading>
        </div>
      </div>
      <div>
        <p className={styles.paraStyle}>
          <Link url="#">Terms of Service</Link>
           &nbsp;&amp;&nbsp;
          <Link url="#">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
