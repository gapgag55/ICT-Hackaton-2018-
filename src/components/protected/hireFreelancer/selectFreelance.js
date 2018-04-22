import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { fetchFreelance } from '../../../helpers/database'

import cover from './cover.png'
import avatar from './avatar.png'

import p1 from './p1.jpg'
import p2 from './p1.jpg'
import p3 from './p1.jpg'
import p4 from './p1.jpg'
import p5 from './p1.jpg'
import p6 from './p1.jpg'
import p7 from './p1.jpg'
import p8 from './p1.jpg'
import p9 from './p1.jpg'
import p10 from './p1.jpg'

class SelectFreelance extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: [],
      submit: false,
      avatar: [p1, p2, p3, p4, p5 ,p6 ,p7, p8, p9, p10]
    }

    this.removePerson = this.removePerson.bind(this)
    this.submitOffer = this.submitOffer.bind(this)
  }

  componentDidMount() {
    fetchFreelance().then(function(result) {
      var arr = Object.keys(result).map(function(k) { return result[k] });
      this.setState({
        people: arr,
        loaded: true
      })
    }.bind(this))

  }
  
  removePerson(key) {

    var arr = this.state.people

    for (var i=arr.length-1; i>=0; i--) {
      if (arr[i].key === key) {
        arr.splice(i, 1);
        this.setState({
          people: arr
        })
        break;
      }
    }
  }

  submitOffer() {
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
            <Link to="/hire-freelancer">Done</Link>
          </div>
        </div>
      )
    }
    
    return (
      <div className="container-medium">
        <div className="hire-freelancer">
          <div className="software-results">
            <ul>
              <li className="bg-white">
                <div className="columns content">
                  <div className="left">
                    <h5>Web Applications and Services</h5>
                    <div className="bg cover" style={{backgroundImage: `url(${cover})`}}></div>
                  </div>
                  <div className="right">
                    <span>star</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vulputate velit, in pretium sem. Fusce molestie euismod scelerisque. In non posuere elit. Nam blandit massa lacus, eget finibus felis lacinia auctor. Integer arcu felis, lobortis quis mattis eu, maximus sed ligula. </p>
                    <b>$389.00</b>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="list-users">
          {this.state.people.map((person) => {
            return (
            <li key={person.key} className="columns bg-white">
              <div className="column columns left">
                <div className="bg avatar" style={{backgroundImage: `url(${this.state.avatar[Math.floor(Math.random() * Math.floor(10))]})`}}></div>
                <div className="content">
                  <h4>{person.value.first_name + ' ' + person.value.last_name}</h4>
                  <p><b>Completed Job:</b> <span>{Math.round(Math.random() * 100)} works</span></p>
                  <span>star</span>
                </div>
              </div>
              <div className="column right">
                <div className="deny" onClick={() => this.removePerson(person.key)}>Deny</div>
              </div>
            </li>
            )
          })}
          </ul>
          <div style={{textAlign: 'right', marginRight: '15px'}}><a onClick={this.submitOffer} className="next text-right">Submit</a></div>
        </div>
      </div>
    )
  }
}


export default SelectFreelance