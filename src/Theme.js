const Theme = {
  colors: {
    darkPrimaryColor: '#388E3C',
    primaryColor: '#4CAF50',
    lightPrimaryColor: '#C8E6C9',
    textIcons: '#FFFFFF',
    accentColor: '#FF9800',
    danger: 'red',
    warning: 'orange',
    darkGray: '#455A64',
    primaryGray: '#607D8B',
    primaryText: '#212121',
    secondaryText: '#757575',
    inverseText: '#BDBDBD',
    dividerColor: '#BDBDBD',
    shadowColor: `rgba(50, 50, 50, 0.1)`
  },
  measures: {
    headingOneSize: 28,
    headingTwoSize: 18,
    headingWeight: 100,
    fontSmall: 14,
    linkWeight: 100,
    navBarHeight: 64,
    navBarBorderBottom: 3,
    footerMinHeight: 150,
    transitionSpeedEase: '0.3s ease',
    buttonWidth: 120,
    buttonHeight: 45,
    buttonBorderRadius: 2,
    buttonInputFontSize: 28,
    inputGroupMargin: 20
  },
  breakPoints: {
    tablet: '@media(min-width: 700px)',
    desktop: '@media(min-width: 900px)'
  }
}

export default Theme
