import React from 'react';
import { NavLink } from 'react-router-dom';
const NavItem = ({clicked, item}) => {
  const {exact, link, content} = item;
  return (
    <li onClick = {clicked}>
    <NavLink 
      exact = {exact}
      to = {link}>{content}</NavLink>
  </li>
  );
}
export default NavItem;