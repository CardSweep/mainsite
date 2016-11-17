import React, { PropTypes } from 'react'
import { style } from 'glamor'
import Theme from '../Theme'

const sideMenu = style({
  position: 'fixed',
  left: '-26%',
  top: Theme.measures.navBarHeight + Theme.measures.navBarBorderBottom,
  height: '100%',
  width: '25%',
  backgroundColor: 'white',
  boxShadow: `3px 3px 3px 0px ${Theme.colors.shadowColor}`,
  transition: `left ${Theme.measures.transitionSpeedEase}`
})

const sideMenuShow = style({
  left: 0
})

const SideMenu = (props) => {
  let sideMenuStyle = sideMenu

  if (props.show) {
    sideMenuStyle += ` ${sideMenuShow}`
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
