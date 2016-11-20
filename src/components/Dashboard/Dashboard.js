import React, { PropTypes } from 'react'
import { style } from 'glamor'
import { connect } from 'react-redux'
import Section from '../common/Section'

const Dashboard = (props) => {
  console.log(props.user)
  return (
    <div>
      <Section css={style({flex: 1})}>
        <h1>Welcome to your dashboard { props.user.displayName || props.user.email }</h1>
      </Section>
    </div>
  )
}

const mapStateToProps = ({auth}) => {
  const { user } = auth
  return {
    user
  }
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {})(Dashboard)
