import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      regSuccess: JSON.parse(localStorage.getItem('regSuccess')) || null,
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
    localStorage.clear()
    this.setState ({ regSuccess: null })
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
            error: null,
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log(error)
        this.setState({
          error: <p>Incorrect Email or Password</p>
        })
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
          <h2>{this.state.regSuccess}</h2>
          <div className='formErrors'>
            {this.state.error}
          </div>
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
