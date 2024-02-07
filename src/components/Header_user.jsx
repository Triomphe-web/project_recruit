import React from "react";
import "../css/header.css";
import logo from '../assets/react.svg'
import {NavLink} from 'react-router-dom'


export default function HeaderUser() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
      <NavLink>
          <b><img className="" src={logo} alt="logo" /><i> / </i><strong>E.employ</strong></b>
      </NavLink>
      
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link">
                Message
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link">
                Offre
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link btn btn-danger btn-sm" to="/">
                Se Déconnecter
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
