import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import Banner from './../components/shared/Banner';
import Services from './../components/homeComponents/services/Services';
import FeaturedRooms from '../components/homeComponents/FeaturedRooms/FeaturedRooms';
import Slider from '../components/homeComponents/Testimonials/Slider';
const Home = () => {
  return (
    <div>
      <Hero hero = 'defaultHero'> 
        <Banner 
          header = 'mainHeader'
          title = 'Welcome To Our Resort'>
          <Link to = '/rooms' className = 'btn btn-primary'>
            Explore our rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms/>
      <Services/>
      <Slider/>
    </div>
  );
}

export default Home;