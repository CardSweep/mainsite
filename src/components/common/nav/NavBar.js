import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import LogoName from '../../LogoName'
import SideMenu from './SideMenu'
import Link from '../Link'
import Theme from '../../../Theme'
import menuIcon from '../../../images/menuIcon.svg'

const styles = {
  navBarStyle: style({
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
  }),
  buttonStyle: style({
    backgroundColor: 'rgba(255,255,255,0)',
    border: 'none',
    outline: 'none',
    height: Theme.measures.navBarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75
  }),
  imgStyle: style({
    width: 40
  }),
  navBarHidden: style({
    top: -100
  }),
  linkWrapper: style({
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 20
  }),
  linkItem: style({
    color: 'white',
    marginLeft: 10
  })
}

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
      this.nav.className = `${styles.navBarStyle} ${styles.navBarHidden}`
    } else {
      this.nav.className = styles.navBarStyle
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
    let className = styles.navBarStyle

    if (this.props.className !== undefined) {
      className += this.props.className
    }

    return (
      <nav
        ref={(nav) => (this.nav = nav)}
        className={className}
      >
        <button onClick={this.showMenu} {...styles.buttonStyle}>
          <img className={styles.imgStyle} src={menuIcon} alt='Menu' />
        </button>
        <LogoName />
        <div {...style({flex: 1})} />
        <div className={styles.linkWrapper}>
          <Link to='/signin'><p className={styles.linkItem}>Sign in</p></Link>
          <Link to='/signup'><p className={styles.linkItem}>Sign up</p></Link>
        </div>
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