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
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

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

  render() {
    return (
      <div>
        <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn} loggedUser={this.state.email} />
        <Route exact path='/' component={Home} />
        <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
        <Route path='/register' component={Register} />
        <Route path='/account' component={AccountDetails} />
        <Route path='/show/:id' component={Show} />
        <Footer />
      </div>
    )
  }
}

export default App;
