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
            title="Aruki"
            link="https://github.com/sayakoftheleaf/Aruki_Desktop"
            timeperiod="2017 - Present"
            subtitle="A chess variant designed to hate a lot more permutations
            than chess, so that brute force solutions aren't viable for any AI
            playing the game. Current working on designing a Neural Network Based ML AI to run on it. App itself built on NodeJS/React/ElectronJS"
          />
          <ExperienceUnit
            logo={litLogo}
            colour="#484F57"
            title="LIT"
            // link="https://quiz.praagya.com/"
            timeperiod="2017 - Present"
            subtitle="A social networking platform that helps people navigate
            the social and cultural prospects of a city. Built using Native Android SDK, Firebase, and Google and Facebook SPI"
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
