import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { blue500, blue700, blue100, yellow500, grey400, grey600 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { style } from 'glamor'
import NavBar from './components/common/nav/NavBar'
import Footer from './components/common/footer/Footer'

const styles = {
  appStyle: style({
    height: '100%',
    minHeight: '100%'
  }),
  contentWrapper: style({
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  })
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue100,
    accent1Color: yellow500,
    accent2Color: grey400,
    accent3Color: grey600,
  },
});

class App extends Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.appStyle}>
          <NavBar />
          <div className={styles.contentWrapper}>
            {this.props.children}
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
