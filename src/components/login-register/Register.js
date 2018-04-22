import React, { Component } from 'react'
import { auth } from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      registerError: null 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  
  render () {
    return (
      <div className="form-login-register">
        <h1>Register</h1>
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
                &nbsp;{this.state.registerError} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
              </div>
            }
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
