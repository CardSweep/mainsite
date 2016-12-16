import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import AutoComplete from 'material-ui/AutoComplete'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {GridList, GridTile} from 'material-ui/GridList'
import Content from '../common/Content'
import H1 from '../common/H1'
import {
  getRetailers
} from '../../actions'


const styles = {
  wrapper: {
    minHeight: '90%',
    paddingTop: 30
  },
  form: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 20
  })
}
class SellCards extends Component {
  constructor() {
    super()
    this.state = {
      dialog: false,
      modalItem: {},
      activeRetailer: {},
      amount: '',
      wallet: [],
      value: ''
    }

    this.getWallet = this.getWallet.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRetailer = this.setRetailer.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentWillMount () {
    this.props.getRetailers()
  }

  setRetailer (retailer) {
    this.setState({
      retailer
    });
  }

  handleOpen = (id) => {
    let modalItem = {}

    this.state.wallet.forEach((item) => {
      if (item.retailer._id === id) {
        modalItem = item;
      }
    })

    this.setState({
      dialog: true,
      modalItem
    });
  };

  handleClose = () => {
    this.setState({
      dialog: false,
      modalItem: {}
    });
  };

  getWallet () {
    if(this.state.wallet.length === 0) {
      return (
        <div></div>
      )
    }
    return (
      <GridList
        cols={4}
        cellHeight={180}
        padding={10}
        style={styles.gridList}
      >
      {
        this.state.wallet.map((item) => {
          const { _id, name, sellRate } = item.retailer
          const { value } = item
          const offer = (value*sellRate).toFixed(2)
          return (
            <GridTile
              onClick={() => this.handleOpen(_id)}
              style={{ borderRadius: 8, position: 'relative' }}
              key={_id}
              title={<div style={{display: 'flex', marginRight: 16}}>Value: ${value}<span style={{flex: 1}}/>Offer: ${offer}</div>}
            >
              <img src={`http://gcmgr-staging.cardquiry.com/assets/images/retailers/${_id}.jpg`} alt={name}/>
            </GridTile>
          )
        })
      }
      </GridList>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.activeRetailer.length === 0 || this.state.value === '') {
      // Should apply error state here
      return
    }

    const newItem = {
      retailer: this.state.retailer,
      value: this.state.value,
      cardNumber: null,
      pin: null
    }

    this.state.wallet.push(newItem)
    this.setState({
      value: '',
      retailer: {}
    })
  }

  render () {
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div style={styles.wrapper}>
        <Content>
          <H1 text='Sell Gift Cards' />
          <Divider />
        </Content>
        <Content>
          <form {...styles.form} onSubmit={this.handleSubmit}>
            <AutoComplete
              floatingLabelText='Retailer'
              filter={AutoComplete.fuzzyFilter}
              dataSource={this.props.retailers}
              dataSourceConfig={{ text: 'name', value: '_id' }}
              maxSearchResults={5}
              onNewRequest={this.setRetailer}
              hintText='e.g. Best Buy'
            />
            <TextField
              floatingLabelText='Balance'
              hintText='$100.00'
              value={this.state.value}
              type='currency'
              onChange={(evt) => this.setState({ value: evt.target.value })}
            />
            <RaisedButton type="submit" value="Submit" label="Get Offer" primary={true} />
          </form>
          <Divider />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Paper style={{flex: 3}} zDepth={1} children={this.getWallet()} />
          </div>
        </Content>
        <Dialog
          title='Update Your Card'
          actions={modalActions}
          modal={false}
          open={this.state.dialog}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText='Balance'
            hintText='$100.00'
            value={this.state.modalItemvalue || ''}
            type='currency'
            onChange={(evt) => {}}
          />
          <TextField
            floatingLabelText='CardNumber'
            hintText='$100.00'
            value={this.state.modalItem.cardNumber || ''}
            type='currency'
            onChange={(evt) => {}}
          />
          <TextField
            floatingLabelText='Pin'
            hintText='$100.00'
            value={this.state.modalItem.Pin || ''}
            type='currency'
            onChange={(evt) => {}}
          />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({wallet, auth}) => {
  const { retailers } = wallet
  return {
    retailers
  }
}

export default connect(mapStateToProps, { getRetailers })(SellCards)
