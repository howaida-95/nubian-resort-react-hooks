import React from 'react';
import {FaChevronRight} from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import Banner from './../components/shared/Banner';
import Gallery from '../components/aboutComponents/Gallery/Gallery';
import HotelSurroundings from '../components/aboutComponents/HotelSurrounding/HotelSurroundings';
import FAQS from '../components/aboutComponents/FAQS/FAQS';
const About = () => {
  const icon = <FaChevronRight className = 'icon'/>
  return (
    <div>
      <Hero hero = 'aboutHero'>
        <Banner 
          HomePage = 'Home'
          activePage = 'About'
          icon = {icon}
          header = 'secondaryHeader'
          title = 'About Us'>
        </Banner>
      </Hero>
      <HotelSurroundings />
      <FAQS/>
      <Gallery/>
    </div>
  );
}

export default About;