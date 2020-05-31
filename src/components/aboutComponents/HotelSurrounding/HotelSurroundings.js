import React, {useState} from 'react';
import Title from './../../shared/Title';
import img1 from '../../../assets/images/surrounding-1.png';
import img2 from '../../../assets/images/surrounding-2.png';
import img3 from '../../../assets/images/surrounding-3.png';
import img4 from '../../../assets/images/surrounding-4.png';
import img5 from '../../../assets/images/surrounding-5.png';
import img6 from '../../../assets/images/surrounding-6.png';
import img7 from '../../../assets/images/surrounding-7.png';
import img8 from '../../../assets/images/surrounding-8.png';
import HotelSurrounding from './HotelSurrounding/HotelSurrounding';
const HotelSurroundings = () => {
  const [surroundings] = useState([
    {
      src: img1, 
      heading: 'Nubian Museum',
      distance: 3.3 
    },
    {
      src: img2, 
      heading: 'Aga Khan Mausoleum',
      distance: 3.4 
    },
    {
      src: img3, 
      heading: 'Temple of Philae',
      distance: 3.5 
    },
    {
      src: img4, 
      heading: 'Unfinished Obelisk',
      distance: 3.7 
    },
    {
      src: img5, 
      heading: "Kitchener's Island",
      distance: 4.4 
    },       
    {
      src: img6, 
      heading: 'Tombs of Nobles',
      distance: 5.5 
    },    
    {
      src: img7, 
      heading: 'Naser Lake',
      distance: 10 
    },
    {
      src: img8, 
      heading: 'Aswan High Dam',
      distance: 10.1 
    },                  
  ]);
  return (
    <section className = 'pd-7'>
    <div className = 'container-fluid'>
      <Title title = 'Hotel Surroundings'/>
    <div className = 'row'>
      {surroundings.map((item, index) => {
        return <div className = 'col-lg-6' key = {index}>
          <HotelSurrounding item = {item} />
        </div>
      })}
    </div>
    </div>
    </section>
  );
}

export default HotelSurroundings;