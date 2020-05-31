import React from 'react';
import './Card.scss';
const ImgComp = ({item}) => {
  const {src, icon, txt, name} = item;
  return (
    <div className = 'card'>
      <div className = 'img-container'>
        <img src = {src} alt = 'img'/>
      </div>
      <div className = 'card-body'>
        <span>{icon}</span>
        <p>{txt}</p>
        <strong>{name}</strong>
      </div>
    </div>
  );
}
export default ImgComp;
