import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { logoutUser } from '../../../actions'
import LogoName from '../../LogoName'

class NavBar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.goToSignIn = this.goToSignIn.bind(this)
    this.getLinks = this.getLinks.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  goToSignIn () {
    browserHistory.push('/signin')
  }

  getLinks () {
    let links = (
      <FlatButton onClick={this.goToSignIn} label='Sign In' />
    )
    if (this.props.user) {
      links = (
        <FlatButton onClick={this.props.logoutUser} label='Sign Out' />
      )
    }

    return links
  }

  handleTouchTap() {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    return (
      <div>
        <AppBar
          style={{zIndex: 1301}}
          title={<LogoName />}
          onLeftIconButtonTouchTap={this.handleTouchTap}
          iconElementRight={this.getLinks()}
        />
        <Drawer containerStyle={{paddingTop: 75}} open={this.state.open}>
          <MenuItem onClick={this.handleTouchTap}><Link to=''>Buy Gift Cards</Link></MenuItem>
          <MenuItem onClick={this.handleTouchTap}><Link to='/sell'>Sell Gift Cards</Link></MenuItem>
        </Drawer>
      </div>
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
