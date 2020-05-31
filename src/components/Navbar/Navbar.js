import React , {useState} from 'react';
import './Navbar.scss';
import logoImg from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import NavItem from './NavItem';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navItems] = useState([
    {
      exact: true,
      link: '/',
      content: 'Home'
    },
    {
      exact: false,
      link: '/about',
      content: 'About'
    },
    {
      exact: false,
      link: '/rooms',
      content: 'Rooms'
    }
  ]);
  return (
    <nav className = 'navbar'>
      <div className = 'nav-center'>
        <div className = 'nav-header'>
          {/* logo */}
          <Link to = '/'>
            <img src = {logoImg} alt = 'logo' height = '40px' width = '40px'/>
            <span>NUBIAN RESORT</span>
          </Link>
          {/* toggle btn */}
          <button className = 'nav-btn d-md-none' onClick = {() => setShow(!show)}>
            <FaAlignRight className = 'nav-icon'/>
          </button>
        </div>
        {/* nav items */}
        <ul className = {show? 'nav-links show-nav' : 'nav-links'}>
          {navItems.map((item, index) => {
            return <NavItem 
              clicked = {() => setShow(false)} 
              item = {item}
              key ={index}/>
          })}
        </ul>      
      </div>
    </nav>
  );
}
export default Navbar;