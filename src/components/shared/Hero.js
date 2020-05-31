import React from 'react';
const Hero = ({children, hero}) => (
  <header className = {hero}>
    {children}
  </header>
);

export default Hero;