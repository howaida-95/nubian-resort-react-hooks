import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Rooms from './containers/Rooms';
import SingleRoom from './containers/SingleRoom/SingleRoom';
import {GlobalContextProvider} from './context/GlobalContext';
import Error from './containers/Error/Error';
function App() {
  return (
    <GlobalContextProvider>
      <Navbar/>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/rooms' component = {Rooms}/>
        <Route exact path = '/rooms/:slug' component = {SingleRoom}/>
        <Route component = {Error}/>      
      </Switch>
    </GlobalContextProvider>
  );
}
export default App;