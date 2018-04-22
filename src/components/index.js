import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import Header from './header'
import loginRegister from './login-register'
import Home from './Home'

import Dashboard from './protected/Dashboard'
import HireFreelancer from './protected/hireFreelancer'
import FindOffer from './protected/findOffer'

import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login-register', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      authed: false,
      loading: true
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading ? <p>Loading..</p> : (
      <BrowserRouter>
        <div>
          <Header authed={this.state.authed} userInfo={this.state.userInfo}/>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login-register' component={loginRegister} />
                <PrivateRoute authed={this.state.authed} path='/hire-freelancer' component={HireFreelancer} />
                <PrivateRoute authed={this.state.authed} path='/find-offer' component={FindOffer} />
                <PrivateRoute authed={this.state.authed} path='/profile' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App