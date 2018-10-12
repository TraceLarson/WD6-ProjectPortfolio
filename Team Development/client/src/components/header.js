import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
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
              <a className="navbar-brand" href="/"><img id="logo1" src="images/Logo1.png" alt='logo1'/><img id="logo2" src="images/gameDROP.png" alt='logo2'/></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/*
              PLACEHOLDER: update with shopping cart
              */}
              <li><Link to="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart</Link></li>
              {/*
              PLACEHOLDER: update with user login
              */}
              <li className="dropdown"><Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> User Management <span class="caret"></span></Link>
                <ul className="dropdown-menu">
                  <li><Link to="#">User Account</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="#">Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
