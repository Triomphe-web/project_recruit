import React from "react";
import "../css/header.css";
import logo from '../assets/react.svg'
import {FaHome} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
      <NavLink to="/">
          <b><img className="logo" src={logo} alt="logo" /><i> / </i><FaHome /></b>
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
              <NavLink className="nav-link" to="/jobs">
                Emplois
              </NavLink>

            </li>


            <li className="nav-item active">
              <NavLink className="nav-link" to="/acceuil">
                Se Connecter
              </NavLink>

            </li>

            


            <li className="nav-item active">
              <NavLink to="/signin" className="nav-link">
                S'Inscrire
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="/security" className="nav-link">
                Sécurité
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
