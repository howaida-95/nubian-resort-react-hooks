import React, {useState} from 'react';
import {
  FaMugHot, 
  FaShower,
  FaTshirt,
  FaWifi,
  FaUtensils,
  FaCarSide,
  FaPaw,
  FaUmbrellaBeach} from 'react-icons/fa';
import Title from '../../shared/Title';
import Service from './Service/Service';
const Services = () => {
  const [services] = useState([
    {
      icon: <FaMugHot className = 'icon'/>,
      heading: 'Tea Coffee',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaShower className = 'icon'/>,
      heading: 'Hot Showers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaTshirt className = 'icon'/>,
      heading: 'Laundary',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaWifi className = 'icon'/>,
      heading: 'Free Wifi',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaUtensils className = 'icon'/>,
      heading: 'Kitchen',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaCarSide className = 'icon'/>,
      heading: 'Free Parking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaPaw className = 'icon'/>,
      heading: 'Pet Friendly',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: <FaUmbrellaBeach className = 'icon'/>,
      heading: 'Beachfront',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ]);
  return (
    <section className = 'pd-7'>
      <div className = 'container-fluid' >
      {/* title row */}
        <Title title = 'Services'/>
      <div className = 'row'>
      {/* services row */}
          {services.map((item, index) => {
            return <Service key={index} item = {item}/>
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;