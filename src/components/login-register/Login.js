import React, { Component } from 'react'
import { 
  login, 
  loginWithGoogle, 
  loginWithFacebook,
  loginWithTwitter,
  resetPassword
} from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      loginMessage: null 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }

  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  render () {
    return (
      <div className="form-login-register">
        <h1>Login</h1>
        <div className="container-form --white">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input className="form-control" placeholder="Email" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            {
              this.state.loginMessage &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
              </div>
            }
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="container-form social">
          <a onClick={loginWithFacebook} className="facebook"><i className="fab fa-facebook-f"></i></a>
          <a onClick={loginWithGoogle} className="google"><i className="fab fa-google-plus-g"></i></a>
          <a onClick={loginWithTwitter} className="twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    )
  }
}

export default Login