import React from 'react';
import { NavLink } from 'react-router-dom';


function Pagination({ page, numberOfPages }) {
  return (
    <footer className="footer">
      <div>
        <NavLink to={`/pokemons?page=${page - 1}`}>
          <button type="button" disabled={page === 1}>
            Prev
          </button>
        </NavLink>
        <NavLink to={`/pokemons?page=${page + 1}`}>
          <button type="button" disabled={page === numberOfPages}>
            Next
          </button>
        </NavLink>
      </div>
      <p>
        <span>
          {`Page ${page}`}
        </span>
        {
          numberOfPages
          && (
            <span>
              {`/${numberOfPages}`}
            </span>
          )
        }
      </p>
    </footer>
  );
}

export default Pagination;
