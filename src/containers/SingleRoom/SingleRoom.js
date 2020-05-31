import React, {useState, useContext} from 'react';
import './SingleRoom.scss';
import { GlobalContext } from '../../context/GlobalContext';
import RoomGallery from '../../components/SingleRoomComponents/RoomGallery';
import Details from '../../components/SingleRoomComponents/Details';
import Title from '../../components/shared/Title';
import Loader from './../../components/shared/Loader/Loader';
const SingleRoom = (props) => {
  const [slug] = useState(props.match.params.slug)
  const {getRoom} = useContext(GlobalContext);
  const room = getRoom(slug);
  if(!room){
    return <Loader />
  }
  const {images, name} = room;
  return (
    <div className = 'pd-7'>
      <div className = 'container-fluid'>
        {!room? <Loader/>: 
        (
          <>
            <Title title = {`${name} room`}/>
            <RoomGallery images = {images} name = {name}/>
            <Details room = {room}/>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleRoom;