import React, { Component } from 'react'
import { getUserId } from '../../helpers/user'
import { database } from '../../config/constants'

import SelectRole from './selectRole'
import FreelanceProfile from './profileFreelancer'

import './dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      isLoading: true
    }
  }

  componentDidMount() {
    database.ref('/users/' + getUserId()).once('value').then(function(snapshot) {
      return this.setState({
        userInfo: snapshot.val(),
        isLoading: false
      });
    }.bind(this))
  }

  render () {
    if (!this.state.isLoading) {
      if (this.state.userInfo == null || !this.state.userInfo.hasOwnProperty('type')) {
        return <SelectRole />
      } else {
        return <FreelanceProfile />
      }
    }

    return <p>Loading...</p>
  }
}

export default Dashboard