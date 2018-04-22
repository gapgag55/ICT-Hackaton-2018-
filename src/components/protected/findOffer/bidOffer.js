import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { fetchMadeToOrder } from '../../../helpers/database'

import cover from './cover.png'
import avatar from './avatar.png'

class BidOffer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      software: [],
    }
  }

  componentDidMount() {
    fetchMadeToOrder().then(function(result) {
      console.log(result)
      var arr = Object.keys(result).map(function(k) { return result[k] });
      this.setState({
        software: arr,
      })
    }.bind(this))

  }

  render() {

    if ( this.state.software.length ) {
      var software = this.state.software[0]
      return (
        <div className="container-medium">
          <div className="hire-freelancer">
            <div className="software-results">
              <ul>
                <li  className="bg-white">
                  <div className="columns content">
                    <div className="left">
                      <h5>{software.value.header}</h5>
                      <div className="bg cover" style={{backgroundImage: `url(${cover})`}}></div>
                    </div>
                    <div className="right">
                      <span>star</span>
                      <p style={{textAlign: 'left'}}>{software.value.description + ' ' + software.value.description}</p>
                      <b>{software.value.attributes[1] + ' / ' + software.value.attributes[0]}</b>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="profile-comments">
              <li>
                <h5>Review</h5>
                <textarea placeholder="Add some detail"></textarea>
                <div>
                  <input type="text" placeholder="Bid in $"/>
                  <div style={{textAlign: 'right'}}><a onClick={this.submitOffer} className="next text-right">Submit</a></div>
                </div>
              </li>
              <li className="columns">
                <div className="column">
                  <div className="column bg avatar left" style={{backgroundImage: `url(${avatar})`}}></div>
                </div>
                <div className="column is-four-fifths right">
                  <h6>James Arthur</h6>
                  <b>$15 in 2 days ago</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien pharetra, bibendum justo id, pulvinar nunc. Nullam pretium ut lacus vel scelerisque. Vestibulum tempus suscipit turpis, vel commodo dolor facilisis eget. Quisque ligula dolor, lobortis ac justo quis, vestibulum dictum lorem.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    }

    return <p>Loading...</p>
  }
}


export default BidOffer