import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalPrice: 0,
      cartItems: [],
      noItems: false,
      message: ''
    }
  }

  componentDidMount() {
    axios.get('/item/cart/items')
      .then(res => {
        if (res.data.items === null) {
          this.setState({
            noItems: true,
            message: 'The Shopping Cart is Empty'
          })
        }
        else {

          this.setState({
              totalPrice: res.data.totalPrice,
            cartItems: res.data.items
          })
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
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <ul className='list-group'>
              {this.state.cartItems.map (item =>
                <li className='list-group-item'>
                  <span className='badge'>{item.qty}</span>
                  <strong>{item.item.title}</strong>
                  <span className='label label-success'>{item.price}</span>
                  {
                  // <div className='btn-group'>
                  //   <button className='btn btn-primary btn-xs dropdown-toggle' type='button'>Action<span className='caret'></span></button>
                  //   <ul className='dropdown'>
                  //     <li className='dropdown-toggle'><a href='#'>'- 1'</a></li>
                  //     <li className='dropdown-toggle'><a href='#'>'Remove All'</a></li>
                  //   </ul>
                  // </div>
                  }
                  <li className="dropdown">
                    <Link to="#"  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i aria-hidden="true"></i>Edit Qty <span className="caret"></span></Link>
                    <ul className="dropdown-menu">
                          <div className='drop-tab'>
                            <Link to="/subtract"><li className='accnt-link'>- 1</li></Link>
                            <li role="separator" className="divider"></li>
                            <Link to="/removeAll"><li className='accnt-link'>Remove All</li></Link>
                          </div>
                    </ul>
                  </li>
                </li>
              )}
           </ul>
          </div>
          </div>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <strong>Total: {this.state.totalPrice} </strong>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3'>
            <Link to={`/checkout/${this.state.totalPrice ? this.state.totalPrice : '...loading'}`} type='button' className='btn btn-success'>Checkout</Link>
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
