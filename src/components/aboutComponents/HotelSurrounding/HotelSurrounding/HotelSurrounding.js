import React from 'react';
import './HotelSurrounding.scss';
const HotelSurrounding = ({item}) => {
  const {src, heading, distance} = item;
  return (
    <div className = 'hotel-surrounding d-flex align-items-center mb-3'>
      <div className = 'img-container mr-2'>
        <img src = {src} alt = {heading}/>
      </div>
      <div className = 'content d-flex align-items-center justify-content-between'>
        <h3>{heading}</h3>
        <span className = 'd-inline-block alig'>{distance} Km</span>
      </div>
    </div>
  );
}

export default HotelSurrounding;