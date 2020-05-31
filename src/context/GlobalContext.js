import React, { Component } from 'react';
import axios from '../components/shared/axios-instance';;
// because data exported as default so we can name it as we want ex: item
export const GlobalContext = React.createContext();
// provider 
export class GlobalContextProvider extends Component {
  state = { 
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    // filter state 
    type: 'all', // the default 
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }
  // get data 
  componentDidMount() {
      axios.get('/rooms.json')
      .then(response => {
        let featuredRooms = response.data.filter(room => room.featured === true);
        // filter 
        let maxPrice = Math.max(...response.data.map(item => item.price));// get maxprice from the room data 
        let maxSize = Math.max(...response.data.map(item => item.size));        
        this.setState({
          rooms: response.data,
          featuredRooms,
          sortedRooms: response.data,
          loading: false,
          // filter 
          price: maxPrice, // so that the price appear at its max val at default
          maxPrice,// maxPrice: maxPrice
          maxSize,
        })
      })
  }
/* get single room by slug , here filter the specific room 
that has that slug that will be passed using the link */ 
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug)
    return room;
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;// what ever we selected 
    const name = target.name;// equal whatever we had on state 
    this.setState({    
    [name]: value
  }, this.filterRooms) //setState sychronous so the func runs only when change the state 
  }

  filterRooms = () => {
    let {// using let because i'll overwrite them 
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state

// all the rooms 
    let tempRooms = [...rooms];
// transform the values 
    capacity = parseInt(capacity); // convert string into number 
    price = parseInt(price); // convert string into number 
// filter by type     
    if( type !== 'all'){ // if type doesn't equal all i wanna filter rooms 
      tempRooms = tempRooms.filter(room => {
        //return the rooms that only match the current type 
        return room.type === type; // the type of room equal to the type i get from state 
      })
    }
// filter by capacity 
    if( capacity !== 1){ 
    tempRooms = tempRooms.filter(room => {
      return room.capacity >= capacity; 
    })
    }
// filter by price 
    tempRooms = tempRooms.filter(room => room.price <= price); // show rooms that has price < the price 
// filter by size 
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
// filter by breakfast 
    if(breakfast){ // if breakfast is true means i click on it 
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
// filter by pets
    if(pets){ 
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    // change the state 
    this.setState(({
      sortedRooms: tempRooms
    }))
  }

  render() {
    return <GlobalContext.Provider 
      value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
        }}>
      {this.props.children}
    </GlobalContext.Provider>
  }
}
