import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import HeaderLeft from './HeaderLeft'
import SideMenu from './SideMenu'
import Theme from '../Theme'
import menuIcon from '../images/menuIcon.svg'

const navBarStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  height: Theme.measures.navBarHeight,
  minHeight: Theme.measures.navBarHeight,
  width: '100%',
  backgroundColor: Theme.colors.primaryColor,
  color: Theme.colors.textIcons,
  borderBottom: `solid ${Theme.measures.navBarBorderBottom}px ${Theme.colors.darkPrimaryColor}`,
  boxShadow: `0px 3px 3px 0px ${Theme.colors.shadowColor}`,
  transition: `top ${Theme.measures.transitionSpeedEase}`
})

const buttonStyle = style({
  backgroundColor: 'rgba(255,255,255,0)',
  border: 'none',
  outline: 'none',
  height: Theme.measures.navBarHeight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 75
})

const imgStyle = style({
  width: 40
})

const navBarHidden = style({
  top: -100
})

class NavBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      height: 0,
      lastScroll: 0,
      showMenu: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }

  handleScroll () {
    let body = document.querySelector('body')
    let scroll = body.scrollTop

    if (scroll > this.state.lastScroll && scroll > 300 && !this.state.showMenu) {
      this.nav.className = `${navBarStyle} ${navBarHidden}`
    } else {
      this.nav.className = navBarStyle
    }

    this.setState({
      lastScroll: scroll
    })
  }

  showMenu () {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  componentDidMount () {
    let body = document.querySelector('body')

    this.setState({
      height: body.innerHeight
    })

    body.onscroll = this.handleScroll
  }

  render () {
    let className = navBarStyle

    if (this.props.className !== undefined) {
      className += this.props.className
    }

    return (
      <nav
        ref={(nav) => (this.nav = nav)}
        className={className}
      >
        <button onClick={this.showMenu} {...buttonStyle}>
          <img className={imgStyle} src={menuIcon} alt='Menu' />
        </button>
        <HeaderLeft />
        {this.props.children}
        <SideMenu show={this.state.showMenu} showMenu={this.showMenu} />
      </nav>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.element,
  className: PropTypes.object,
  left: PropTypes.element
}

export default NavBar
