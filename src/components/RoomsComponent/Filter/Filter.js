import React from 'react';
import Types from './inputFields/Types';
import Capacity from './inputFields/Capacity';
import Prices from './inputFields/Prices';
import Size from './inputFields/Size';
import Extras from './inputFields/Extras';
import Title from './../../shared/Title';
import './Filter.scss';
const Filter = () => {
  return (
    <section className = 'pd-7'>
      <div className = 'container-fluid'>
        <Title title = 'Search Rooms'/>
        <form className = 'row'>
{/* ---------- room types  --------------- */}
          <Types />
{/* ---------- guests => capacity -------- */}
          <Capacity />
{/* ---------- room price -------- */}
          <Prices />
{/* ---------- room size -------- */}
          <Size />
{/* ---------- breakfast & pets -------- */}
          <Extras/>
        </form>
      </div>      
    </section>
  );
}

export default Filter;