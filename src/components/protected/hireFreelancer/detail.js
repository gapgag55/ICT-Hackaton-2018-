import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Detail extends Component {
  constructor(props) {
    super(props) 
    this.saveValue = this.saveValue.bind(this)
  }

  saveValue() {
    this.props.next({
      projectName: this.projectName.value,
      description: this.description.value
    }, 0)
  }

  render() {

    return (
      <div className="container-medium">
        <div className="hire-freelancer">
          <h2>Tell us about your project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vulputate velit, in pretium sem. Fusce molestie euismod scelerisque. In non posuere elit. Nam blandit massa lacus, eget finibus felis lacinia auctor. Integer arcu felis, lobortis quis mattis eu, maximus sed ligula.</p>
          <form>
            <strong>Project Name</strong>
            <input type="text" ref={(input) => { this.projectName = input; }} placeholder="e.g. E-Commerce Website" />
            <strong>Project Descriptions</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vulputate velit, in pretium sem. Fusce molestie euismod scelerisque. In non posuere elit. Nam blandit massa lacus.</p>
            <textarea ref={(input) => { this.description = input; }} placeholder="Describe your project here.."></textarea>
          </form>
          <div style={{textAlign: 'right'}}><a onClick={this.saveValue} className="next text-right">Next</a></div>
        </div>
      </div>
    )
  }
}


export default Detail