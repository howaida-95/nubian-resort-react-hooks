import React, {useContext} from 'react';
import Title from '../../shared/Title';
import {GlobalContext} from '../../../context/GlobalContext';
import Room from './../../shared/Room/Room';
import Loader from '../../shared/Loader/Loader';
const FeaturedRooms = () => {
  const {loading, featuredRooms} = useContext(GlobalContext);
  return (
    <section className = 'pd-7'>
      <div className = 'container-fluid'>
        <Title title = 'Featured Rooms'/>
        <div className = 'row justify-content-center'>       
          { loading? <Loader/>: 
            featuredRooms.map((item, index) => {
              return <Room item = {item} key = {index}/>
            })
          }
        </div>
      </div> 
    </section>   
  );
}
export default FeaturedRooms;