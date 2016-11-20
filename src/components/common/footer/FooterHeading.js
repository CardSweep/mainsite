import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../../../Theme'

const styles = {
  heading: style({
    fontWeight: Theme.measures.headingWeight,
    fontSize: Theme.measures.headingTwoSize,
    paddingBottom: 10
  })
}

const FooterHeading = (props) => (
  <h2 className={styles.heading}>
    {props.children}
  </h2>
)

FooterHeading.propTypes = {
  children: PropTypes.string.isRequired
}
export default FooterHeading
