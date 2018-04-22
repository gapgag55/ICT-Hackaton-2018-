import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getUserId } from '../../helpers/user'
import { database } from '../../config/constants'

class SelectRole extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: null,
      select: 'Freelancer',
      types: ['Freelancer', 'Business Owner', 'Software Owner'],
      redirect: false
    }

    this.saveProfile = this.saveProfile.bind(this)
    this.typeSelected = this.typeSelected.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }

  typeSelected(type) {
    this.setState({
      select: type
    })
  }

  saveProfile() {
    database.ref('/users/' + getUserId()).update({
      type: this.state.select
    })

    this.setState({
      redirect: true
    })
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }


  render() {
    return (
      <div className="select-role">
       {this.renderRedirect()}
        <h1>Who you are..?</h1>
        <ul>
          {this.state.types.map(type => {
            if ( this.state.select === type ) {
             return <li key={type} className="is-active" 
                      onClick={() => this.typeSelected(type)}>
                      {type}
                    </li>
            }
            return <li key={type} onClick={() => this.typeSelected(type)}>{type}</li>
          })}
        </ul>
        <div style={{textAlign: 'right'}}><button onClick={this.saveProfile}>Update Account</button></div>
      </div>
    )
  }
}

 export default SelectRole