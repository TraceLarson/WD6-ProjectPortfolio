import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {

  constructor() {
    super()
    this.state = {
      cartQty: null,
    }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    console.log(this.props.loadCart) 
    this.setState({
      cartQty: this.props.getCartQty
    })
  }

  logout(event) {
    event.preventDefault()
    axios.post('/user/logout').then(response => {
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          email: null,
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }

  render(){
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><img id="logo1" src="/images/Logo1.png" alt='logo1'/><img id="logo2" src="/images/gameDROP.png" alt='logo2'/></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/cart' id="cart-link">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart
                  {this.props.loadCart ? (
                      <span className='badge'> {this.props.getCartQty} </span>
                  ) : (
                    <span></span>
                  )}
                </Link>
              </li>
              <li className="dropdown">
              {this.props.loggedIn ? (
                <Link to="#" id="accnt-toggle" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" aria-hidden="true"></i> {this.props.loggedUser} <span className="caret"></span></Link>
              ) : (
                <Link to="#" id="accnt-toggle" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" aria-hidden="true"></i> Your Account <span className="caret"></span></Link>
              )}
                <ul className="dropdown-menu">
                  {this.props.loggedIn ? (
                      <div className='drop-tab'>
                        <Link to="/account"><li className='accnt-link'>Account Details</li></Link>
                        <li role="separator" className="divider"></li>
                        <Link to="/" onClick={this.logout}><li className='accnt-link'>Logout</li></Link>
                      </div>
                    ) : (
                      <div className='drop-tab'>
                        <Link to="/register"><li className='accnt-link'>Register</li></Link>
                        <li role="separator" className="divider"></li>
                        <Link to="/login"><li className='accnt-link'>Login</li></Link>
                      </div>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
