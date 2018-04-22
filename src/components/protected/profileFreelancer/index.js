import React, { Component } from 'react'

import { getUserId } from '../../../helpers/user'
import { database } from '../../../config/constants'

import './freelancer.css'
import avatar from './avatar.png'
import mascot from './mascot.png'

class FreelanceProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      isFirst: true,
      edit: false,
      tabIndex: 'Profile',
      tabs: ['Profile', 'Review', 'Approval']
    }

    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.chageTab = this.chageTab.bind(this)
  }

  componentDidMount() {
    if ( getUserId() ) {
      database.ref('/users/' + getUserId()).once('value').then(function(snapshot) {
        var user = snapshot.val()
        return this.setState({
          about:  user.about,
          age:  user.year,
          career: user.career,
          completed_job:  user.completed_job,
          fullname:  user.fullname,
          last_work:  user.last_work,
          year: user.year
        });
      }.bind(this))
    }
  }

  edit() {
    this.setState({
      edit: true
    })
  }

  save() {
    this.setState({
      edit: false
    })

    console.log(getUserId())
    database.ref('/users/' + getUserId()).update({
      about: this.state.about,
      age: this.state.year,
      career: this.state.career,
      completed_job: this.state.completed_job,
      fullname: this.state.fullname,
      last_work: this.state.last_work,
      year: this.state.year
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  chageTab(tab) {
    this.setState({
      tabIndex: tab 
    })
  }

  render() {
    return (
      <div className="profile container-medium">
        <div className="profile-header columns">
          <div className="left column columns is-three-fifths">
            <div className="bg avatar" style={{backgroundImage: `url(${avatar})`}}>
            </div>
            <div className="profile-info">
              {this.state.edit ? 
                <input type="text" name="fullname" onChange={this.handleInputChange}  placeholder="Fullname" value={this.state.fullname} />
                : <h4>{this.state.fullname}</h4>
              }
              {this.state.edit ? 
                <input type="text" name="career" onChange={this.handleInputChange}  placeholder="Career" value={this.state.career}/>
                : <span>{this.state.career}</span>
              }
              {this.state.edit ? 
                <a onClick={this.save}>Save</a>
                : <a onClick={this.edit}>Edit Profile</a>
              }
            </div>
          </div>
          <div className="right column">
            <ul>
              <li className="columns">
                <span>Age:</span>
                {this.state.edit ? 
                  <input type="number" name="age" onChange={this.handleInputChange}  placeholder="Age" value={this.state.age}/>
                  : <span>{this.state.age}</span>
                }
              </li>
              <li className="columns">
                <span>Years experience:</span>
                {this.state.edit ? 
                  <input type="text" name="year" onChange={this.handleInputChange}  placeholder="Year" value={this.state.year}/>
                  : <span>{this.state.year}</span>
                }
              </li>
              <li className="columns">
                <span>Last Work:</span>
                {this.state.edit ? 
                  <input type="text" name="last_work" onChange={this.handleInputChange} placeholder="10 Jan 1997" value={this.state.last_work}/>
                  : <span>{this.state.last_work}</span>
                }
              </li>
              <li className="columns">
                <span>Completed Job:</span>
                {this.state.edit ? 
                  <input type="text" name="completed_job" onChange={this.handleInputChange}  placeholder="10" value={this.state.completed_job}/>
                  : <span>{this.state.completed_job} Works</span>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-tab">
          <ul>
            {this.state.tabs.map(tab => {
              if ( tab == this.state.tabIndex ) {
                return  <li key={tab} onClick={() => this.chageTab(tab)} className="is-active">{tab}</li>
              }
              return <li key={tab} onClick={() => this.chageTab(tab)}>{tab}</li>
            })}
          </ul>
          <hr />
        </div>
        <div className="profile-body columns">
          <div className="column left">
            <div className="bg-white">
              <h5>Website</h5>
              <ul>
                <li><i className="fab fa-chrome"></i> Website</li>
                <li><i className="fab fa-blogger-b"></i> Blog</li>
                <li><i className="fas fa-address-card"></i> Portifio</li>
              </ul>
            </div>
          </div>
          {this.state.tabIndex == "Profile" ? 

          <div className="column is-half bg-white center">
            <div>
              <h5>About</h5>
              {this.state.edit ? 
                <textarea name="about" onChange={this.handleInputChange} value={this.state.about}></textarea>
                : <span>{this.state.about}</span>
              }
              <hr />
            </div>
            <div>
              <h5>Skills</h5>
              <ul className="tags">
                <li>Javascript</li>
                <li>Python</li>
                <li>Linux</li>
                <li>C#</li>
                <li>Android</li>
              </ul>
            </div>
         </div>

         : 

         this.state.tabIndex == "Review" ? 
         
         <div className="column is-half bg-white center">
          <h5>Review</h5>
          <form>
            <textarea></textarea>
            <button>Submit</button>
          </form>
          <ul className="profile-comments">
            <li className="columns">
              <div className="column">
                <div className="column bg avatar left" style={{backgroundImage: `url(${avatar})`}}></div>
              </div>
              <div className="column is-four-fifths right">
                <h6>James Arthur</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien pharetra, bibendum justo id, pulvinar nunc. Nullam pretium ut lacus vel scelerisque. Vestibulum tempus suscipit turpis, vel commodo dolor facilisis eget. Quisque ligula dolor, lobortis ac justo quis, vestibulum dictum lorem.</p>
              </div>
            </li>
            <li className="columns">
              <div className="column">
                <div className="column bg avatar left" style={{backgroundImage: `url(${avatar})`}}></div>
              </div>
              <div className="column is-four-fifths right">
                <h6>James Arthur</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien pharetra, bibendum justo id, pulvinar nunc. Nullam pretium ut lacus vel scelerisque. Vestibulum tempus suscipit turpis, vel commodo dolor facilisis eget. Quisque ligula dolor, lobortis ac justo quis, vestibulum dictum lorem.</p>
              </div>
            </li>
          </ul>
         </div>

         :

         <div className="column is-half bg-white center">
          <table width="100%">
            <tr style={{borderBottom: '1px solid #DCDCDC'}}>
              <th>Project</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Project 1</td>
              <td>1-Jan-2018</td>
              <td><span className="red">Deny</span></td>
            </tr>
            <tr>
              <td>Project 1</td>
              <td>1-Jan-2018</td>
              <td><span className="orange">Waiting</span></td>
            </tr>
            <tr>
              <td>Project 1</td>
              <td>1-Jan-2018</td>
              <td><span className="green">Approval</span></td>
            </tr>
          </table>
         </div>
        
        }

          <div className="column right">
            <div className="fast-lane bg-white">
              <div style={{textAlign: 'center', marginBottom: '10px'}}>
                <img src={mascot} width="90" height="90"/>
              </div>
              <b>Premium User</b>
              <i>Fast-lane</i>
              <a href="#">Boost-up</a>
            </div>
            <h5>Similar Profiles</h5>
            <hr />
            <ul>
              <li className="columns list-avatar">
                <div className="bg avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="profile-related">
                  <h6>Andrew Ng</h6>
                  <p>UX/UI designer</p>
                </div>
              </li>
              <li className="columns list-avatar">
                <div className="bg avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="profile-related">
                  <h6>Andrew Ng</h6>
                  <p>UX/UI designer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

 export default FreelanceProfile