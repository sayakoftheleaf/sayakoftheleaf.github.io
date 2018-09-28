import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Software engineer by Profession and Passion. Wannabe writer. Polyglot. Undergrad at Tufts. Passionate about Cyber Security, Robotics, and Machine Learning. Reads up on Philosophy and Film theory from time to time.
          <div className="emoji">
          👨‍🎓 &nbsp; 🤖 &nbsp; 💻 &nbsp; 🖋️&nbsp; 🏓 &nbsp; 📚 &nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default About