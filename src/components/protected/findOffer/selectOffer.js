import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { customerPostJob, fetchShelf, fetchMadeToOrder } from '../../../helpers/database'

import cover from './cover.png'
import cover1 from './cover-2.jpg'
import cover2 from './cover-3.png'

class SelectOffer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      software: [],
      search: '',
      covers: [cover, cover1, cover2]
    }

    this.search = this.search.bind(this)
  }

  componentDidMount() {
    fetchMadeToOrder().then(function(result) {
      var arr = Object.keys(result).map(function(k) { return result[k] });
      this.setState({
        software: arr
      })
    }.bind(this))
  }

  search() {
    fetchMadeToOrder({"text": this.state.search}).then(function(result) {
      var arr = Object.keys(result).map(function(k) { return result[k] });
      this.setState({
        software: arr
      })
    }.bind(this))
  }

  updateInputValue(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    return (
      <div className="container-medium">
        <div className="hire-freelancer">
          <div className="columns search">
            <input type="text" onChange={evt => this.updateInputValue(evt)} placeholder="Search Off-the-shelf Products" className="search" value={this.state.search}/>
            <button className="next" onClick={this.search}>Search</button>
          </div>
          <div className="software-results">
            <ul>
              {this.state.software.map(software =>  {
                var price = software.value.attributes[1] + ' / ' + software.value.attributes[0]
                return (
                <li key={software.key} className="bg-white" onClick={() => this.props.next({softwareID: software.key}, 2)}>
                  <div className="columns content">
                    <div className="left column">
                      <h5>{software.value.header}</h5>
                      <div className="bg cover" style={{backgroundImage: `url(${this.state.covers[Math.floor(Math.random() * Math.floor(3))]})`}}></div>
                    </div>
                    <div className="right column">
                      <span>star</span>
                      <p style={{textAlign: 'left'}}>{software.value.description + ' ' + software.value.description}</p>
                      <b>{price}</b>
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


export default SelectOffer