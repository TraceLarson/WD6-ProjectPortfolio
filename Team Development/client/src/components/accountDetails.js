import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class AccountDetails extends Component {

  constructor(props) {
		super(props)
		this.state = {
			user: {},
      redirectTo: null
		};
	}

  componentDidMount() {
    axios.get('/user/account')
      .then(response => {
        if(!response.data.error) {
          this.setState({ user: response.data })
          console.log('Account Details User state: ')
          console.log(this.state.user)
        }
        else {
          console.log(response.data.error)
          this.setState({
            redirectTo: '/login'
          })
        }
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    else {
      return (
      <div className='account-details'>
        <h1>Account Details</h1>
        <div>
          <h2 id='accnt-email'>{ this.state.user.email }</h2>

        </div>
      </div>
      )
    }
  }
}

export default AccountDetails
