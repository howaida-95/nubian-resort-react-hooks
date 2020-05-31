import React, { useContext } from 'react';
import { GlobalContext } from './../../../../context/GlobalContext';
const Size = () => {
  const {minSize, maxSize, handleChange} = useContext(GlobalContext)
  return (
    <div className = 'col-md-4 col-lg-2'>
      <div className = 'form-group'>
        <label htmlFor='size'>room size</label>
        <div className = 'size-inputs'>
    {/* contain 2 input one for small size & one for large size  */}            
        <input 
          className = 'size-input'
          id = 'size'
          type = 'number'
          name = 'minSize'
          value = {minSize}
          onChange = {handleChange}/>
          
        <input 
          className = 'size-input'
          id = 'size'
          type = 'number'
          name = 'maxSize'
          value = {maxSize}
          onChange = {handleChange}/>            
        </div>      
      </div>  
    </div>           
  );
}

export default Size;