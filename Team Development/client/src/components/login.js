import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectTo: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/user/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
        if(response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log(error)
      })
  }

  getErrors() {
    axios.get('/login').then(response => {
      console.log(response.data)
      if (response.data.errors) {
        console.log('session errors: ' + response.data.errors)

        this.setState({
          errors: response.data.errors
        })
      } else {
        this.setState({
          errors: null
        })
      }
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    else {
      return (
        <div className='form-box'>
          <h1>Login</h1>
          <form id='login-form' onSubmit={this.handleSubmit}>
            <div className='input-group'>
              <label htmlFor='email'>Email: </label>
              <input type='text' id='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password: </label>
              <input type='password' id='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className='btn-group'>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Login;
