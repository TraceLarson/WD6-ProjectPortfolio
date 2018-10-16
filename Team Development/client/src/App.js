import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import AccountDetails from './components/accountDetails'
import Show from './components/show'
import Footer from './components/footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      cartQty: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updateCartQty = this.updateCartQty.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        //Set state if user session exists
        this.setState({
          loggedIn: true,
          email: response.data.user.email
        })
      } else {
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  //Update state to send to header component
  updateCartQty(qty) {
    this.setState({
      cartQty: qty.qty
    })
  }

  render() {
    return (
      <div>
        <Header updateUser={this.updateUser} updateCartQty={this.updateCartQty} loggedIn={this.state.loggedIn} loggedUser={this.state.email} getCartQty={this.state.cartQty}/>
        <Route exact path='/'
          render={() => (
            <Home
              updateCartQty={this.updateCartQty}
            />
        )}/>
        <Route exact path='/' component={Home}  updateCartQty={this.updateCartQty}/>
        <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />
          }
        />
        <Route path='/register' component={Register} />
        <Route path='/account' component={AccountDetails} />
        <Route
          path='/show/:id'
          render={({ match }) =>
            <Show
              match={match}
              {...this.props}
              updateCartQty={this.updateCartQty}
            />
          }
        />
        <Footer />
      </div>
    )
  }
}

export default App;
