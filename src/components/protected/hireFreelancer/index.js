import React, { Component } from 'react'
import { customerPostJob } from '../../../helpers/database'

import Detail from './detail'
import SelectSoftware from './selectSoftware'
import SelectFreelance from './selectFreelance'

import './hireFreelancer.css'

class HireFreelancer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      makeJob: {},
      people: [],
      text: ""
    }

    this.nextSection = this.nextSection.bind(this)
  }

  nextSection(value, number) {

    if ( number == 0 ) {
      this.setState({
        text: value.projectName + "::" + value.description 
      })
    }

    // Offer Post Job
    if ( number ==  1 ) {
      // Send Ajax
      // console.log( customerPostJob )
      customerPostJob(value)
      return
    }

    this.setState({
      step: ++this.state.step,
      makeJob: Object.assign(this.state.makeJob, value)
    })
  }
  

  render() {
    console.log("OK")
    var components = [
      <Detail next={this.nextSection} />, 
      <SelectSoftware next={this.nextSection} {...this.state}/>,
      <SelectFreelance next={this.nextSection} {...this.state}/>
    ]

    return components[this.state.step]
  }
}


export default HireFreelancer