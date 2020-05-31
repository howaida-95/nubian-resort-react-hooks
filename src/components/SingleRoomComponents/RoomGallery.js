import React from 'react';
const RoomGallery = ({images, name}) => {
  return (
    <section className = 'room-gallery pd-7'>
      <div className = 'row'>
        {images.map((item, index) => {
          return <div key = {index} className = 'col-md-6 col-lg-3'>
          <img src = {item} alt = {name}/>
        </div>
        })}            
      </div>
    </section>
  );
}
export default RoomGallery;