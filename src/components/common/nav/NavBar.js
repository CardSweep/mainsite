import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logoutUser } from '../../../actions'
import LogoName from '../../LogoName'
import Theme from '../../../Theme'

const styles = {
  imgStyle: style({
    width: 40
  }),
  linkItem: style({
    color: Theme.colors.white,
    cursor: 'pointer'
  })
}

class NavBar extends Component {

  constructor (props) {
    super(props)

    this.getLinks = this.getLinks.bind(this)
  }

  getLinks () {
    let links = (
      <Link className={`nav-link ${styles.linkItem}`} to='/signin'>Sign in</Link>
    )
    if (this.props.user) {
      links = (
        <Link className={`nav-link ${styles.linkItem}`} onClick={this.props.logoutUser}>Sign Out</Link>
      )
    }

    return links
  }

  render () {
    return (
      <nav ref={(nav) => (this.nav = nav)} className={`navbar navbar-fixed-top navbar-dark bg-primary`}>
        <button className='navbar-toggler hidden-lg-up' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' />
        <div className='collapse navbar-toggleable-md' id='navbarResponsive'>
          <div className='navbar-brand' href='#'>
            <LogoName />
          </div>
          <ul className='nav navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Link</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Link</a>
            </li>
            <li className='nav-item float-lg-right'>
              {this.getLinks()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.element,
  className: PropTypes.object,
  left: PropTypes.element,
  user: PropTypes.object,
  logoutUser: PropTypes.func
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth
  return {
    user
  }
}

export default connect(mapStateToProps, {logoutUser})(NavBar)
