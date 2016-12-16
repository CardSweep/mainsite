import React from 'react'
import { css } from 'glamor'
import {grey700, darkWhite} from 'material-ui/styles/colors';
import LogoName from '../../LogoName'
import Content from '../Content'
import FooterHeading from './FooterHeading'
import Link from '../Link'
import Theme from '../../../Theme'

const styles = {
  footer: css({
    backgroundColor: grey700,
    color: darkWhite,
    paddingTop: 30,
    paddingBottom: 30
  }),
  footerContent: css({
    marginTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    [Theme.breakPoints.tablet]: {
      flexDirection: 'row'
    }
  }),
  footerColumn: css({
    flex: 1
  }),
  smallStyle: css({
    display: 'flex',
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: 100,
  }),
  footerLink: css({
    color: darkWhite,
    textDecoration: 'none'
  }),
  footerListItem: css({
     marginTop: 10
  }),
  bottomRow: css({
    marginTop: 10
  })
}
const Footer = () => {
  return (
    <div {...styles.footer}>
      <Content>
        <div>
          <LogoName />
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <FooterHeading>Company</FooterHeading>
            <ul>
              <li {...styles.footerListItem}>About</li>
              <li {...styles.footerListItem}>Contact</li>
              <li {...styles.footerListItem}>Terms of Service</li>
              <li {...styles.footerListItem}>Privacy Policy</li>
              <li {...styles.footerListItem}>100 day guarantee</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <FooterHeading>Knowledge</FooterHeading>
          </div>
          <div className={styles.footerColumn}>
            <FooterHeading>Legal</FooterHeading>
          </div>
        </div>
        <div {...styles.bottomRow}>
          <div className={styles.smallStyle}>
            <Link to='/terms'><p {...styles.footerLink}>Terms of Service</p></Link>
            <p>&nbsp;&amp;&nbsp;</p>
            <Link to='/privacy'><p {...styles.footerLink}>Privacy Policy</p></Link>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Footer
