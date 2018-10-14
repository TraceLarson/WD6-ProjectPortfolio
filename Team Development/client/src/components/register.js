import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {

  constructor(props) {
    super()
    this.state = {
      email: '',
      password: '',
      redirectTo: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/user/', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        if(!response.data.error) {
          console.log('Account Registered')
          this.setState ({
            redirectTo: '/login'
          })
        }
        else {
          console.log('email already registered');
        }
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    else {
    return (
        <div className='form-box'>
          <h1>Register Account</h1>
          <form id='register-form' onSubmit={this.handleSubmit}>
            <div className='input-group'>
              <label htmlFor='email'>Email: </label>
              <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password: </label>
              <input type='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className='btn-group'>
              <input type="submit" value="Register Account" />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Register;
