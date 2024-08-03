import React from 'react'
import WhoWeAre from './../component/about/WhoWeAre';
import TattooStudioSection from '../component/about/TattooStudioSection';
import LatestWorks from '../component/about/LatestWorks';
import OurStaff from '../component/hompage/OurStaff';

const About = () => {
  return (
      <div>
          <WhoWeAre />
      <TattooStudioSection />
      <LatestWorks />
      <OurStaff />

    </div>
  )
}

export default About