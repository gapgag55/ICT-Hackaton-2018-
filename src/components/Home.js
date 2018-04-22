import React, { Component } from 'react'
import '../helpers/notification.js'

export default class Home extends Component {
  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
        <h1>Home Page</h1>
      </div>
    )
  }
}