import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          email: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }

  render(){
    const loggedIn = this.props.loggedIn
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
              <a className="navbar-brand" href="/"><img id="logo1" src="images/Logo1.png" alt='logo1'/><img id="logo2" src="images/gameDROP.png" alt='logo2'/></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/*
              PLACEHOLDER BELOW: update with shopping cart
              */}
              <li><Link to="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart</Link></li>
              <li className="dropdown">
              {loggedIn ? (
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> {this.props.loggedUser} <span class="caret"></span></Link>
              ) : (
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> Your Account <span class="caret"></span></Link>
              )}
                <ul className="dropdown-menu">
                  {loggedIn ? (
                      <div className='drop-tab'>
                        <li><Link to="#">Account Details</Link></li>
                        <li role="separator" className="divider"></li>
                        <li><Link to="#" onClick={this.logout}>Logout</Link></li>
                      </div>
                    ) : (
                      <div className='drop-tab'>
                        <li><Link to="/register">Register</Link></li>
                        <li role="separator" className="divider"></li>
                        <li><Link to="/login">Login</Link></li>
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
