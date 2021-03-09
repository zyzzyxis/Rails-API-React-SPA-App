import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <div style={{display:'flex'}}>
    <Link to ='/'>
      Home
    </Link>
    <p> - </p>
    <Link to ='/about'>
      About
    </Link>
  </div>
)

export default Navbar;