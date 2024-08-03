import React from 'react'
import Hero from './../component/hompage/Hero';
import AboutUs from '../component/hompage/AboutUs';
import Services from '../component/hompage/Services';
import OurStaff from '../component/hompage/OurStaff';
import Stats from '../component/hompage/Stats';
import Gallery from '../component/hompage/Gallery';
import PricingPlans from '../component/hompage/PricingPlans';
import Map  from '../component/hompage/Map';
import GetInTouch from '../component/hompage/GetInTouch';


const Hompage = () => {
  return (
      <div>
          <Hero />
          <AboutUs />
          <Services />
          <OurStaff />
      {/* <Stats /> */}
      <PricingPlans />
      <Gallery />
      <GetInTouch />
      <Map />
    </div>
  )
}

export default Hompage