import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import AccountDetails from './components/accountDetails'
import Cart from './components/cart'
import Show from './components/show'
import UserReviews from './components/UserReviews'
import GameRadar from './components/gameRadar'
import Footer from './components/footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      loadCart: false,
      cartItems: [],
      gameRadar: [],
      onRadar: false,
      cartQty: null
    }

    this.getUser = this.getUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updateCartQty = this.updateCartQty.bind(this)
  }

  componentDidMount() {
    this.getUser()

    //get cartQty to update header
    axios.get('/item')
      .then(res => {
        if (res.data.totalQty) {
          this.setState({
            cartQty: res.data.totalQty,
            loadCart: true
          })
        }
      })
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
          email: response.data.user.email,
        })
      } else {
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  updateCartQty(qty) {
    this.setState({
      cartQty: qty.qty,
      loadCart: true
    })
  }

  updateGameRadar = () => {
    axios.get('/user/gameRadar')
      .then(res => {
        if (!res.data.error) {
          console.log('UPDATED RADAR LIST')
          console.log(res.data.items)
          console.log('-------------------')
          this.setState({
            gameRadar: res.data.items
          })
        }
        else {
          console.log(res.data.error)
        }
      })
  }

  checkGameRadar = (id) => {
    console.log('CHECKING USER GAME RADAR FOR ID: ')
    console.log(id)
    axios.get('/user/checkGameRadar/'+id)
      .then(response => {
        if (response.data.onRadar === true) {
          console.log('SETTING STATE TO TRUE')
          this.setState({
            onRadar: true
          })
        }
        else {
          console.log('SETTING STATE TO FALSE')
          this.setState({
            onRadar: false
          })
        }
    })
  }

  render() {
    return (
      <div>
        <Header
          updateUser={this.updateUser}
          updateCartQty={this.updateCartQty}
          loggedIn={this.state.loggedIn}
          loggedUser={this.state.email}
          getCartQty={this.state.cartQty}
          loadCart={this.state.loadCart}
        />
        <Route exact path='/'
          render={() => (
            <Home
              updateCartQty={this.updateCartQty}
            />
        )}/>
        <Route
          path='/login'
          render={() =>
            <Login
              updateUser={this.updateUser}
            />
          }
        />
        <Route path='/register' component={Register} />
        <Route path='/account' component={AccountDetails} />
        <Route
          path='/cart'
          render={() =>
            <Cart
              updateCartQty={this.updateCartQty}
              updateGameRadar={this.updateGameRadar}
              gameRadar={this.state.gameRadar}
              loggedIn={this.state.loggedIn}
            />
          }
        />
        <Route
          path='/show/:id'
          render={({ match }) =>
            <Show
              match={match}
              {...this.props}
              updateCartQty={this.updateCartQty}
              checkGameRadar={this.checkGameRadar}
              loggedIn={this.state.loggedIn}
              onRadar={this.state.onRadar}
            />
          }
        />
        <Route
          path='/gameRadar'
          render={() =>
            <GameRadar
              updateCartQty={this.updateCartQty}
              updateGameRadar={this.updateGameRadar}
              gameRadar={this.state.gameRadar}
            />
          }
        />
        <Route path={'/reviews'} component={UserReviews}/>
        <Footer />
      </div>
    )
  }
}

export default App;
