import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/" title="Home">
          <p>Home</p>
        </NavLink>
        {/* <NavLink to="/pokemon?page=1">
          <p>All Pokemon</p>
        </NavLink> */}
        <NavLink to="/types">
          <p>Types</p>
        </NavLink>
        {/* <NavLink to="/search">
          <p>Search</p>
        </NavLink> */}
      </nav>
    </div>
  );
}

export default Navigation;
