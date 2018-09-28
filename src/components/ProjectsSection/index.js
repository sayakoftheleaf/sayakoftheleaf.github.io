import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import litLogo from '../../assets/images/projects/lit_logo_v2.svg'
import arukiLogo from '../../assets/images/projects/aruki_sakura.png'
import walkthroughViewGif from '../../assets/images/projects/wvwalkthroughview-optimize.gif'

class ProjectsSection extends React.Component {
  render () {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={arukiLogo}
            colour="#362F2F"
            title="Little Nomad"
            link="https://github.com/sayakoftheleaf/Aruki_Desktop"
            timeperiod="2017 - ???"
            subtitle="A platform for socially aware travellers. Runs on
              React+Redux with a Ruby on Rails backend."
          />
          <ExperienceUnit
            logo={litLogo}
            colour="#20DC6B"
            title="Music Quiz for Spotify"
            link="https://quiz.praagya.com/"
            timeperiod="2017"
            subtitle="A fun quiz which tests your knowledge of music that
              you've saved. Built using React/Redux."
          />
          {/* <ExperienceUnit
            logo={walkthroughViewGif}
            colour="#312F31"
            title="WalkthroughView"
            link="https://github.com/praagyajoshi/WVWalkthroughView"
            timeperiod="2016"
            subtitle="A drop in utility to help onboard a new user/feature.
              Written in Objective C."
          /> */}
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
