import React, {useState} from 'react';
import './Slider.scss';
import img1 from '../../../assets/images/user1.jpg';
import img2 from '../../../assets/images/user2.jpg';
import img3 from '../../../assets/images/user3.jpg';
import img4 from '../../../assets/images/user4.jpg';
import img5 from '../../../assets/images/user5.jpg';
import img6 from '../../../assets/images/user6.jpg';
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Card from './Card/Card';
import Title from './../../shared/Title';
const Slider = () => {
  const [cards] = useState([
    {
      src: img1,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: 'It was an amazing experience Every thing was extremely beautiful I like the friendly stuff The Yummy food The professional owners.',
      name: 'Sara'
    },
    {
      src: img2,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: 'Great people. It is the heart of the area, which is a charming Nubian village. We celebrated a birthday there and the staff went above and beyond to make it a memorable experience!.',
      name: 'Nicholas'
    },
    {
      src: img3,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: 'Beautiful location on the shores of the Nile and in the heart of a Nubian village. Very helpful and polite staff and great food.',
      name: 'Jessica'      
    },
    {
      src: img4,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: ' A wonderful Nubian experience: beautiful colors, view in front of the Nile river The manager is very professional and the Nubian staff are so kind and professional.',
      name: 'Mehdi' 
    },
    {
      src: img5,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: ' Kato dool is an incredible Nubian house, beautiful, colourful and full of peace and tranquility beside the powerful River Nile!',
      name: 'Veronica'       
    },
    {
      src: img6,
      icon: <FaQuoteRight className = 'icon'/>,
      txt: 'Amazing Nubean house. Very intelligent and friendly staff , wondefull view so i highly recommend this great resort.',
      name: 'Amro'        
    },
  ]);
  const [x, setX] = useState(0);
  const goLeft = () => {
    (x === 0)? setX(-100 * (cards.length - 1 )) : setX(x + 100)
  }
  const goRight = () => {
    (x === -100* (cards.length - 1))? setX(0): setX(x - 100)
  }
  return (
    <div className = 'container-fluid'>
      <Title title = 'Happy Clients and Feedbacks'/>
      <div className = 'Slider'>
        {
          cards.map((item, index) => {
            return (
              <div className = 'slide' key = {index} style = {{transform: `translateX(${x}%)`}}>
                <Card item = {item} />
              </div>
            );
          })
        }
{/* --------------------------- buttons to navigate -------------------- */}
        <button id = 'goLeft' onClick = {goLeft}>
          <FaChevronLeft className = 'icon'/>
        </button>
        <button id = 'goRight' onClick = {goRight}>
        <FaChevronRight className = 'icon'/>
        </button>      
      </div> 
    </div>
  );
}

export default Slider;