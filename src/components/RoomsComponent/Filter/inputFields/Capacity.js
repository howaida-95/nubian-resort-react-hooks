import React, { useContext } from 'react';
import { GlobalContext } from './../../../../context/GlobalContext';
const getUnique = (items, value) => { 
  return [...new Set(items.map(item => item[value]))]
}
const Capacity = () => {
  const {rooms, capacity, handleChange} = useContext(GlobalContext);
  let people = getUnique(rooms, 'capacity');

  return (
    <div className = 'col-md-6 col-lg-3'>
      <div className = 'form-group'>
        <label htmlFor='capacity'>Guests</label>
        <select 
          name='capacity' 
          id='capacity' 
          value={capacity}// get type from room data but without repeating 
          className='form-control'
          onChange={handleChange}>
          { // map to JSX 
              people.map((item, index) => {
                return <option value={item} key={index}>{item}</option>
              })}
        </select>
      </div>  
    </div>  
  );
}

export default Capacity;