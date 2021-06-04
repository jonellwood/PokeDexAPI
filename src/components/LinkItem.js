import React from 'react';
import { NavLink } from 'react-router-dom';
import { stripIdFromUrl } from '../helpers/functions';


function LinkItem({ item, route }) {
  const id = stripIdFromUrl(item);
  const routeTo = `/${route || 'pokemon'}/${id}`;

  return (
    <NavLink to={routeTo} className="linkItem">
      <div>
        <p className="title capitalize">{item.name}</p>
        <p className="subtitle">{`#${id}`}</p>
      </div>
    </NavLink>
  );
}

export default LinkItem;
