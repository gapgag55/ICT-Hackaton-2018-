import React, { Component } from 'react'
import { getUserId } from '../../helpers/user'
import { database } from '../../config/constants'

import { Link } from 'react-router-dom'
import { logout } from '../../helpers/auth'

import './header.css'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      isLoading: true
    }
  }

  componentDidMount() {
    if ( getUserId() ) {
      database.ref('/users/' + getUserId()).once('value').then(function(snapshot) {
        return this.setState({
          userInfo: snapshot.val(),
          isLoading: false
        });
      }.bind(this))
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Mango</Link>
            </div>
            <ul className="nav navbar-nav pull-right">
              {
                this.state.userInfo.type == "Freelancer" ?
                  (<li>
                    <Link to="/find-offer">Find Offers</Link>
                  </li>)
                 : ''
              }
              {
                this.state.userInfo.type == "Business Owner" ?
                  (<li>
                    <Link to="/hire-freelancer">Hire Freelancer</Link>
                  </li>)
                 : ''
              }
              {this.props.authed ? <li><Link to="/profile">Profile</Link></li> : ''}
              {this.props.authed
                ? (<li><button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={() => {
                      logout()
                    }}
                    >Logout</button></li>)
                : <li><Link to="/login-register" className="--blue">Login/Register</Link></li>}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}


export default Header