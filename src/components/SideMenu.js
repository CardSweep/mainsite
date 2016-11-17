import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../Theme'

const styles = {
  sideMenu: style({
    position: 'fixed',
    left: '-101%',
    top: Theme.measures.navBarHeight + Theme.measures.navBarBorderBottom,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: `3px 3px 3px 0px ${Theme.colors.shadowColor}`,
    transition: `left ${Theme.measures.transitionSpeedEase}`,
    [Theme.breakPoints.tablet]: {
      left: '-41%',
      width: '40%'
    },
    [Theme.breakPoints.desktop]: {
      left: '-26%',
      width: '25%'
    }
  }),
  sideMenuShow: style({
    left: 0
  })
}

const SideMenu = (props) => {
  let sideMenuStyle = styles.sideMenu

  if (props.show) {
    sideMenuStyle += ` ${styles.sideMenuShow}`
  }
  return (
    <div className={sideMenuStyle}>
      Some Content
    </div>
  )
}

SideMenu.propTypes = {
  show: PropTypes.bool
}

export default SideMenu
