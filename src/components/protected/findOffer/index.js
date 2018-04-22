import React, { Component } from 'react'
import { customerPostJob } from '../../../helpers/database'

import SelectOffer from './selectOffer'
import BitOffer from './bidOffer'

import './findOffer.css'

class FindOffer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      makeJob: {},
      people: []
    }

    this.nextSection = this.nextSection.bind(this)
  }

  nextSection(value, number) {

    this.setState({
      step: ++this.state.step,
      makeJob: Object.assign(this.state.makeJob, value)
    })
  }
  

  render() {
    var components = [ 
      <SelectOffer next={this.nextSection} {...this.state}/>,
      <BitOffer next={this.nextSection} {...this.state}/>
    ]

    return components[this.state.step]
  }
}


export default FindOffer