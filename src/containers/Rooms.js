import React from 'react';
import {FaChevronRight} from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import Banner from './../components/shared/Banner';
import Filter from '../components/RoomsComponent/Filter/Filter';
import ResortRooms from './../components/RoomsComponent/ResortRooms/ResortRooms';

const Rooms = () => {
  const icon = <FaChevronRight className = 'icon'/>
  return (
    <div>
      <Hero hero = 'roomsHero'>
        <Banner 
          HomePage = 'Home'
          activePage = 'Rooms'
          icon = {icon}
          header = 'secondaryHeader'
          title = 'Our Rooms'>
        </Banner>
      </Hero>
      <Filter/>
      <ResortRooms/>
    </div>
  );
}
export default Rooms;