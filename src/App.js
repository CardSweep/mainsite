import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
    primary1Color: '#2196F3',
    primary2Color: '#1976D2',
    primary3Color: '#BBDEFB',
    accent1Color: '#FFEB3B',
    accent2Color: '#BDBDBD',
    accent3Color: '#757575',
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
