import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import { connect } from 'react-redux'

class FormError extends Component {

  constructor (props) {
    super(props)

    this.getError = this.getError.bind(this)
  }

  getError () {
    if (this.props.error) {
      return (
        <p>{this.props.error}</p>
      )
    }
  }

  render () {
    return (
      <div {...style({ color: 'red', paddingLeft: 30 })}>
        {this.getError()}
      </div>
    )
  }
}

FormError.propTypes = {
  error: PropTypes.string
}

const mapStateToProps = ({ auth }) => {
  const { error } = auth
  return {
    error
  }
}

export default connect(mapStateToProps, {})(FormError)
