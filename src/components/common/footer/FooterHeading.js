import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../../../Theme'

const styles = {
  wrapper: style({
    position: 'relative'
  }),
  heading: style({
    fontWeight: Theme.measures.headingWeight,
    fontSize: Theme.measures.headingTwoSize,
    paddingBottom: 10
  }),
  // TODO need to figure out a way with CSS to prevent the
  // the border from showing through the nav menu.
  // This is occuring because it is a fixed div over an absolute div
  borderBottom: style({
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '100%',
    width: '10%',
    borderBottom: `2px solid ${Theme.colors.accentColor}`
  })
}

const FooterHeading = (props) => (
  <div className={styles.wrapper}>
    <h2 className={styles.heading}>
      {props.children}
    </h2>
    <div className={styles.borderBottom} />
  </div>
)

FooterHeading.propTypes = {
  children: PropTypes.element
}
export default FooterHeading
