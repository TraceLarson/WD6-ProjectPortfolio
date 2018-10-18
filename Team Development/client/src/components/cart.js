import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalPrice: null,
      noItems: true,
      message: 'The Shopping Cart is Empty'
    }
  }

  componentDidMount() {
    axios.get('/item/cart/items')
      .then(res => {
        if (res.data.items.length <= 0) {
          this.setState({
            noItems: true,
          })
        }
        else {
          this.setState({
            noItems: false,
            cartItems: res.data.items,
            totalPrice: res.data.totalPrice
          })
        }
      })
  }

  reduceItem = (id) => {
    axios.get('/item/reduce/'+id)
      .then(res => {
        if (res.data.items === null) {
          this.setState({
            noItems: true,
          })
        }
        else {
          this.setState({
            cartItems: res.data.items,
            totalPrice: res.data.totalPrice
          })
          this.props.updateCartQty({
            qty: res.data.totalQty
          })
          if (res.data.items.length <= 0) {
            this.setState({
              noItems: true
            })
          }
        }
      })
  }

  removeItem = (id) => {
    axios.get('/item/removeItem/'+id)
      .then(res => {
        console.log(res.data.items)
        if (res.data.items === null) {
          this.setState({
            noItems: true,
          })
        }
        else {
          this.setState({
            cartItems: res.data.items,
            totalPrice: res.data.totalPrice
          })
          this.props.updateCartQty({
            qty: res.data.totalQty
          })
          if (res.data.items.length <= 0) {
            this.setState({
              noItems: true
            })
          }
        }
      })
  }

  renderEmptyCart() {
    return (
      <div className='no-items'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <h2> {this.state.message} </h2>
          </div>
        </div>
      </div>
    )
  }

  renderCartItems() {
    return (
      <div className='cart-items'>
        <h1>Shopping Cart</h1>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <ul className='list-group'>
              {this.state.cartItems.map (item =>
                <li id='cart-item' className='list-group-item'>
                  <span className='badge'>{item.qty}</span>
                  <img src={item.item.imagePath} alt='item' id='cart-image'/>
                  <strong id='cart-title'>{item.item.title} </strong>
                  <span id='cart-price' className='label label-success'>${item.price}</span>
                  <li id='cart-dropdown' className='dropdown'>
                    <Link to="#" id='cart-update' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i aria-hidden="true"></i>Update Qty <span className="caret"></span></Link>
                    <ul className="dropdown-menu">
                          <div className='drop-tab'>
                            <li className='reduce' onClick={() => this.reduceItem(item.item._id)}>- 1</li>
                            <li role="separator" className="divider"></li>
                            <li className='remove' onClick={() => this.removeItem(item.item._id)}>Remove All</li>
                          </div>
                    </ul>
                  </li>
                </li>
              )}
           </ul>
           <div id='cart-total'>
             <strong>Total: ${this.state.totalPrice} </strong>
           </div>
          </div>
        </div>
        <div className='row'>
          <div id='checkout' className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <button id='checkOut-btn' type='button' className='btn btn-success'>Checkout</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
      if (this.state.noItems) {
        return this.renderEmptyCart()
      }
      else {
        return this.renderCartItems()
      }
  }
}

export default Cart
