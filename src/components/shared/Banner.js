import React from 'react';
import { Link } from 'react-router-dom';
const Banner = ({HomePage, activePage, icon, header, title, children}) => {
  return (
    <div className = 'Banner'>
    {/* breadcrumb */}
      <nav>
        <ol className="breadcrumb">
          <li><Link to="/">{HomePage} {icon}</Link></li> 
          <li>{activePage} {icon}</li>
        </ol>
      </nav>
    {/* heading */}
      <h1 className = {header}>{title}</h1>
    {/* children  */}
      {children}
    </div>
  );
}

export default Banner;