import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { customerPostJob, fetchShelf } from '../../../helpers/database'

import cover from './cover.png'
import cover1 from './cover-2.jpg'
import cover2 from './cover-3.png'

class SelectSoftware extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      software: [],
      covers: [cover, cover1, cover2]
    }

    this.submitOffer = this.submitOffer.bind(this)
  }

  componentDidMount() {
    fetchShelf({"text": this.props.text}).then(function(result) {
      var arr = Object.keys(result).map(function(k) { return result[k] });
      this.setState({
        software: arr
      })
    }.bind(this))
  }

  submitOffer() {
    // Submit Firebase
    this.props.next({"text": this.props.text}, 1)

    this.setState({
      submit: !this.state.submit
    })
  }

  render() {
    if ( this.state.submit ) {

      return (
        <div className="container-medium">
          <div className="offer-finish bg-white">
            <h5>Your offer has been posted!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vulputate velit, in pretium sem. Fusce molestie euismod scelerisque.</p>
            <p><i className="fas fa-check"></i></p>
            <Link to="/">Done</Link>
          </div>
        </div>
      )
    }

    return (
      <div className="container-medium">
        <div className="hire-freelancer">
          <div className="make-to-order bg-white">
            <h5>Made-to-order</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vulputate velit, in pretium sem. Fusce molestie euismod scelerisque.</p>
            <a onClick={this.submitOffer}>Post your offer ></a>
          </div>
          <div className="columns search">
            <input type="text" placeholder="Search Off-the-shelf Products" className="search" />
            <button className="next">Search</button>
          </div>
          <div className="software-results">
            <ul>
              {this.state.software.map(software =>  {
                var price = Number(software.value.attributes[0].split('/')[0].split('$')[1] * 20.5)
                return (
                <li key={software.key} className="bg-white" onClick={() => this.props.next({softwareID: software.key}, 2)}>
                  <div className="columns content">
                    <div className="left">
                      <h5>{software.value.header}</h5>
                      <div className="bg cover" style={{backgroundImage: `url(${this.state.covers[Math.floor(Math.random() * Math.floor(3))]})`}}></div>
                    </div>
                    <div className="right">
                      <span>star</span>
                      <p style={{textAlign: 'left'}}>{software.value.description + ' ' + software.value.description}</p>
                      <b>${price}</b>
                    </div>
                  </div>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default SelectSoftware