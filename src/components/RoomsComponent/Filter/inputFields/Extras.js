import React, { useContext } from 'react';
import { GlobalContext } from './../../../../context/GlobalContext';
const Extras = () => {
  const {breakfast, pets, handleChange} = useContext(GlobalContext)
  return (
    <div className = 'col-md-4 col-lg-2'>
          <div className = 'form-group'>
      {/* first input breakfast */}
      <div className = 'single-extra'>
        <input 
          id = 'breakfast'
          type = 'checkbox' 
          name = 'breakfast' 
          checked = {breakfast} 
          onChange = {handleChange}/>
        <label htmlFor = 'breakfast'>breakfast</label>  
      </div>
      {/* second input pets */}
      <div className = 'single-extra'>
        <input 
          id = 'pets'
          type = 'checkbox' 
          name = 'pets' 
          checked = {pets} 
          onChange = {handleChange}/>
        <label htmlFor = 'pets'>pets</label>  
      </div>          
  </div>   
    </div> 
  );
}

export default Extras;