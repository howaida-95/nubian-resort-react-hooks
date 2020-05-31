import React from 'react';
import './Room.scss';
import { Link } from 'react-router-dom';
const Room = ({item}) => {
  const {images, name, price, slug} = item
  return (
    <div className = 'col-sm-6 col-lg-3'>
      <div className = 'room mb-3'>
        <div className = 'img-container'>
          <img src = {images[0]} alt = {name} height = '400px'/>
          <div className = 'price-top'>
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to = {`/rooms/${slug}`} className = 'btn btn-primary room-link'>
            Features
          </Link>
        </div>
        <p className = 'room-info'>{name}</p>
      </div>
    </div>

  );
}

export default Room;