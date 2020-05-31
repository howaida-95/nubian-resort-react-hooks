import React, {useContext} from 'react';
import {GlobalContext} from '../../../context/GlobalContext';
import Room from './../../shared/Room/Room';
import Loader from '../../shared/Loader/Loader';

const ResortRooms = () => {
  const {sortedRooms} = useContext(GlobalContext);
  return (
    <div className = 'container-fluid'>
        <div className = 'row'>       
          {
            !sortedRooms? <Loader/>:
            sortedRooms.map((item, index) => {
              return <Room item = {item} key = {index}/>
            })
          }
        </div>
    </div>
  );
}

export default ResortRooms;