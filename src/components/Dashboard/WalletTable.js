import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/common/Button'
import {
  retailerRemove,
  editCardValue,
  editCardPin,
  getValue
} from '../../actions'

class WalletTable extends Component {
  constructor (props) {
    super(props)

    this.getRows = this.getRows.bind(this)
  }
  getRows () {
    const { walletItems } = this.props
    let rows
    // Check if the wallet is empty if it is return a blank row
    if (!walletItems) {
      rows = (
        <tr>
          <td>No Cards Added</td>
        </tr>
      )
      return rows
    }
    // Get Wallet items

    rows = Object.keys(walletItems).map((key, index) => {
      let currentItem = this.props.walletItems[key]
      const sellValue = (currentItem.sellRate * currentItem.currentValue).toFixed(2)
      return (
        <tr key={index}>
          <td>{currentItem.name}</td>
          <td>{currentItem.sellRate * 100}%</td>
          <td>${currentItem.currentValue}</td>
          <td>
            <input
              type='text'
              className='form-control'
              value={this.props.walletItems[key]['cardNumber']}
              onChange={(e) => this.props.editCardValue(key, e.target.value)}
              name='card number' />
          </td>
          <td>
            <input
              type='text'
              className='form-control'
              value={this.props.walletItems[key]['pin']}
              onChange={(e) => this.props.editCardPin(key, e.target.value)}
              name='card pin' />
          </td>
          <td>${sellValue}</td>
          <td><Button className='btn-outline-danger' onClick={() => this.props.retailerRemove(key)}>X</Button></td>
          <td><Button className='btn-outline-success' onClick={() => this.props.getValue(currentItem._id, key, currentItem.cardNumber, currentItem.pin)}>✔️</Button></td>
        </tr>
      )
    })

    return rows
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Retailer</th>
            <th>Purchase Rate</th>
            <th>CurrentValue</th>
            <th>Card Number</th>
            <th>Pin</th>
            <th>Sell Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    )
  }
}

WalletTable.propTypes = {
  walletItems: PropTypes.object,
  user: PropTypes.object,
  retailerRemove: PropTypes.func,
  editCardValue: PropTypes.func,
  editCardPin: PropTypes.func,
  getValue: PropTypes.func
}

const mapStateToProps = ({wallet, auth}) => {
  return {
    walletItems: wallet.walletItems,
    user: auth.user
  }
}

export default connect(mapStateToProps, { retailerRemove, editCardValue, editCardPin, getValue })(WalletTable)
