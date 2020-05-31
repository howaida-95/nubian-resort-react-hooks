import React from 'react';
const Details = ({room}) => {
  const {description, price, size, capacity, pets, breakfast, extras} = room;
  return (
    <section className = 'details'>
      <div className = 'row'>
        <article className = 'col-md-6 col-lg-4'>
          <h3>Details</h3>
          <p>{description}</p>
        </article>
        <article className = 'col-md-6 col-lg-4'>
          <h3>Info</h3>
          <ul>
            <li><span>Price:</span> ${price}</li>
            <li><span>Size:</span> {size} SQFT</li>
            <li>
              <span>Max Capacity:</span> {capacity} {capacity === 1 ? 'Person' : 'people'} </li>
            <li>{pets? 'Pets allowed': 'no pets allowed'}</li>
            <li>{breakfast && 'free brakfast included'}</li>
          </ul>
        </article> 
        <article className = 'col-md-6 col-lg-4'>
          <h3>Etras</h3>
          <ul>
            {
              extras.map((item, index) => {
                return <li key ={index}>{item}</li>
              })
            }
          </ul>          
        </article>     
      </div>
    </section>
  );
}

export default Details;