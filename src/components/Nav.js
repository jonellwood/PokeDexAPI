import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="navigation">
      <nav class="navbar">
        <div class="container">
          <Link class="navbar-brand" to="/">
            PokeDex Site
          </Link>

          <div>
            <ul class="navbar-nav">
              <li class={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class={`nav-item ${props.location.pathname === "/abilities" ? "active" : ""}`}>
                <Link class="nav-link" to="/abilities">
                  Abilities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default withRouter(Nav);

