import React from 'react';
import { NavLink } from 'react-router-dom';

const handleChange = (e) => {
  // setPokemon(e.target.value.toLowerCase());
  console.log('handling change');
}

const handleSubmit = (e) => {
  e.preventDefault();
  // getPokemon();
  console.log('handling submit');
}

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/" title="Home">
          <p>Home</p>
        </NavLink>
        <NavLink to="/pokemon?page=1">
          <p>All Pokemon</p>
        </NavLink>
        <NavLink to="types">
          <p>Types</p>
        </NavLink>
          <form onSubmit={handleSubmit} className='searchForm'>
          <label>
            <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
          </label>
          </form>
      </nav>
    </div>
  );
}

export default Navigation;
