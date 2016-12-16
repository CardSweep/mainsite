import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  getWallet,
  getRetailers,
  setRetailer,
  setValue,
  retailerAdd
} from '../../actions'
import Button from '../common/Button'
import Form from '../common/Form'
import Content from '../common/Content'
import WalletTable from './WalletTable'

let Dashboard = class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    this.props.getRetailers()
    this.props.getWallet()
  }

  handleChange (retailer) {
    this.props.setRetailer(retailer[0])
  }

  redeemValue () {
    let returnVal = 0

    if (this.props.activeRetailer && this.props.value) {
      returnVal = this.props.activeRetailer.sellRate * this.props.value
    }
    return <p className='form-control-static mb-0'>${returnVal.toFixed(2)}</p>
  }

  handleFormSubmit (event) {
    event.preventDefault()

    let newWalletItem = {
      ...this.props.activeRetailer,
      currentValue: this.props.value,
      pin: '',
      cardNumber: ''
    }
    // This is a little hacky but needed to clear the typeahead
    this.refs.typeahead.getInstance().clear()
    this.props.retailerAdd(newWalletItem)
  }

  render () {
    return (
      <Content>
        <div>
          <Form onSubmit={this.handleFormSubmit}>
            <div className='row flex-items-xs-middle'>
              <div className='form-group col-md-4 col-xs-12'>
                <label>Find a store</label>
              </div>
              <div className='form-group col-md col-xs-12'>
                <label>Purchase Rate </label>
                <p className='form-control-static mb-0'>{this.props.activeRetailer ? this.props.activeRetailer.sellRate * 100 : 0}%</p>
              </div>
              <div className='col-md col-xs-12'>
                <label>Current Value</label>
                <div className='input-group'>
                  <div className='input-group-addon'>$</div>
                  <input
                    className='form-control'
                    value={this.props.value}
                    onChange={({target}) => this.props.setValue(target.value)}
                  />
                </div>
              </div>
              <div className='form-group col-md col-xs-12'>
                <label>What we give you </label>
                {this.redeemValue()}
              </div>
              <div className='form-group col-md col-xs-12'>
                <Button>Add To Wallet</Button>
              </div>
            </div>
          </Form>
          <WalletTable />
        </div>
      </Content>
    )
  }
}

const mapStateToProps = ({wallet, auth}) => {
  const {walletItems, retailers, activeRetailer, loading, error, value} = wallet
  const {user} = auth
  return {
    walletItems,
    activeRetailer,
    loading,
    error,
    value,
    retailers,
    user
  }
}

Dashboard.propTypes = {
  walletItems: PropTypes.object,
  handleSubmit: PropTypes.func,
  getWallet: PropTypes.func,
  retailerAdd: PropTypes.func,
  retailerRemove: PropTypes.func,
  setValue: PropTypes.func,
  value: PropTypes.string,
  activeRetailer: PropTypes.object,
  setRetailer: PropTypes.func,
  getRetailers: PropTypes.func,
  retailers: PropTypes.array,
  user: PropTypes.object
}

export default connect(mapStateToProps, {
  getWallet,
  getRetailers,
  setRetailer,
  setValue,
  retailerAdd
})(Dashboard)
