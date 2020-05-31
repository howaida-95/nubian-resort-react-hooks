import React, { useContext } from 'react';
import { GlobalContext } from './../../../../context/GlobalContext';
const Prices = () => {
  const {price, minPrice, maxPrice, handleChange} = useContext(GlobalContext);
  return (
    <div className = 'col-md-4 col-lg-2'>
      <div className = 'form-group'> 
        <label htmlFor='price'>price ${price}</label> {/* htmlFor in label & id in input */}
        <input
          className = 'form-control'
          id = 'price'
          type = 'range'
          name = 'price' // name is important because it should match whatever we have in state 
            value = {price} // price we're getting from state 
            min = {minPrice}
            max = {maxPrice}
            onChange={handleChange}/>
      </div>
    </div>     
  );
}
export default Prices;