import React, { Component } from 'react'
import { auth } from '../../helpers/auth'

import Login from './Login'
import Register from './Register'

import './loginRegister.css'


class loginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleLogin: true
    }

    this.swapToggle = this.swapToggle.bind(this)
  }

  swapToggle() {
    this.setState({ 
      toggleLogin: !this.state.toggleLogin
    })
  }

  render() {

    // Display Login Page
    if (this.state.toggleLogin) {
      return (
        <div className="login-register-page">
          <Login />
          <p className="container-form text-center">Do not have any account? <span onClick={this.swapToggle}>signup</span></p>
        </div>
      )
    }

    // Display Register Page
    return (
      <div className="login-register-page">
        <Register />
        <p className="container-form text-center">Already have accounts? <span onClick={this.swapToggle}>Login</span></p>
      </div>
    )
  }
}


export default loginRegister 