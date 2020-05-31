import React, { useContext } from 'react';
import { GlobalContext } from './../../../../context/GlobalContext';
const getUnique = (items, value) => { 
  return [...new Set(items.map(item => item[value]))]
}
const Types = () => {
  const {rooms, type, handleChange} = useContext(GlobalContext);

/* ---------------------------- get unique types ------------------------------*/  

  // pass the rooms arr that we're gonna check & the thing i'm checking for 
  let types = getUnique(rooms, 'type'); // get unique types , this gets back an aaray  
  // add all 
  types = ['all', ...types]; // add all & whatever in types 
  return (
    <div className = 'col-md-6 col-lg-3'>
      <div className = 'form-group'>
        <label htmlFor='type'>room type</label>
        <select 
          name='type' 
          id='type' 
          value={type}// get type from room data but without repeating 
          className='form-control'
          onChange={handleChange}>
          {  // map to JSX 
            types.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
        </select>
      </div>
    </div>    
  );
}
export default Types;