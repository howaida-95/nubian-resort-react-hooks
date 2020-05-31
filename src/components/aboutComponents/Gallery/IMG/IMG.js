import React from 'react';
import './IMG.scss';
const IMG = ({src, alt}) => {
  return (
      <div className = 'thumbnail mb-3'>
        <img src= {src} alt = {alt} className = 'thumbnail-img'/>
      </div>
  );
}

export default IMG;