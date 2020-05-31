import React from 'react';
import './Service.scss';
const Service = ({item}) => {
  const {icon, heading, text} = item;
  return (
    <div className = 'col-sm-6 col-lg-3'> 
      <article className = 'service'>
        <div className = 'service-icon'>{icon}</div>
        <div className = 'service-txt'>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </article>
    </div>
  );
}

export default Service;