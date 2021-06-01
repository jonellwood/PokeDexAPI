import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <Nav>
      <NavLink to="/" title="Home">Home</NavLink>
      <NavLink to="/abilities" title="Abilities">Abilities</NavLink>
    </Nav>
  )
}

export default Nav;

